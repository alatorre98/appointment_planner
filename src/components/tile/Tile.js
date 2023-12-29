import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.keys(description).map((key, value) => {
        return <p>{description.value}</p>
      })}
    </div>
  );
};
