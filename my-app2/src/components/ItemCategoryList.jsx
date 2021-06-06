import React from "react";
import { Link } from "react-router-dom";
export const ItemCategoryList = (props) => {
  return (
    <div className="col-lg-3 col-md-3 box-gallery-item">
      <Link
        to={`/item/${props.productos.id}`}
        className="no-text-decoration black-text"
      >
        <img
          alt={props.productos.item.image}
          src={props.productos.item.image}
        ></img>
      </Link>
      <Link
        to={`/item/${props.productos.id}`}
        className="no-text-decoration black-text"
      >
        <h6 className="item-name">{props.productos.item.name}</h6>
      </Link>
      <h6 className="card-price">${props.productos.item.price}</h6>
    </div>
  );
};
