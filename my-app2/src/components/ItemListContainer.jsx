import React, { useEffect, useState } from "react";
import { ItemList } from "../components/ItemsList";
import { getFirestore } from "../config/firebase";
import Loading from "./Loading"
export const ItemListContainer = (props) => {
  const [itemsFromDB, setItemsFromDB] = useState([]);
  const [agrego, setAgrego] = useState(false);
  useEffect(() => {
    const array = [];
    const db = getFirestore(); 
    db.collection("items")
      .get()
      .then((querySnapshot) => {
     
        querySnapshot.forEach((doc) => {
          array.push({item: doc.data(),id: doc.id});
        });
        setItemsFromDB(array);
        setAgrego(true);
      })
      .catch((error) => {
      });
  }, []);

  

  return agrego ? (
    <div className="d-flex flex-column justify-content-center">
      <h2 className="align-self-center mt-4 font-weight-bold"> Productos</h2>
      <ItemList productos={itemsFromDB} />
    </div>
  ) : (
    <Loading/>
  );
};
