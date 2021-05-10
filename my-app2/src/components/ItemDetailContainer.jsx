import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(0);
  const { productId } = useParams();
  console.log("soy props aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aver ",props.product);
  console.log("soy props aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aver ",props.product.id);
 
  useEffect(() => {
    console.log("entre al useEffect", product);
    const searchOneItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("soy props aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aver dentro del coos ",props.product);

        const selector = (props.product).find(find);
        function find(value,index,array){
          console.log("value",value.id)
          console.log("productId",productId)
          console.log("index",index)
          return value.id == productId
        }
        console.log("soy el selector",selector);
        console.log("soy lo que vale product", product);
        resolve(selector);
      }, 5000);
    });

    searchOneItem
      .then(
        (res) => {
          setProduct(res);
          console.log("producto vale", product);
          // res.forEach((item) => console.log("item", item)
          // )
        },
        (rej) => {
          console.log("rechazada-->", rej);
        }
      )
      .catch((err) => {
        console.log("Error");
      })
      .finally(() => {
        console.log("Finally");
      });
  }, []);
 
  return product != 0 ? (
    <div class="container ">
      {console.log("soy product",product)}
            <ItemDetail product={product} />
    </div>
  ) : (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2Fb6e0b072897469.5bf6e79950d23.gif&f=1&nofb=1"></img>
  );
};
