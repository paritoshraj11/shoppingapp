import React from "react";
const QuantitySelector = ({}) => {
  return (
    <div>
      <span style={{ fontSize: 12, paddingTop: 5, paddingBottom: 10 }}>Quantity </span>
      <div className="quantity_selector_container">
        <div className="quantity_selector_box" style={{ color: "#3eada1" }}>
          -
        </div>
        <div
          className="quantity_selector_box"
          style={{
            backgroundColor: "#3eada1",
            color: "white"
          }}
        >
          1
        </div>
        <div className="quantity_selector_box" style={{ color: "#3eada1" }}>
          +
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
