import React, { useState } from "react";

export const CartContext = React.createContext(0);

export const CartContextTag = ({ children }) => {
  const [cart, setCart] = useState([]); //esta es la variable que va a ser global, y la tenes que pasar a provider asi los otros elementos pueden acceder tambien.
  const [totalPrice, settotalPrice] = useState(0)
  //En los otros, vos tenes que poner  [cart,setCart]=useContext() para poder acceder.
  const addItem = (item, quantity, id) => {
    // console.log(' SSSSSSSSSSSSSSSSSSSSSSSSSS isInCart(item.id) :>> ', isInCart(id));
    // console.log('id==> :>> ', id);
    if (isInCart(id)) {//! no existe este atributo por eso rompe
      // console.log('id-agregado :>> ', id);
      setCart(
        cart.map((i) =>{
          // console.log('i.id :>> ', i.id);
          // console.log('id :>> ', id);
          return i.id === id ? { ...i, quantity: i.quantity + quantity } : i
      })
        );
        
      } else {
        setCart([...cart, { item, quantity, id }]);
      }
    settotalPrice(cart.reduce((total, value) => total + value.item.price * value.quantity, 0)) 
    // * capaz es porque todavia no se actualizo el cart?
    //!duda conceptual, por qué esto no andaba? Lo que hacia yo es poner un state que se llame totalPric ydsps lo pasaba, entonces
    //! cada vez que agregaba un item, que pusiera en  setTotalPrice el resultado. Pero como que agregaba el item y el cart si se actualizaba, mientras que precio total no. El componente que no actualizaba recibia el estado totalPrice pero no se actualizaba por más que el carrito si.
    //! por ejemplo, yo en buton llamo a la función add, ntonces como se actualiza?
    //! o sea parece que cuando corre la función addItem y cambia cart, si se actualiza todo
    //! pero cuando ponia el settotalPrice() no se actualizaba
    //? creo que es porque 
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
