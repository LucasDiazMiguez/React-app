import React, { useState,useContext } from "react";
import {CartContext} from "../context/CartContextTag"
import {getFirestore} from "../config/firebase"


const Orders = (props) => {

  return <div>
      <h3>Orden de compra: {props.id}</h3>
  </div>;
};

export default Orders;
