import React from 'react';
import {Link} from 'react-router-dom'
const ItemCartNone = () => {
    return (
        <div>
             <h4>No tiene ningún item en carrito</h4>
             <Link to={"/"}> Compre algún item. </Link>
        </div>
    );
}

export default ItemCartNone;
