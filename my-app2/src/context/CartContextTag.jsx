import React, { useState } from "react";

export const CartContext = React.createContext(0);

export const CartContextTag = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity, id) => {
    if (isInCart(id)) {
      let itemIdAndQuantity = cart.find((value) => value.id === id);
      if (
        itemIdAndQuantity.quantity + quantity <= item.stock ||
        quantity === -1
      ) {
        setCart(
          cart
            .map((i) => {
              return i.id === id
                ? { ...i, quantity: i.quantity + quantity }
                : i;
            })
            .filter((i) => i.quantity > 0)
        );
      } else if (itemIdAndQuantity.quantity + quantity > item.stock) {
        setCart(
          cart
            .map((i) => {
              return i.id === id ? { ...i, quantity: i.item.stock } : i;
            })
            .filter((i) => i.quantity > 0)
        );
      }
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
