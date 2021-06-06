import React, { useContext } from "react";
import { CartContext } from "../context/CartContextTag"; //

const Button = ({ item }) => {
  const { addItem } = useContext(CartContext);
  console.log("item :>> ", item);
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
      <input style={{ width: "60px" }} value={item.quantity} />
      <button onClick={plusItem}> + </button>
    </div>
  );
};

export default Button;
