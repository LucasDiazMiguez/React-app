import React from "react";
import {  Link } from "react-router-dom";

export default function MainRow(props) {
  return (
    <div className="">
      <ul className="d-flex flex-row justify-content-between p-2 ml-3 mr-2">
        <li>
          <Link to={"/category/cases"}>Gabinetes </Link>
        </li>
        <li>
          <Link to={"/category/processors"}>Procesadores </Link>
        </li>
        <li>
          <Link to={"/category/video-graphics-card"}> Placas de video </Link>
        </li>
        <li>
          <Link to={"/category/watches"}>Relojes </Link>
        </li>
        <li>
          <Link to={"/category/motherboards"}> Motherboards </Link>
        </li>
        <li>
          <Link to={"/category/ssd"}> SSD</Link>
        </li>
        <li>
          <Link to={"/category/notebooks"}>Notebooks </Link>
        </li>
        <li>
          <Link to={"/category/cameras"}>camaras </Link>
        </li>
      </ul>
    </div>
  );
}
