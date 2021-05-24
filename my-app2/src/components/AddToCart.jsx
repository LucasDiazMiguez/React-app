import React, { useState, useContext,useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { CartContext } from "./CartContextTag";
import Button from "./Button"
function onAdd(cart, item, setCart, count,setOpacity) {
  if (count> item.stock || item.stock == 0) {
    
    console.log('no stock suficiente :>> ');
    setOpacity(1);
    setTimeout(() => {
      setOpacity(0);
    }, 3000);
    return;
  }
  cart.forEach((element) => {
    console.log(element);
  });
  let newCart = cart;
  let newItem=item;
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
    newItem.cantidadAgregada=newItem.cantidadAgregada+count;
    newItem.stock=newItem.stock-count;
    newCart.push(item);
    console.log("newCart  after :>> ", newCart);
  }

  console.log("caaart", cart);
  console.log("newCart", newCart);
  setCart(newCart);
}
const AddToCart = (props) => {
  const [check, setCheck] = useState(0);
  const [opacity, setOpacity] = useState(0);
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
      <input type="number" value={counter} />
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
          onAdd(cart, props.product, setCart, counter,setOpacity)
        }
      >
        Check
      </button>
      <h5 className="p-2 m-1" style={{ borderRadius: "10px",transition: "0.5s" ,backgroundColor: "#ff0000", opacity: `${opacity}`   }}>solo puede comprar {props.product.stock} items más</h5>
    </div>
  ) : (
    <>
      {/* //por que de entrada se ejecuta la funcon? */}
      <Link
        className="no-text-decoration p-3"
        onClick={() => onAdd(cart, props.product, setCart, counter)}
        to={"/shopping-cart"}
      >
        <button className="pl-3 pr-3 " >
          Terminar compra
        </button>
      </Link>
      <button onClick={() => setCheck(0)}>Volver</button>
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
