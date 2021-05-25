import React, { useEffect } from 'react';
import { getFirestore } from './firebase';
import { Items} from './Items'

export const ItemList= (props)=>{

    
    console.log('props.productos :>> ', props.productos);
    console.log('props :>> ', props);
    return(
        <div className="container ">

        <div className="row justify-content-around box " >
      {  props.productos.map(producto=> (<Items productos={producto}/>))}
       </div>
        </div>
    )
    
}

