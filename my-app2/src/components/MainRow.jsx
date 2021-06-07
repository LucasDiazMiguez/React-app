import React from "react";
import { NavLink } from "react-router-dom";

export default function MainRow(props) {
  return (
    <div className="container">
      <div className="row justify-content-around align-content-center  ">
        <div className="col-lg-1 m-1 ">
          <NavLink
            to={"/category/Gabinetes"}
            activeClassName="selected-link"
            className="p-1 navLink no-text-decoration  "
          >
            Gabinetes
          </NavLink>
        </div>
        <div className="col-lg-1 m-1">
          <NavLink
            className="p-1 navLink no-text-decoration"
            to={"/category/Procesadores"}
            activeClassName="selected-link"
          >
            Procesadores
          </NavLink>
        </div>
        <div className="col-lg-1 m-1">
          <NavLink
            className="p-1 text-no-wrap navLink no-text-decoration "
            activeClassName="selected-link text-no-wrap "
            to={"/category/Placas de video"}
          >
            Placas de video
          </NavLink>
        </div>
        <div className="col-lg-1 m-1">
          <NavLink
            className="p-1 navLink no-text-decoration"
            activeClassName="selected-link"
            to={"/category/Relojes"}
          >
            Relojes
          </NavLink>
        </div>
        <div className="col-lg-1 m-1 align-content-center">
          <NavLink
            className="p-1 navLink no-text-decoration"
            activeClassName="selected-link"
            to={"/category/Placas madre"}
          >
            Motherboards
          </NavLink>
        </div>
        <div className="col-lg-1 m-1 align-self-center">
          <NavLink
            className="p-1 text-center navLink no-text-decoration"
            activeClassName="selected-link"
            to={"/category/SSD"}
          >
            SSD
          </NavLink>
        </div>
        <div className="col-lg-1 m-1">
          <NavLink
            className="p-1 navLink no-text-decoration"
            activeClassName="selected-link"
            to={"/category/Notebooks"}
          >
            Notebooks
          </NavLink>
        </div>
        <div className="col-lg-1 m-1">
          <NavLink
            className="p-1 navLink no-text-decoration"
            activeClassName="selected-link"
            to={"/category/Camaras"}
          >
            Camaras
          </NavLink>
        </div>
      </div>
    </div>
  );
}
