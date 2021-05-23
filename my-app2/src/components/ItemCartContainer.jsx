import React,{useContext}  from 'react';
import { CartContext } from "./CartContextTag";
import ItemCartNone from "./ItemCartNone"
import ItemCart from "./ItemCart"
const ItemCartContainer = () => {
    const [cart, setCart] = useContext(CartContext);
    console.log('cart.length() :>> ', cart);
    return (
       cart.length == 0 ? <ItemCartNone/> : <ItemCart/>
    );
}

export default ItemCartContainer;
