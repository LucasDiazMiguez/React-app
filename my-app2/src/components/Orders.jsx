import React,{useContext,useEffect} from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import {CartContext} from "../context/CartContextTag"
const Orders = (props) => {
  const { clear} = useContext(CartContext);
  useEffect(() => {
    clear()
    return () => {
    };
  }, []);
  return props.id === 1 ? (
    <Loading />
  ) : (
    <div>
      <h3 className="font-weight-bold">Orden de compra: {props.id}</h3>
      <span>Gracias por su compra, si desea seguir comprando presione</span>
      <Link to="/"> Catálogo</Link>
    </div>
  );
};

export default Orders;
