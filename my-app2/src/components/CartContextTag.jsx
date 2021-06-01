import React, { useState } from "react";

export const CartContext = React.createContext(0);

export const CartContextTag = ({ children }) => {
  const [cart, setCart] = useState([]); 
  console.log('cart :>> ', cart);
  const addItem = (item, quantity,id) => {
    console.log('id :>> ', id);
    if (isInCart(id)) {
      console.log("Estoy en isinCart");
      setCart(
        cart.map((i) =>
        i.item.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
        );
      } else {
      console.log("NO ESTOY en isinCart");
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

  const isInCart = (id) => cart.some((item) => item.id === id);
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
