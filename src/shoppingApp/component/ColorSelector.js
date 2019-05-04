import React from "react";

const getColor = (name = "") => {
  if (name.toLocaleLowerCase() == "rose gold") return "#b76e79";
  if (name.toLocaleLowerCase() == "black grey") return "#A9A9A9";
  return name;
};
const ColorSelector = ({ Color, selectedAttributes, selectColor }) => {
  return (
    <div className="attribute_selector_container">
      {Color.map(color => {
        let { _id, name = "" } = color;
        let isSelected = selectedAttributes["Colour"] == _id;
        return (
          <div
            onClick={() => {
              selectColor && selectColor(_id);
            }}
            className="color_selector_box"
            style={{
              backgroundColor: isSelected ? "#d9d9d9" : "white"
            }}
          >
            <div
              className="color_selector_circle"
              style={{
                backgroundColor: getColor(name)
              }}
            />
            <span style={{ color: color.name, fontSize: 10 }}>{name.toLocaleUpperCase()}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ColorSelector;
