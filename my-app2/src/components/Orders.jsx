import React, { useState,useContext } from "react";
import {CartContext} from "./CartContextTag"
import {getFirestore} from "./firebase"


const Orders = (props) => {
const [orderData, setOrderData] = useState({})
setTimeout(() => {
  
  const db = getFirestore();
    db.collection("Orders")
      .get(props.id)
      .then((doc) => {
        if (doc.exists) {
          var perro = doc.data();
          setOrderData(perro);
          // console.log('perro :>> ', perro);
        } else {
          // console.log("No such document!");
        }
      })
      .catch((error) => {
        // console.log("Error getting document:", error);
      });
},20000);  //!no funciono, no encuentra el doc
  //! en esta parte lo que hacia era ir a buscar el documento que cree recién pero parece que tarda un poco más en crearlo entonces no puedo traerlo

  return <div>
      <h3>Orden de compra: {props.id}</h3>
  </div>;
};

export default Orders;
