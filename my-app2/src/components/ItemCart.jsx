import React, { useContext, useState } from "react";
import { CartContext } from "./CartContextTag";
import Button from "./Button";

const ItemCart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const [comprar, setComprar] = useState(0);
  // console.log("comprar :>> ", comprar);
  return (
    <div>
      {cart.map((element) => (
        <div className="row m-3 p-3 cart-item" key={element.id}>
          <div class="col-lg-3 col-md-3 ">
            <img alt={element.item.name} src={element.item.image}></img>
          </div>
          <div class="col-lg-3 col-md-3 box-gallery-item">
            <h6 className="item-name">{element.item.name}</h6>
          </div>
          <div class="col-lg-3 col-md-3 box-gallery-item">
            <h6 className="card-price">{element.item.price}</h6>
          </div>
          <div class="col-lg-3 col-md-3 box-gallery-item">
            <Button item={element} />
          </div>

          <div class="col-lg-3 col-md-3 box-gallery-item">
            <button onClick={() => removeItem(element.id)}> Remove item</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCart;
