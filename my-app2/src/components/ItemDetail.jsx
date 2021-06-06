import React from "react";

import AddToCart from "./AddToCart";

const ItemDetail = (props) => {
  return (
    <div class="row item-detail">
      <div class="col-lg-7 col-md-7 ">
        <img alt={props.product.item.name} src={props.product.item.image}></img>
      </div>
      <div class="col-lg-5 col-md-5  left-border">
        <h3>{props.product.item.name}</h3>
        <h6 className="p-3">Descripción: {props.product.item.description}</h6>
        <h4 className="pl-3 pr-3 ">${props.product.item.price}</h4>
        <AddToCart product={props.product}></AddToCart>
      </div>
    </div>
  );
};

export default ItemDetail;
