import React, { useState, useContext } from "react";
import { CartContext } from "./CartContextTag";
import { getFirestore } from "./firebase";
import Orders from "./Orders";
export const BuyForm = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const [buyer, setBuyer] = useState({});
  const [goToOrder, setGoToOrder] = useState(0);
  const [orderId, setOrderId] = useState("");

  //? porque cuando cambio el input se actualiza todo? o sea llama a la función, setea el buyer y dsps coomo que se actualiza el componente?
  // ver si con una sola función puedo ver que input tocó
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
    // console.log("orderDat a :>> ", orderData);
    db.collection("Orders")
      .add(orderData)
      .then((data) => {
        setOrderId(data.id);
      });
    // {cart.map((value)=>{ return {id: value.id,quantity: value.quantity,item:value.item.name,item:value.item.price}})
    //   items:{...cart.map((value)=>{ return {id: value.id,quantity: value.quantity,item:value.item.name,price:value.item.price}})},
    //   price:totalPrice
    // });
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
        console.log("cumplió :>> ");
        setGoToOrder(1);
        createOrder();
      }
    }
  };
  return (
    <div>
      <form>
        <label for="fname"> Nombre completo</label>
        <input type="text" onChange={handleInputName} id="lname" name="lname" />
        <label for="email"> Email</label>
        <input
          type="email"
          onChange={handleInputEmail}
          id="lname"
          name="email"
        />
        <label for="phone-number"> Número de teléfono</label>
        <input
          type="tel"
          onChange={handleInputPhoneNumber}
          id="phone-number"
          name="lname"
        />
      </form>

      <h6>
        <button onClick={() => coroboration()}>Obtener orden de compra</button>
      </h6>
      {orderId !== "" ?      <Orders id={orderId}></Orders> : <h5>cargue los datos</h5> }

      {/* {goToOrder===1 && <h3> <input>Presione aquí para obtener su orden</input></h3>} */}
    </div>
  );
};
