import React, { useState, useContext} from "react";
import {Link } from "react-router-dom";
import { CartContext } from "./CartContextTag";

const AddToCart = (props) => {
  const { cart, addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(1);

  const [check, setCheck] = useState(false);
  // const [opacity, setOpacity] = useState(0);
  // const [colour1, setColour1] = useState("#3483fa");
  // const [colour2, setColour2] = useState("#3483fa");
  console.log('props.product :>> ', props.product);
  console.log('cart[0] :>> ', cart[0]);
  const [colour, setColour] = useState({
    opacity: 0,
    colour1: "#3483fa",
    colour2: "#3483fa",
  });

  //!implementar un vector de estados
  const plusItem = () => {
    if (counter === props.product.stock) {
      setColour({ opacity: 0, colour1: "red", colour2: "#3483fa" });
      setInterval(() => {
        setColour({ opacity: 1, colour1: "#3483fa", colour2: "#3483fa" });
      }, 2000);
    } else {
      setCounter(counter + 1);
    }
  };

  const minusItem = () => {
    if (counter === 1) {
      setColour({ opacity: 0, colour1: "#3483fa", colour2: "red" });
      setInterval(() => {
        setColour({ opacity: 0, colour1: "#3483fa", colour2: "#3483fa" });
      }, 2000);
    } else {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {
    addItem(props.product.item, counter,props.product.id);
    
  };

  return !check ? (
    <div>
      <button
        style={{ backgroundColor: `${colour.colour1}` }}
        onClick={() => plusItem()}
      >
        +
      </button>
      <input type="number" value={counter} />
      <button
        style={{ backgroundColor: `${colour.colour2}` }}
        onClick={() => minusItem()}
      >
        -
      </button>
      <button onClick={() => setCheck(true)}>Check</button>
      <h5
        className="p-2 m-1"
        style={{
          borderRadius: "10px",
          transition: "0.5s",
          backgroundColor: "#ff0000",
          opacity: `${colour.opacity}`,
        }}
      >
        solo puede comprar {props.product.stock} items{" "}
      </h5>
    </div>
  ) : (
    <>
      {/* //por que de entrada se ejecuta la funcon? */}
      <Link
        className="no-text-decoration p-3"
        onClick={() => onAdd()}
        to={"/shopping-cart"}
      >
        <button className="pl-3 pr-3 ">Agregar al carrito</button>
      </Link>
      <button onClick={() => setCheck(false)}>Volver</button>
    </>
  );
};

export default AddToCart;
// var numbers = [45, 4, 9, 16, 25];
// var allOver18 = numbers.every(myFunction);
// console.log("allolver19",allOver18);
// function myFunction(value, index, array) {
//   return value > 18;
// }
