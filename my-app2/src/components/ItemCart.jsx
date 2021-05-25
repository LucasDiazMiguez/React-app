import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContextTag";
import Button from "./Button";


const ItemCart = () => {
  const { cart, remove, clear,totalPrice } = useContext(CartContext);

  
  return (
    <div>
      {cart.map((element) => (
        <div className="row m-3 p-3 cart-item" key={element.id}>
          <div class="col-lg-3 col-md-3 ">
            <img src={element.image}></img>
          </div>
          <div class="col-lg-3 col-md-3 box-gallery-item">
            <h6 className="item-name">{element.name}</h6>
          </div>
          <div class="col-lg-3 col-md-3 box-gallery-item">
            <h6 className="card-price">{element.price}</h6>
          </div>
          <div class="col-lg-3 col-md-3 box-gallery-item">
            <Button item={element} />
          </div>

          <div class="col-lg-3 col-md-3 box-gallery-item">
            <button onClick={() => remove(element.id)}> Remove item</button>
          
          </div>
        </div>
      ))}
      <button onClick={() => clear()}>Vaciar carrito</button>
      <h3>Precio total: {totalPrice()}</h3>
    </div>
  );
};

export default ItemCart;
