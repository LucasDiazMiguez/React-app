import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContextTag";
import { CartContextTag } from "./CartContextTag";
import Button from "./Button";




const ItemDetail = (props) => {
  // const [cart,setCart]=useContext(CartContext)


  const [count, setCount] = useState(0);
 
  console.log("im in itemdeital y vale", props.product);
  
  return (
    <div class="row item-detail">
      <div class="col-lg-7 col-md-7 ">
        <img src={props.product.img}></img>
      </div>
      <div class="col-lg-5 col-md-5  left-border">
        <h3>{props.product.name}</h3>
        <h6 className="p-3">Descripción: {props.product.description}</h6>
        <h4 className="pl-3 pr-3 ">{props.product.value}</h4>
        <Button product={props.product}></Button>
      </div>
    </div>
  );
};

export default ItemDetail;
/* <div class="col-lg-3 col-md-3 box-gallery-item">
<Link
  to={`/item/${props.productos.id}`}
  className="no-text-decoration black-text"
>
  <img src={props.productos.img}></img>
</Link>
<Link
  to={`/item/${props.productos.id}`}
  className="no-text-decoration black-text"
>
  <h6 className="item-name">{props.productos.name}</h6>
</Link>
<h6 className="card-price">{props.productos.value}</h6>
<button>agregar al carrito </button>
</div> */
