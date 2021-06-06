import React, { useEffect, useState } from "react";
import { ItemList } from "../components/ItemsList";
import { getFirestore } from "../config/firebase";

export const ItemListContainer = (props) => {
  const [itemsFromDB, setItemsFromDB] = useState([]);
  const [agrego, setAgrego] = useState(false);
  const array = [];
  useEffect(() => {
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
    <img
      alt=" Loading "
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.203OyIQrZQcvPAtttruksgHaD6%26pid%3DApi%26h%3D160&f=1"
    ></img>
  );
};
