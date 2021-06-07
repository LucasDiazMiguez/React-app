import React from "react";
import { Link } from "react-router-dom";

const Orders = (props) => {

  return (props.id == 1 ? <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.203OyIQrZQcvPAtttruksgHaD6%26pid%3DApi%26h%3D160&f=1" alt="" /> : <div>
      <h3 className="font-weight-bold">Orden de compra: {props.id}</h3>
      <span>Gracias por su compra, si desea seguir comprando presione</span>
      <Link to="/"> Catálogo</Link>
  </div>)
};

export default Orders;
