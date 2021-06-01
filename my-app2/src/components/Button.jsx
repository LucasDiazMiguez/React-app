import React, { useContext } from "react";
import { CartContext } from "./CartContextTag"; //

const Button = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const plusItem = () => {
    if (item.quantity < item.item.stock) {
      addItem(item.item, 1,item.item.id);
    }
  };

  const minusItem = () => {
    if (item.quantity > 0) {
      addItem(item.item, -1,item.item.id);
    }
  };

  return (
    <div>
      <button onClick={minusItem}> - </button>
      <input value={item.quantity} />
      <button onClick={plusItem}> + </button>
    </div>
  );
};

export default Button;
