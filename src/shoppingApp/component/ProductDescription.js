import React from "react";
import QuantitySelector from "./QuantitySelector";
import ColorSelector from "./ColorSelector";
import StorageSelector from "./StorageSelector";

export default ({ product_details, selectedAttributes, availableAttributes, selectColor, selectStorage }) => {
  return (
    <div className="product-description__container">
      <p className="product-description__title">{product_details.name}</p>
      <div className="product-description__title__border" />
      <p className="product-description__text text-secondary ">{product_details.desc}</p>
      <div className="dropdown-divider product-description__dividor " />
      <div className="p10">
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
      <div className="dropdown-divider  product-description__dividor" />
      <div className="row">
        <div className="col-12">
          <span className="text-secondary" style={{ fontSize: 12 }}>{`${
            availableAttributes["Colour"].length
          } color availabe`}</span>
          <ColorSelector
            Color={availableAttributes["Colour"]}
            selectedAttributes={selectedAttributes}
            selectColor={selectColor}
          />
        </div>
        <div className="col-12 p10">
          <span className="text-secondary" style={{ fontSize: 12 }}>{`${
            availableAttributes["Storage"].length
          } storage availabe`}</span>
          <StorageSelector
            selectStorage={selectStorage}
            Storage={availableAttributes["Storage"]}
            selectedAttributes={selectedAttributes}
          />
        </div>
        <div className="col-12 " style={{ paddingTop: 5, paddingBottom: 5 }}>
          <QuantitySelector />
        </div>
        <div className="col-12 p10">
          <div className="row">
            <div className="col-md-8 ">
              <button
                type="button"
                style={{ fontSize: 12, backgroundColor: "#3eada1" }}
                class="btn btn-primary btn-lg btn-block border-0"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
