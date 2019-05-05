import React from "react";
const QuantitySelector = ({ quantitySelector, quantity = 1 }) => {
  return (
    <div>
      <span style={{ fontSize: 12, paddingTop: 5, paddingBottom: 10 }}>Quantity </span>
      <div className="quantity_selector_container">
        <div
          onClick={() => {
            quantitySelector && quantitySelector(quantity - 1);
          }}
          className="quantity_selector_box"
          style={{ color: "#3eada1", cursor: "pointer" }}
        >
          -
        </div>
        <div
          className="quantity_selector_box"
          style={{
            backgroundColor: "#3eada1",
            color: "white"
          }}
        >
          {quantity}
        </div>
        <div
          onClick={() => {
            quantitySelector && quantitySelector(quantity + 1);
          }}
          className="quantity_selector_box"
          style={{ color: "#3eada1", cursor: "pointer" }}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
