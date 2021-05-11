import React, { useState, useContext,useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { CartContext } from "./CartContextTag";

function onAdd(cart, item, setCart, count) {
  console.log("y el for each?");
  cart.forEach((element) => {
    console.log(element);
  });
  let newCart = cart;
  console.log(
    "si",
    cart.some((value) => value.id == item.id)
  );
  // console.log("item", item);
  // console.log("cart", cart[0]);
  // console.log("item==cart[i]", item == cart[0]);
  if (cart.some((value) => value.id == item.id)) {
    //si alguno tiene un id igual al item id significa que ya estaba en el cart
    // cart.forEach((element) => {
    //   console.log(element);
    //   console.log("element.id :>> ", element.id);
    //   console.log("item.id==element :>> ", item.id == element.id);
    // });
    console.log("item.id :>> ", item.id);
    console.log("index :>> ", cart.indexOf(item));
    let index = cart.indexOf(item);
    newCart[index].cantidadAgregada = newCart[index].cantidadAgregada + count;
    newCart[index].stock = newCart[index].stock - count;
  } else {
    console.log("newCart before:>> ", newCart);
    newCart.push(item);
    console.log("newCart  after :>> ", newCart);
  }

  console.log("caaart", cart);
  console.log("newCart", newCart);
  setCart(newCart);
}
const Button = (props) => {
  const [check, setCheck] = useState(0);
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useContext(CartContext);
  const [colour1, setColour1] = useState("#3483fa");
  const [colour2, setColour2] = useState("#3483fa");
  
  return check == 0 ? (
    <div>
      <button
        style={{ backgroundColor: `${colour1}` }}
        onClick={() =>{if (counter==props.product.stock ) {
          setColour1("red")
          setInterval(() => {
            setColour1("#3483fa")
          }, 2000)
          
          
        }else
        setCounter(counter+1)
      }}
      >
       
        +
      </button>
      <input type="Number" value={counter} />
      <button
        style={{ backgroundColor: `${colour2}` }}
        onClick={() =>{if (counter==0 ) {
          setColour2("red")
          setInterval(() => {
            setColour2("#3483fa")
          }, 2000)
          
          
        }else
        setCounter(counter-1)
      }}
      >
       
        -
      </button>
      <button
        /*onClick={() => setCheck(1) */ onClick={() =>
          onAdd(cart, props.product, setCart, counter)
        }
      >
        Check
      </button>
    </div>
  ) : (
    <>
      {/* //por que de entrada se ejecuta la funcon? */}
      <Link
        className="no-text-decoration p-3"
        onClick={() => onAdd(cart, props.product, setCart, counter)}
        to={"/shopping-cart"}
      >
        <button className="pl-3 pr-3 " j>
          Terminar compra
        </button>
      </Link>
      <button onClick={() => setCheck(0)}>Volver</button>
    </>
  );
};

export default Button;
// var numbers = [45, 4, 9, 16, 25];
// var allOver18 = numbers.every(myFunction);
// console.log("allolver19",allOver18);
// function myFunction(value, index, array) {
//   return value > 18;
// }
