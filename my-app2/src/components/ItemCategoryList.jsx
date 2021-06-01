import React from "react";
import  {Link}  from "react-router-dom";
export const ItemCategoryList = (props) => {
  // console.log(' estoy en itemCategory List props.productos :>> ', props.productos);
  return (
         <div class="col-lg-3 col-md-3 box-gallery-item">
              <Link
                to={`/item/${props.productos.id}`}
                className="no-text-decoration black-text"
              >
                <img alt={props.productos.item.image} src={props.productos.item.image}></img>
              </Link>
              <Link
                to={`/item/${props.productos.id}`}
                className="no-text-decoration black-text"
              >
                <h6 className="item-name">{props.productos.item.name}</h6>
              </Link>
              <h6 className="card-price">{props.productos.item.price}</h6>
        </div>
    // props.productos.map(producto=> (<Items productos={producto}/>))
  );
};
