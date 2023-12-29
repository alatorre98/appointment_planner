import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts}) => {
  return (
    <div>
      {contacts.map((contact, idx) => {
        const {name, ...contactInfo} = contact;
        return <Tile key={idx} name={name} description={contactInfo} />;
      })}
    </div>
  );
};
