import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCategoryList } from "./ItemCategoryList";
import { getFirestore } from "../config/firebase";

export const ItemCategoryContainer = () => {
  const { categoryId } = useParams();
  const [itemsFromDB, setItemsFromDB] = useState([]);
  const [agrego, setAgrego] = useState(false);
  const array = [];
  useEffect(() => {
    const db = getFirestore();
    db.collection("items")
      .where("category", "==", categoryId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          array.push({ item: doc.data(), id: doc.id });
        });
        setItemsFromDB(array);
        setAgrego(true);
      })
      .catch((error) => {
        console.log("Error al coleccionar los datos");
      });
  }, [categoryId]);

  return agrego ? (
    <div>
      <div class="container  d-flex flex-column justify-content-center">
        <h2 className="align-self-center mt-4 font-weight-bold"> {categoryId}</h2>
        <div class="row justify-content-around box ">
          {itemsFromDB.map((value) => (
            <ItemCategoryList key={value.id} productos={value} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <img
      alt="Loading"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.203OyIQrZQcvPAtttruksgHaD6%26pid%3DApi%26h%3D160&f=1"
    ></img>
  );
};
