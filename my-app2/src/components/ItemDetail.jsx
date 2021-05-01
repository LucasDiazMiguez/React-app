import React from "react";

const ItemDetail = (props) => {
  console.log("im in itemdeital y vale", props.product);
  return (
    <div class="row justify-content-around  ">
      <div class="col-lg-3 col-md-3 box-gallery-item">
        <img src={props.product.img}></img>
      </div>
      <div class="col-lg-8 col-md-3 justify-content-start">
      <h3>{props.product.name}</h3>
      
      <h6 className="common-price p-3">{props.product.value}</h6>
      <h6 className="p-3">{props.product.description}</h6>
      <button>agregar al carrito </button>
      </div>

    </div>
  );
};

export default ItemDetail;
{
  /* <div class="col-lg-3 col-md-3 box-gallery-item">
<Link
  to={`/item/${props.productos.id}`}
  className="no-text-decoration black-text"
>
  <img src={props.productos.img}></img>
</Link>
<Link
  to={`/item/${props.productos.id}`}
  className="no-text-decoration black-text"
>
  <h6 className="item-name">{props.productos.name}</h6>
</Link>
<h6 className="card-price">{props.productos.value}</h6>
<button>agregar al carrito </button>
</div> */
}
