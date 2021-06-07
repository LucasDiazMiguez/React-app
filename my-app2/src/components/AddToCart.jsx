import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextTag";

const AddToCart = (props) => {
  const { cart, addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(1);
  const [check, setCheck] = useState(false);
  const [colour, setColour] = useState({
    display: "none",
    colour1: "#3483fa",
    colour2: "#3483fa",
  });

  const plusItem = () => {
    if (counter === props.product.item.stock) {
      setColour({ ...colour, display: "block", colour1: "red" });
      setInterval(() => {
        setColour({ ...colour, display: "none", colour1: "#3483fa" });
      }, 2000);
    } else {
      setCounter(counter + 1);
    }
  };
  const minusItem = () => {
    if (counter === 1) {
      setColour({ ...colour, display: "block", colour2: "red" });
      setInterval(() => {
        setColour({ ...colour, display: "none", colour1: "#3483fa" });
      }, 2000);
    } else {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {
    addItem(props.product.item, counter, props.product.id);
  };
  console.log("props.product.stock :>> ", props.product.stock);
  return !check ? (
    <div className="m-5 d-flex flex-direction-row flex-nowrap">
      <button
        className="m-1 p-1 "
        style={{ backgroundColor: `${colour.colour2}` }}
        onClick={() => minusItem()}
      >
        -
      </button>
      <input type="number" className="input-witdh" value={counter} />
      <button
        className="m-1 p-1 "
        style={{ backgroundColor: `${colour.colour1}` }}
        onClick={() => plusItem()}
      >
        +
      </button>
      <button onClick={() => setCheck(true)}>Check</button>
      <span
        id="over-limit"
        className="p-2 m-1"
        style={{
          display: `${colour.display}`,
        }}
      >
        solo puede comprar {props.product.item.stock} items en total
      </span>
    </div>
  ) : (
    <div className="d-flex m-5 ">
      <Link
        className="no-text-decoration p-3"
        onClick={() => onAdd()}
        to={"/shopping-cart"}
      >
        <button className="pl-3 pr-3 ">Agregar al carrito</button>
      </Link>
      <button onClick={() => setCheck(false)}>Volver</button>
    </div>
  );
};

export default AddToCart;
// var numbers = [45, 4, 9, 16, 25];
// var allOver18 = numbers.every(myFunction);
// console.log("allolver19",allOver18);
// function myFunction(value, index, array) {
//   return value > 18;
// }
