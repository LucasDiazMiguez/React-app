import React, { useContext, useState } from "react";
import { CartContext } from "./CartContextTag"; //
//! Encuentro problemas porque al actualizar el cart, no se hace un re render, no se porque, entonces meti un useState (cantidad agregada) que lo que hace es 
//! hacer que el componente se renderize cada vez que cambia, que coincide con las veces que cantidadAgregada
const Button = (props) => {
  const [cart, setCart] = useContext(CartContext);
  console.log("props.id :>> ", props.id);
  const selector = cart.findIndex(find);
  let newCart = cart;
  const [cantidadAgregada, setCantidadAgregada] = useState(
    cart[selector].cantidadAgregada
  ); //? este state va al lado de cantidadAgregada, porque si uso sin este estado, no se actualiza el input
  //? como el estado cantidad agregada cambia, se renderiza de nuevo
  function find(value, index) {
    return value.id == props.id;
  }

  return (
    <div>
      {!(cantidadAgregada == cart[selector].stock) ? (
        <button
          onClick={() => {
            newCart[selector].cantidadAgregada = cantidadAgregada + 1;
            setCart(newCart);
            console.log(
              "cart[selector].cantidadAgregada :>> ",
              cart[selector].cantidadAgregada
            );
            //setCantidadAgregada(cantidadAgregada + 1);// ! cuando renderiza de nuevo si se actualiza, por eso aparece un toy afuera de cantidadAgrgada. Cantidad agregada  sirve como "disparador de rerender"
            console.log("cantidadAgregada state:>> ", cantidadAgregada); // !no se  actualiza porque se actualiza cuando hace el rerender
          }}
        >
          +
        </button>
      ) : (
        <></>
      )}

      <input value={cart[selector].cantidadAgregada} />
      {!(cantidadAgregada == 0) ? (
        <button
          onClick={() => {
            newCart[selector].cantidadAgregada = cantidadAgregada - 1;
            setCart(newCart);
            console.log(
              "cart[selector].cantidadAgregada :>> ",
              cart[selector].cantidadAgregada
            );
            // setCantidadAgregada(cantidadAgregada - 1);// ! cuando renderiza de nuevo si se actualiza, por eso aparece un toy afuera de cantidadAgrgada. Cantidad agregada  sirve como "disparador de rerender"
            console.log("cantidadAgregada state:>> ", cantidadAgregada); // !no se  actualiza porque se actualiza cuando hace el rerender
          }}
        >
          -
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Button;
