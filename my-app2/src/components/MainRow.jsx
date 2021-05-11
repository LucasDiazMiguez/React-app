import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function MainRow(props) {
  return (
    <div className="d-flex flex-column align-items-start p-3">
      <h3>Categories</h3>
      <ul>
        <li>
          {" "}
          <Link to={"/category/cases"}>Gabinetes </Link>
        </li>
        <li>
          {" "}
          <Link to={"/category/processors"}>Procesadores </Link>
        </li>
        <li>
          {" "}
          <Link to={"/category/video-graphics-card"}> Placas de video </Link>
        </li>
        <li>
          {" "}
          <Link to={"/category/watches"}>Relojes </Link>
        </li>
        <li>
          {" "}
          <Link to={"/category/motherboards"}> Motherboards </Link>
        </li>
        <li>
          {" "}
          <Link to={"/category/ssd"}> SSD</Link>
        </li>
        <li>
          {" "}
          <Link to={"/category/notebooks"}>Notebooks </Link>
        </li>
        <li>
          {" "}
          <Link to={"/category/cameras"}>camaras </Link>
        </li>
      </ul>
    </div>
  );
}
