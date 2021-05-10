import React from 'react';
import { Items} from './Items'

export const ItemList= (props)=>{
    let productosDeProp = (props).productos;
    console.log(productosDeProp);
    
    return(
        <div class="container ">

        <div class="row justify-content-around box " >
      {  props.productos.map(producto=> (<Items key={producto.toString()} productos={producto}/>))}
       </div>
        </div>
    )
    
}

