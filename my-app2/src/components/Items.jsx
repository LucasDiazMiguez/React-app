import React from "react";
import { Link, useParams } from "react-router-dom";

export const Items = (props) => {
  return (
    
          <div class="col-lg-3 col-md-3 box-gallery-item">
              <Link
                to={`/item/${props.productos.id}`}
                className="no-text-decoration black-text"
              >
                <img src={props.productos.image}></img>
              </Link>
              <Link
                to={`/item/${props.productos.id}`}
                className="no-text-decoration black-text"
              >
                <h6 className="item-name">{props.productos.name}</h6>
              </Link>
              <h6 className="card-price">{props.productos.price}</h6>
              <button>agregar al carrito </button>
        </div>
      
  )
};
