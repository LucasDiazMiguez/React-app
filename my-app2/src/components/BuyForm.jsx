import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContextTag";
import { getFirestore } from "../config/firebase";
import Orders from "./Orders";
export const BuyForm = () => {
  const { cart, totalPrice, clear } = useContext(CartContext);
  const [buyer, setBuyer] = useState({});
  const [orderId, setOrderId] = useState("");
  const [check, setCheck] = useState("");

  const handleInputName = (e) => {
    setBuyer({ ...buyer, name: e.target.value });
  };
  const handleInputPhoneNumber = (e) => {
    setBuyer({ ...buyer, phone: e.target.value });
  };
  const handleInputEmail = (e) => {
    setBuyer({ ...buyer, email: e.target.value });
  };
  const createOrder = () => {
    const db = getFirestore(); //abrir la puerta a la base de datos
    setOrderId(1);
    const orderData = {
      buyer: { ...buyer },
      price: totalPrice(),
      cart: {
        ...cart.map((value) => {
          return {
            id: value.id,
            quantity: value.quantity,
            item: value.item.name,
            price: value.item.price,
          };
        }),
      },
    };
    db.collection("Orders")
      .add(orderData)
      .then((data) => {
        setOrderId(data.id);
      })
      .then(() => clear());
  };
  const coroboration = () => {
    if (
      buyer.hasOwnProperty("name") &&
      buyer.hasOwnProperty("email") &&
      buyer.hasOwnProperty("phone")
    ) {
      if (
        buyer.name.trim() !== "" &&
        buyer.phone.trim() !== "" &&
        buyer.email.trim() !== ""
      ) {
        if (buyer.email.trim().indexOf("@gmail.com") !== -1) {
          createOrder();
          setCheck("Datos ingresados de forma correcta, obteniendo orden");
        } else {
          setCheck("Dirección de email incorrecta, solo se aceptan @gmail.com");
        }
      }
    } else {
      setCheck("datos ingresados de forma incorrecta");
    }
  };
  return (
    <div className="container">
      {orderId !== "" ? (
        <Orders id={orderId}></Orders>
      ) : (
        <>
          <span className="p-3">
            <h3 className="font-weight-bold"> Ingrese sus datos por favor</h3>
          </span>

          <form>
            <div className="row p-2 ">
              <label htmlFor="fname" className="p-1">
                Nombre completo
              </label>
              <input
                type="text"
                onChange={handleInputName}
                id="lname"
                name="lname"
                className="p-1"
              />
            </div>
            <div className="row p-2">
              <label htmlFor="email" className="p-1">
                Email
              </label>
              <input
                type="email"
                onChange={handleInputEmail}
                id="lname"
                name="email"
                className="p-1"
              />
            </div>
            <div className="row p-2">
              <label htmlFor="phone-number" className="p-1">
                Número de teléfono
              </label>
              <input
                type="tel"
                onChange={handleInputPhoneNumber}
                id="phone-number"
                name="lname"
                className="p-1"
              />
            </div>
          </form>

          <h6>
            <button className="button-style-1" onClick={() => coroboration()}>
              Obtener orden de compra
            </button>
            <span className="font-weight-bold"> {check}</span>
          </h6>
        </>
      )}
    </div>
  );
};
