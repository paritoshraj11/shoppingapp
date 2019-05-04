import React from "react";
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

export default QuantitySelector;
