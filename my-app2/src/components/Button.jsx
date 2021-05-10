import React, { useState, useContext } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { CartContext } from "./CartContextTag";

function onAdd(cart, item, setCart) {
  console.log("imhere ");
  console.log(cart);
  let aux = 0;
  let newCart = 0;
  console.log("si",cart.some((value)=>(value.id==item.id)));
  console.log("item",item)
  console.log("cart",cart[0])
  console.log("item==cart[i]",item==cart[0])
  if(cart.some((value)=>(value.id==item.id)))
      // significa que agregó uno que ya estaba
       console.log("asdlfjkasdf",cart.indexOf(item)) //lo podés meter dentro de  splice)
      //  newCart=cart.splice(cart.indexOf(item.id),1) //fijarse si pued oahcer Cart=cart.splice(aux,1)
   else
     cart.push(item)

  // var numbers = [45, 4, 9, 16, 25];
  // var allOver18 = numbers.every(myFunction);
  // console.log("allolver19",allOver18);
  // function myFunction(value, index, array) {
  //   return value > 18;
  // }
  setCart(cart);
}

const Button = (props) => {
  const [check, setCheck] = useState(0);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useContext(CartContext);

  return check == 0 ? (
    <div>
      <button
        onClick={() => setCount(count + 1)}
      
      >
        +
      </button>
      <input type="Number" value={count} />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCheck(1)}>Check</button>
    </div>
  ) : (
          <>
      {/* //por que de entrada se ejecuta la funcon? */}
    <Link className="no-text-decoration p-3" onClick={onAdd(cart, props.product, setCart)} to={"/shopping-cart"}>
      <button className="pl-3 pr-3 "j> 
          agregar al carrito{" "}
      </button>
        </Link>
      <button onClick={() => setCheck(0)}>Cambiar cantidad</button>
    </>
  );
};

export default Button;
