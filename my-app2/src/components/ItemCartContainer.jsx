import React, { useContext, useState } from "react";
import { CartContext } from "./CartContextTag";
import ItemCartNone from "./ItemCartNone";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
const ItemCartContainer = () => {
  const { cart, clear, totalPrice } = useContext(CartContext);
  return cart.length === 0 ? (
    <ItemCartNone />
  ) : (
    <div className="container  cart-container  p-1">
      <ItemCart />
      <button onClick={() => clear()}>Vaciar carrito</button>
      <h3>Precio total: {totalPrice}</h3>
      <h3>
      <Link to="/buyform">
        <button>Confirmar compra</button>
      </Link>
      </h3>
    </div>
  );
};

export default ItemCartContainer;
