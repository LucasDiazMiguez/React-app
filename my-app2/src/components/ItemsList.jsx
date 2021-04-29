import React from 'react';
import { Items} from './Items'

export const ItemList= (props)=>{
    let productosDeProp = (props).productos;
    console.log(productosDeProp);
    
    return(

        props.productos.map(producto=> (<Items product={producto}/>))
       
    )
    
}