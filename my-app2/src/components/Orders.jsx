import React, { useState,useContext } from "react";
import {CartContext} from "./CartContextTag"
import {getFirestore} from "./firebase"


const Orders = (props) => {
const [orderData, setOrderData] = useState({})
  // var objectConverter = {
  //   toFirestore: function (comprador) {
  //     return {
  //       buyer: {
  //         name: comprador.name,
  //         email: comprador.email,
  //         phone: comprador.phone,
  //       },
  //       items: {
  //         ...cart.map((value) => {
  //           return {
  //             id: value.id,
  //             quantity: value.quantity,
  //             item: value.item.name,
  //             price: value.item.price,
  //           };
  //         }),
  //       },
  //       price: totalPrice,
  //     };
  //   },
  //   fromFirestore: function (snapshot, options) {
  //     const data = snapshot.data(options);
  //     return new 0();
  //   },
  // };
  //https://www.youtube.com/watch?v=o7d5Zeic63s&t=804s
  const db = getFirestore(); //abrir la puerta a la base de datos
  // console.log('props.id :>> ', props.id);
  db.collection("Orders")
    // .where("buyer.email", "==", "lucasdiazmiguez@gmail.com")
    .get(props.id)
    .then((doc) => {
      if (doc.exists) {
        // Convert to City object
        var perro = doc.data();
        // Use a City instance method
        // console.log(perro.toString());
        // console.log(perro);
        setOrderData(perro);
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  return <div>
      <h3>si</h3>
  </div>;
};

export default Orders;
