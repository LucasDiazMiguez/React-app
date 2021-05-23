import React, { useEffect } from 'react';
import { getFirestore } from './firebase';
import { Items} from './Items'

export const ItemList= (props)=>{
    let productosDeProp = (props).productos;
    // useEffect(()=>{
    //     const db=getFirestore(); //abrir la puerta a la base de datos
    //     console.log('db :>> ', db);
    //     //const itemsCollection=db.collection("items")
    //     db.collection("users").add({
    //         first: "Ada",
    //         last: "Lovelace",
    //         born: 1815
    //     })
    //     .then((docRef) => {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch((error) => {
    //         console.error("Error adding document: ", error);
    //     });
    // },[])
    const db = getFirestore();
    return(
        <div class="container ">

        <div class="row justify-content-around box " >
      {  props.productos.map(producto=> (<Items key={producto.toString()} productos={producto}/>))}
       </div>
        </div>
    )
    
}

