import React from "react";
import { Link } from "react-router-dom";
export function NavBar(props) {
  return (
    <div>
      <div className="container-fluid header-container">
        <div className="row align-items-center justify-content-between  background-black ">
          <div className="col-12 col-sm-2 col-md-2 col-lg-3">
            <div>
              <Link to={`/`}>
                {/* <img src="../my-enes/Rovel.png " alt="Logo"></img> */}
                {/* poner imagen  */}
                <h1 className="no-text-decoration">.........................</h1>
              </Link>
            </div>
          </div>
          <div className=" col-11 col-sm-7 col-md-7 col-lg-9 ">
            <nav className="menu d-flex flex-row p-1 background-black justify-content-end">
              <div>
                <input
                  className="input-search p-1 mr-3"
                  type="text"
                  placeholder="buscar"
                ></input>
                <i className="fas fa-search" id="search-icon"></i>
              </div>
              <Link
                to={`/sign-in`}
                className="b-w-hover no-text-decoration mr-3 p-1"
              >
                Iniciar Sesión
              </Link>
              <Link
                to={`/register`}
                className="b-w-hover no-text-decoration mr-3 p-1"
              >
                Crear Usuario
              </Link>
              <Link
                to={`/shopping-cart`}
                className="b-w-hover no-text-decoration mr-3 p-1"
                id="cart-icon-b"
              >
                Carrito
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
