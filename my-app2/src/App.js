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

