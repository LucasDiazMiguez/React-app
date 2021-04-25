import React from 'react';
import { Items} from './Items'


export const ItemList= (props)=>{
console.log("soy las props de ITEMLIST ")
console.log("props",props.productos[0]);
console.log("props",props.productos[1]);
console.log("props",props.productos[2]);
console.log("props",props.productos[3]);

return(
    <div>
        <div>
            <Items product={props.productos[0]}/>
        </div>
        <div>
            <Items product={props.productos[1]}/>
        </div>
        <div>
            <Items product={props.productos[2]}/>
        </div>
        <div>
            <Items product={props.productos[3]}/>
        </div>
    </div>

)

}