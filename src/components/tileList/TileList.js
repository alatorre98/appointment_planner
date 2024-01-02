import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({info}) => {
  return (
    <div>
      {info.map((individual, idx) => {
        const {name, ...contactInfo} = individual;
        return <Tile key={idx} name={name} description={contactInfo} />;
      })}
    </div>
  );
};
