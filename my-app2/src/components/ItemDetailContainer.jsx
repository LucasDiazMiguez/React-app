import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore} from "./firebase"


export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(0);
  const { productId } = useParams();//! a itm detail ya van cuando ya tienen un params seteado
  //!vamos a tenr que pedirle es leemnto a la base de datos
  console.log('productId :>> ', productId);
  const [agrego, setAgrego] = useState(false);
  useEffect(() => {
    const db = getFirestore(); //abrir la puerta a la base de datos
    db.collection("items").doc(productId)
      .get()
      .then((querySnapshot) => {
        console.log('querySnapshot.data() :>> ', querySnapshot.data());
        let a={item: querySnapshot.data(),id:querySnapshot.id} 
        console.log('a :>> ', a);
        setProduct(a)
        setAgrego(true);
        console.log('product :>> ', product);
      })
      
      .catch((error) => {
        console.log("Error getting documents: ", error);
        setAgrego(false)
      });
  }, [productId]); 
 
  return agrego != 0 ? (
    <div className="container ">
            <ItemDetail product={product} />
    </div>
  ) : (
    <img alt="loading" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2Fb6e0b072897469.5bf6e79950d23.gif&f=1&nofb=1"></img>
  );
};
