import React  from "react";

import { ItemList } from "../components/ItemsList";

export const ItemListContainer = (props) => {
//   console.log("estoy en ItemListCOntainer", props.productos);
//   const { idProduct } = useParams();
//   console.log("dklaf;", idProduct);
//   const { username } = useParams();

//   useEffect(() => {
//     console.log("soy el user name",username);
//   }, [username]);
  console.log("estoy en item list container",props.product);

  return (
    <div>
      <h2> Productos</h2>
      <ItemList productos={props.product} />
    </div>
  );
};

