import React, { useContext } from "react";
import { CartContext } from "./CartContextTag";
import ItemCartNone from "./ItemCartNone";
import ItemCart from "./ItemCart";
import TotalPrice from "./TotalPrice";
const ItemCartContainer = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log("cart.length() :>> ", cart);
  return cart.length == 0 ? (
    <ItemCartNone />
  ) : (
    <div className="container  cart-container  p-1">
      <ItemCart />
    </div>
  );
};

export default ItemCartContainer;
