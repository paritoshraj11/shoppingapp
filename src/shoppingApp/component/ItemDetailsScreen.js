import React, { Component } from "react";
var toHex = require("colornames");

export default class ItemDetailsScreen extends Component {
  render() {
    let { product_details, selectedAttributes, availableAttributes, selectColor, selectStorage } = this.props;
    if (!product_details) {
      return null;
    }
    console.log(">>> product details >>>>>", JSON.stringify(availableAttributes));
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 border">
            <h1>image coursel</h1>
          </div>
          <div className="col-md-6 border">
            <div>
              <p className="text-uppercase font-weight-bold" style={{ marginBottom: 2 }}>
                {product_details.name}
              </p>
              <div style={{ width: "10%", border: "2px solid #3eada1" }} />
              <p className="text-secondary mt-2 " style={{ fontSize: 14 }}>
                {product_details.desc}
              </p>
              <div className="dropdown-divider" style={{ marginTop: "1em", marginBottom: "1em" }} />
              <div>
                <span className="font-weight-bold">{`₹ ${Math.ceil(product_details.sale_price)}`}</span>
                <span className="pl-2 font-weight-bold text-secondary" style={{ fontSize: 10 }}>
                  <del>{`₹ ${product_details.mark_price}`}</del>
                </span>
                <div>
                  <span style={{ color: "#47b6ab", fontSize: 12 }}>{`You Save ₹ ${Math.ceil(
                    product_details.mark_price - product_details.sale_price
                  )} `}</span>
                </div>
                <div>
                  <span className="text-secondary" style={{ fontSize: 10 }}>
                    Local taxes included (where applicable)
                  </span>
                </div>
              </div>
              <div className="dropdown-divider" style={{ marginTop: "1em", marginBottom: "1em" }} />
              <div className="row">
                <div className="col">
                  <span className="text-secondary" style={{ fontSize: 12 }}>{`${
                    availableAttributes["Colour"].length
                  } color availabe`}</span>
                  <ColorSelector
                    Color={availableAttributes["Colour"]}
                    selectedAttributes={selectedAttributes}
                    selectColor={selectColor}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <span className="text-secondary" style={{ fontSize: 12 }}>{`${
                    availableAttributes["Storage"].length
                  } storage availabe`}</span>
                  <StorageSelector
                    selectStorage={selectStorage}
                    Storage={availableAttributes["Storage"]}
                    selectedAttributes={selectedAttributes}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuantitySelector />
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mt-2 mb-2">
                  <button
                    type="button"
                    style={{ fontSize: 12, backgroundColor: "#3eada1" }}
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const QuantitySelector = ({}) => {
  return (
    <div>
      <span style={{ paddingTop: "0.5em", paddingBottom: "0.5em", fontSize: 12 }}>Quantity </span>
      <div
        style={{
          width: 100,
          height: 30,
          display: "flex",
          flexDirection: "row",
          border: "1px solid #3eada1",
          fontSize: 12
        }}
      >
        <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", color: "#3eada1" }}>
          -
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3eada1",
            color: "white"
          }}
        >
          1
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", color: "#3eada1" }}>
          +
        </div>
      </div>
    </div>
  );
};

const StorageSelector = ({ Storage, selectedAttributes, selectStorage }) => {
  console.log(">>>Storage", Storage);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: "0.5em",
        paddingBottom: "0.5em"
      }}
    >
      {Storage.map(storage => {
        let { _id, name } = storage;
        let isSelected = selectedAttributes["Storage"] == _id;

        return (
          <div
            onClick={() => {
              selectStorage && selectStorage(_id);
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 35,
              width: 35,
              border: "1px solid #d9d9d9",
              marginRight: 20,
              backgroundColor: isSelected ? "#d9d9d9" : "white"
            }}
          >
            <span class="text-secondary" style={{ fontSize: 10 }}>
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const ColorSelector = ({ Color, selectedAttributes, selectColor }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", paddingTop: "0.5em", paddingBottom: "0.5em" }}
    >
      {Color.map(color => {
        let { _id, name = "" } = color;
        let isSelected = selectedAttributes["Colour"] == _id;
        return (
          <div
            onClick={() => {
              selectColor && selectColor(_id);
            }}
            style={{
              flexDirection: "row",
              display: "flex",
              marginRight: 10,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 18,
              borderRadius: 5,
              backgroundColor: isSelected ? "#d9d9d9" : "white"
            }}
          >
            <div
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: name,
                marginRight: 10
              }}
            />
            <span style={{ color: color.name, fontSize: 10 }}>{name.toLocaleUpperCase()}</span>
          </div>
        );
      })}
    </div>
  );
};
