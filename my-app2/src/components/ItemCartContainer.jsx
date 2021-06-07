import React, { useContext, useEffect } from "react";
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
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-around">
          <button
            className="button-alone font-weight-bold"
            onClick={() => clear()}
          >
            Vaciar carrito
          </button>
          <h6 id="cart-total-price">Precio total: ${totalPrice()}</h6>
          <h6>
            <Link to="/buyform">
              <button className="button-alone black-text">
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
