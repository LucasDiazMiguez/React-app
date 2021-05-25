import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemCategoryList } from "./ItemCategoryList";
import { getFirestore } from "./firebase";

export const ItemCategoryContainer = (props) => {
  const { categoryId } = useParams();
  const [itemsFromDB, setItemsFromDB] = useState([]);
  const [agrego, setAgrego] = useState(false);
  const array = [];
  console.log('categoryId :>> ', categoryId);
  useEffect(() => {
    const db = getFirestore(); //abrir la puerta a la base de datos
    db.collection("items").where("category","==",categoryId)
      .get()
      .then((querySnapshot) => {
        console.log("yooo soy query snapchot :>> ");
        console.log("querySnapchot :>> ", querySnapshot);
        // setItemsFromDB(querySnapshot.map(doc=>doc.data()))
        querySnapshot.forEach((doc) => {
          console.log("entre per");
          // doc.data() is never undefined for query doc snapshots
          console.log("doc.data() :>> ",  doc.data());
          array.push(doc.data());
        });
        setItemsFromDB(array);
        setAgrego(true);
        console.log("itemsFromDB :>> ", itemsFromDB);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [categoryId]); 

  // console.log("agrego :>> ", agrego);
  console.log("typeof(itemsFromDB) :>> ", typeof itemsFromDB);
  console.log("items from db [0]", itemsFromDB[0]);

  return agrego ? (
    <div>
      <div class="container ">
        <div class="row justify-content-around box ">
            { itemsFromDB.map((value)=>  <ItemCategoryList  productos={value}/>)}
        </div>
      </div>
    </div>
  ) : (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.203OyIQrZQcvPAtttruksgHaD6%26pid%3DApi%26h%3D160&f=1"></img>
  );
};
