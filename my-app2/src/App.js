/* 
TODO
mover el firebase a config! investigar porque no anda ,hacer el md y poner un gif, ver ultima parte de la clase final, ver las rubricas e ir corroborando,mover el firebase.js a config, agregar colores al navlink

*/
//?dudas en buyForm y CartContext
//TODO preguntar si los state de colores asi estan bien 
//TODO  limpiar los warning de react
//TODO   Line 32:17:  Expected '!==' and instead saw '!='       

//TODO IMPLEMENTAR FUNCION QUE DIGA SI HAY DATOS O NO  o sea preguntando al data base 
//TODO preguntar que hacer  cuando el usuario se hace el vivo y pone un id que noexiste 
//TODO  preguntar que onda los precios
//TODO   Line 32:6:  React Hook useEffect has missing dependencies: 'array' and 'itemsFromDB'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
//TODO sacar el id  del objeto
import React from "react";
import "./stylesheet.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextTag } from "./context/CartContextTag";
import RouterApp from "./router/RouterApp"
library.add(fas);//Fontawesome icons 

export default function App() {
 
  return (
  <CartContextTag>
    <RouterApp/>
  </CartContextTag>
  );
}

