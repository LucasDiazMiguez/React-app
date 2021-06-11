import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextTag";

const AddToCart = (props) => {
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(1);
  const [check, setCheck] = useState(false);
  const [colour, setColour] = useState({
    colour1: "#3483fa",
    colour2: "#3483fa",
  });
  useEffect(() => {
    const stock = props.product.item.stock;
    if (counter === stock) {
      setColour({ colour2: "#3483fa", colour1: "#cbc7c7" });
    } else if (counter === 1) {
      setColour({ colour1: "#3483fa", colour2: "#cbc7c7" });
    } else {
      setColour({
        colour1: "#3483fa",
        colour2: "#3483fa",
      });
    }
  }, [counter, props.product.item.stock]);

  const plusItem = () => {
    if (counter !== props.product.item.stock) {
      setCounter(counter + 1);
    }
  };
  const minusItem = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {
    addItem(props.product.item, counter, props.product.id);
  };
  return !check ? (
    <div className="m-5 d-flex flex-direction-row flex-nowrap">
      <button
        className="m-1 p-1  button-style-2"
        style={{ backgroundColor: `${colour.colour2}` }}
        onClick={() => minusItem()}
      >
        -
      </button>
      <input type="number" className="input-witdh" value={counter} readOnly />
      <button
        className="m-1 p-1  button-style-2"
        style={{ backgroundColor: `${colour.colour1}` }}
        onClick={() => plusItem()}
      >
        +
      </button>
      <button className="button-style-2" onClick={() => setCheck(true)}>
        Check
      </button>
    </div>
  ) : (
    <div className="d-flex m-5 ">
      <Link
        className="no-text-decoration p-3"
        onClick={() => onAdd()}
        to={"/shopping-cart"}
      >
        <button className="pl-3 pr-3 button-style-2 ">
          Agregar al carrito
        </button>
      </Link>
      <button className="button-style-2" onClick={() => setCheck(false)}>
        Volver
      </button>
    </div>
  );
};

export default AddToCart;
