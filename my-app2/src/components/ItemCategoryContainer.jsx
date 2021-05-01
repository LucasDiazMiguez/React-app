import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemCategoryList } from "./ItemCategoryList";

export const ItemCategoryContainer = (props) => {
  const { categoryId } = useParams();
  const selector = props.productos.filter(
    ({ category }) => category === categoryId
  );

  return (
    <div class="container ">
        <div class="row justify-content-around box " >

      {selector.map((i) => (
        <ItemCategoryList productos={i} />
        ))}
        </div>
    </div>
  );
};
