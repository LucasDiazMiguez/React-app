import React, { useContext } from "react";
import { CartContext } from "../context/CartContextTag"; //

const Button = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const plusItem = () => {
    if (item.quantity <= item.item.stock) {
      addItem(item.item, 1, item.id);
    }
  };

  const minusItem = () => {
    if (item.quantity > 0) {
      addItem(item.item, -1, item.id);
    }
  };

  return (
    <div className="d-flex justify-content-around p-1 m-1">
      <button onClick={minusItem}> - </button>
      <input className="button-alone input-witdh pl-4" value={item.quantity} readOnly />
      <button onClick={plusItem}> + </button>
    </div>
  );
};

export default Button;
