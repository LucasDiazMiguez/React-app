import React from 'react';
import { ItemList} from '../components/ItemsList'


export const ItemListContainer= (props)=>{
    console.log("estoy en ItemListCOntainer",props.productos);

    return (
        <div>
            <h2> welcome to React Js</h2>
           <ItemList productos={props.productos}/>
        </div>
    )
}