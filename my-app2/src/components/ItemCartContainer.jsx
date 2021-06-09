import React, { useContext } from "react";
import { CartContext } from "../context/CartContextTag";
import ItemCartNone from "./ItemCartNone";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
const ItemCartContainer = () => {
  const { cart, clear, totalPrice } = useContext(CartContext);

  return cart.length === 0 ? (
    <ItemCartNone />
  ) : (
    <div className="container  cart-container  p-1">
      <div className="row">
        <div className="col-12 col-lg-12">
          <ItemCart />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
          <button
            className="button-alone button-style-1 font-weight-bold "
            onClick={() => clear()}
          >
            Vaciar carrito
          </button>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <h5 id="cart-total-price" className="text-center ">
            Precio total: ${totalPrice()}
          </h5>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <h6>
            <Link to="/buyform">
              <button className="button-alone font-weight-bold button-style-1  black-text">
                <span>Confirmar compra</span>
              </button>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ItemCartContainer;
