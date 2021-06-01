import React from "react";
import { NavLink } from "react-router-dom";

export default function MainRow(props) {
  return (
    <div className="container">
      <div className="row justify-content-around align-content-start ">
        <div className="col-lg-1 align-self-start">
          <NavLink to={"/category/cases"}>Gabinetes </NavLink>
        </div>
        <div className="col-lg-1">
          <NavLink to={"/category/processors"}>Procesadores </NavLink>
        </div>
        <div className="col-lg-2">
          <NavLink to={"/category/video-graphics-card"}>Placas de video</NavLink>
        </div>
        <div className="col-lg-1">
          <NavLink to={"/category/watches"}>Relojes </NavLink>
        </div>
        <div className="col-lg-1">
          <NavLink to={"/category/motherboards"}> Motherboards </NavLink>
        </div>
        <div className="col-lg-1">
          <NavLink to={"/category/ssd"}> SSD</NavLink>
        </div>
        <div className="col-lg-1">
          <NavLink to={"/category/notebooks"}>Notebooks </NavLink>
        </div>
        <div className="col-lg-1">
          <NavLink to={"/category/cameras"}>camaras </NavLink>
        </div>
      </div>
    </div>
  );
}
