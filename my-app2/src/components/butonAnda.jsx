import React, { useContext, useState } from "react";

const Button = (props) => {
    const [cart, setCart] = useContext(CartContext);
    console.log("props.id :>> ", props.id);
    const selector = cart.findIndex(find);
    let newCart = cart;
    const [cantidadAgregada, setCantidadAgregada] = useState(
      cart[selector].cantidadAgregada
    );//? este state va al lado de cantidadAgregada, porque si uso sin este estado, no se actualiza el input
  function find(value, index) {
    return value.id == props.id;
  }
  console.log("selector :>> ", selector);
  console.log("cart[selector] :>> ", cart[selector]);
  return (
    <div>
      <button
        onClick={() => {
          if (cantidadAgregada == cart[selector].stock) {
            console.log("entre aca");
            //   setColour1("red");
            //   setInterval(() => {
            //     setColour1("#3483fa");
            //   }, 2000);
          } else {
            newCart[selector].cantidadAgregada = cantidadAgregada + 1;
            newCart[selector].stock = newCart[selector].stock  - 1;
            setCart(newCart);
            console.log('newCart[selector].cantidadAgregada :>> ', newCart[selector].cantidadAgregada);
            console.log('cart[selector].cantidadAgregada :>> ', cart[selector].cantidadAgregada);
            setCantidadAgregada(cantidadAgregada + 1);
            console.log("cantidadAgregada state:>> ", cantidadAgregada);
          }
        }}
      >
        +
      </button>
      <input value={cantidadAgregada} />
      <button
        //   style={{ backgroundColor: `${colour2}` }}
        onClick={() => {
          console.log("cantidadAgregada :>> ", cantidadAgregada);
          if (cantidadAgregada == 0) {
            //   setColour2("red");
            //   setInterval(() => {
            //     setColour2("#3483fa");
            //   }, 2000);
            console.log("entre aca");
          } else {
            newCart[selector].cantidadAgregada=cantidadAgregada-1;
            newCart[selector].stock = newCart[selector].stock  + 1;
            setCart(newCart)
            setCantidadAgregada(cantidadAgregada - 1);

            console.log("cantidadAgregada state:>> ", cantidadAgregada);

          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default Button;
