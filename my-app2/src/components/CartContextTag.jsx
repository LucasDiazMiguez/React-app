import React, { useState } from "react";

export const CartContext = React.createContext(0);

export const CartContextTag = ({ children }) => {
  const [cart, setCart] = useState([]); //esta es la variable que va a ser global, y la tenes que pasar a provider asi los otros elementos pueden acceder tambien.
  //En los otros, vos tenes que poner  [cart,setCart]=useContext() para poder acceder.
  // console.log( "entre aca",cart);
  const addItem = (item, quantity,id) => {
    // console.log('isInCart(item.id) :>> ', isInCart(item.id));
    if (isInCart(item.id)) {
      setCart(
        cart.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      );
    } else {
      setCart([...cart, { item, quantity, id }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const itemsAmount = () =>
    cart.reduce((total, value) => total + value.quantity, 0);

  const isInCart = (id) => cart.some((item) => item.item.id === id);
  const totalPrice = () =>
    cart.reduce((total, value) => total + value.item.price * value.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isInCart,
        clear,
        removeItem,
        addItem,
        totalPrice,
        itemsAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
