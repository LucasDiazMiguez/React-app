import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../config/firebase";

export const ItemDetailContainer = (props) => {
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

  return agrego != 0 ? (
    <div className="container ">
      <ItemDetail product={product} />
    </div>
  ) : (
    <img
      alt="loading"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.203OyIQrZQcvPAtttruksgHaD6%26pid%3DApi%26h%3D160&f=1"
    ></img>
  );
};
