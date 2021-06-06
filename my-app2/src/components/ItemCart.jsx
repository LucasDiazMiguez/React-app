import React, { useContext } from "react";
import { CartContext } from "../context/CartContextTag";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCart = () => {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <div>
      {cart.map((element) => (
        <div
          className="row m-3 p-3 cart-item align-items-center justify-content-between"
          key={element.id}
        >
          <div class=" col-md-2 col-lg-2 ">
            <img alt={element.item.name} src={element.item.image}></img>
          </div>
          <div class=" col-md-3 col-lg-3 ">
            <h6 className="item-name">{element.item.name}</h6>
          </div>
          <div class=" col-md-2 col-lg-2 ">
            <h6 className="card-price">${element.item.price}</h6>
          </div>
          <div class=" col-md-3 col-lg-2 ">
            <Button item={element} />
          </div>

          <div class=" col-md-1 col-lg-3 ">
            <button
              className="button-alone"
              onClick={() => removeItem(element.id)}
            >
              <FontAwesomeIcon icon={["fas", "times"]} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCart;
