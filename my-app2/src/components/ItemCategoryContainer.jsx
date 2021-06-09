import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCategoryList } from "./ItemCategoryList";
import { getFirestore } from "../config/firebase";
import Loading from "./Loading";
export const ItemCategoryContainer = () => {
  const { categoryId } = useParams();
  const [itemsFromDB, setItemsFromDB] = useState([]);
  const [agrego, setAgrego] = useState(false);
  useEffect(() => {
    const array = [];
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
      <div className="container align-items-center d-flex flex-column justify-content-center">
        <h2 className="mt-4 font-weight-bold"> {categoryId}</h2>
        <div className="row justify-content-around box ">
          {itemsFromDB.map((value) => (
            <ItemCategoryList key={value.id} productos={value} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
