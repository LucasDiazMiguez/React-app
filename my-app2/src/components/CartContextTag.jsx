import React, {useState,useContext} from 'react'

export const CartContext = React.createContext(0)

export const CartContextTag = ({children}) => {

  const [cart, setCart] = useState([]) //esta es la variable que va a ser global, y la tenes que pasar a provider asi los otros elementos pueden acceder tambien.
  //En los otros, vos tenes que poner  [cart,setCart]=useContext() para poder acceder.
  console.log("soy la cantidad mencionada reicnemtenete",0)

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  )
}