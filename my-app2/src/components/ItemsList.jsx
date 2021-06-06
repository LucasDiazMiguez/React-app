import React from "react";
import { Items } from "./Items";

export const ItemList = (props) => {
  return (
    <div className="container ">
      <div className="row justify-content-around box ">
        {props.productos.map((producto) => (
          <Items key={producto.id} productos={producto.item} id={producto.id} />
        ))}
      </div>
    </div>
  );
};
