import React from 'react';
import { Items} from './Items'

export const ItemList= (props)=>{

    
    console.log('props.productos :>> ', props.productos);
    console.log('props :>> ', props);
    return(
        <div className="container ">

        <div className="row justify-content-around box " >
            {/* devuelta les paso los id */}
      {  props.productos.map(producto=> (<Items key={producto.id} productos={producto.item} id={producto.id}/>))}
       </div>
        </div>
    )
    
}

