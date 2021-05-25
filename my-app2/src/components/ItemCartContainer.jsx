import React, { useContext } from "react";
import { CartContext } from "./CartContextTag";
import ItemCartNone from "./ItemCartNone";
import ItemCart from "./ItemCart";
const ItemCartContainer = () => {
  const { cart } = useContext(CartContext);
  return cart.length === 0 ? (
    <ItemCartNone />
  ) : (
    <div className ="container  cart-container  p-1">
      <ItemCart />
    </div>
  );
};

export default ItemCartContainer;
