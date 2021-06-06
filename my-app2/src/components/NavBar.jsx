import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavBar(props) {
  const { itemsAmount } = useContext(CartContext);
  console.log("itemsAmount() :>> ", itemsAmount());
  return (
    <div>
      <div className="container-fluid header-container ">
        <div className="row align-items-center justify-content-between  pt-2 ">
          <div className="col-3 col-sm-2 col-md-2 col-lg-4 ">
            <Link to={`/`}>
              <div className="d-flex flex-nowrap align-items-center">
                <img
                  class="img-fluid logo-img mt-1"
                  src="https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/blackLogo.png?alt=media&token=035ac9eb-3b88-45bc-9906-84ade060f8d0"
                  alt="Logo"
                ></img>
                <h1 className="no-text-decoration pl-2 mt-4">HardwareHouse</h1>
              </div>
            </Link>
          </div>
          <div className=" col-4 col-sm-4 col-md-5 col-lg-4 ">
            <nav className="menu d-flex flex-row p-1  justify-content-end">
              <Link
                to={`/sign-in`}
                className="b-w-hover text-no-wrap no-text-decoration mr-3 p-1"
              >
                Iniciar Sesión
              </Link>
              <Link
                to={`/register`}
                className="b-w-hover text-no-wrap no-text-decoration mr-3 p-1"
              >
                Crear Usuario
              </Link>
              <Link
                to={`/shopping-cart`}
                className="b-w-hover   text-no-wrap no-text-decoration mr-3 p-1"
                id="cart-icon-b"
              >
                {itemsAmount() > 0 && <span>{itemsAmount()}</span>}
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
