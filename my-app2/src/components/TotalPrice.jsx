import React, { useContext, useState } from "react";
import { CartContext } from "./CartContextTag";

const TotalPrice = () => {
  function reducce(total, num, index) {
    console.log("num.cantidadAgregada :>> ", num.cantidadAgregada);
    return total + num.price * num.cantidadAgregada;
  }
  const [cart, setCart] = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(cart.reduce(reducce, 0));
  return (
    <div>
      <span>{totalPrice}</span>
    </div>
  );
};

export default TotalPrice;
