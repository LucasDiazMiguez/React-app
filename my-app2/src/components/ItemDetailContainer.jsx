import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../config/firebase";
import Loading from "./Loading";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(0);
  const { productId } = useParams();
  const [agrego, setAgrego] = useState(false);
  useEffect(() => {
    const db = getFirestore(); //abrir la puerta a la base de datos
    db.collection("items")
      .doc(productId)
      .get()
      .then((querySnapshot) => {
        setProduct({ item: querySnapshot.data(), id: querySnapshot.id });
        setAgrego(true);
      })
      .catch((error) => {
        setAgrego(false);
      });
  }, [productId]);
  return agrego !== false ? (
    <div className="container ">
      <ItemDetail product={product} />
    </div>
  ) : (
    <Loading />
  );
};
