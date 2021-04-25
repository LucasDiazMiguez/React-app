import React from 'react';
import { ItemList} from '../components/ItemsList'


export const ItemListContainer= (props)=>{
    return (
        <div>
            <h2> welcome to React Js</h2>
           <ItemList productos={props.productos}/>
        </div>
    )
}