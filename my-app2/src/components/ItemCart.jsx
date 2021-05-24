import React, { useContext, useState,useEffect} from "react";
import { CartContext } from "./CartContextTag";
import Button from "./Button";


function reducce(total, num, index) {
  console.log("num.cantidadAgregada :>> ", num.cantidadAgregada);
  return total + num.price * num.cantidadAgregada;
}

const ItemCart = () => {
  
  const [cart, setCart] = useContext(CartContext);
 
  const [totalPrice, setTotalPrice] = useState(cart.reduce(reducce, 0));
  useEffect(() => {
      setTotalPrice(cart.reduce(reducce, 0))
   
  })
  return (
    <div>
      {cart.map((element) => (
        <div className="row m-3 p-3 cart-item" key={element.id}>
          <div class="col-lg-3 col-md-3 ">
            {/* <Link
      to={`/item/${props.productos.id}`}
      className="no-text-decoration black-text"
    > */}
            <img src={element.image}></img>
            {/* </Link>
    <Link
      to={`/item/${props.productos.id}`}
      className="no-text-decoration black-text"
    > */}
          </div>
          <div class="col-lg-3 col-md-3 box-gallery-item">
            <h6 className="item-name">{element.name}</h6>
            {/* </Link> */}
          </div>
          <div class="col-lg-3 col-md-3 box-gallery-item">
            <h6 className="card-price">{element.price}</h6>
          </div>
          <div class="col-lg-3 col-md-3 box-gallery-item">
            <Button id={element.id} />
          </div>
        </div>
      ))}
      <span> precio total: {totalPrice}</span>
    </div>
  );
};

export default ItemCart;
