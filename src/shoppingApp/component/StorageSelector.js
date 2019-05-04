import React from "react";

const StorageSelector = ({ Storage, selectedAttributes, selectStorage }) => {
  return (
    <div className="attribute_selector_container">
      {Storage.map(storage => {
        let { _id, name } = storage;
        let isSelected = selectedAttributes["Storage"] == _id;

        return (
          <div
            onClick={() => {
              selectStorage && selectStorage(_id);
            }}
            className="size_selector_box"
            style={{
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

export default StorageSelector;
