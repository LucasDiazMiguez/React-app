import React, { useState, useContext } from "react";

export const CartContext = React.createContext(0);

export const CartContextTag = ({ children }) => {
  const [cart, setCart] = useState([]); //esta es la variable que va a ser global, y la tenes que pasar a provider asi los otros elementos pueden acceder tambien.
  //En los otros, vos tenes que poner  [cart,setCart]=useContext() para poder acceder.
  // console.log( "entre aca",cart);
  const addItem = (item, quantity) => {
    // console.log('isInCart(item.id) :>> ', isInCart(item.id));
    if (isInCart(item.id)) {
      setCart(cart.map( i => (i.item.id === item.id ? {...i, quantity: i.quantity+quantity } : i)))
    }else{
      // console.log('soy asdfasdfel cart :>> ', cart);
      setCart([...cart, {item, quantity}]);
    }
  };

  const removeItem = (id)=>{
    setCart(cart.filter((item)=>(item.id !== id)))
  }

  const clear = ()=>{
    setCart([]);
  }

  const isInCart= (id)=>{
    return cart.some((item)=>(item.item.id=== id))
  }
  const totalPrice= ()=>{
    return  cart.reduce((total,value)=>(total+ value.item.price* value.quantity),0)
  }


  return (
    <CartContext.Provider value={{cart, isInCart,clear,removeItem,addItem,totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};
