import React, { useEffect, useState } from "react";
import { ItemList } from "../components/ItemsList";
import { getFirestore } from "./firebase";

export const ItemListContainer = (props) => {
  const [itemsFromDB, setItemsFromDB] = useState([]);
  const [agrego, setAgrego] = useState(false);
  const array=[]
  useEffect(() => {
    const db = getFirestore(); //abrir la puerta a la base de datos
    db.collection("items")
      .get()
      .then((querySnapshot) => {
        console.log("yooo soy query snapchot :>> ");
        console.log("querySnapchot :>> ", querySnapshot);
        // setItemsFromDB(querySnapshot.map(doc=>doc.data()))
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          array.push(doc.data())
          console.log("doc.data() :>> ", typeof doc.data());
        });
        setItemsFromDB(array);
        setAgrego(true);
        console.log("itemsFromDB :>> ", itemsFromDB);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  // console.log("agrego :>> ", agrego);
  console.log("typeof(itemsFromDB) :>> ", typeof itemsFromDB);
  console.log("items from db [0]", itemsFromDB[0]);

  return agrego  ? (
    <div>
      <h2> Productos</h2>
      <ItemList productos={itemsFromDB} />
    </div>
  ) : (
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.203OyIQrZQcvPAtttruksgHaD6%26pid%3DApi%26h%3D160&f=1"></img>
  );
};
// !ESTA ANDA
// useEffect(() => {
//   const db = getFirestore(); //abrir la puerta a la base de datos
//   db.collection("items")
//     .get()
//     .then((querySnapshot) => {
//       console.log('yooo soy query snapchot :>> ');
//       console.log('querySnapchot :>> ', querySnapshot);
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//         console.log('doc.data() :>> ', typeof(doc.data()));
//         let documento=doc.data();
//         console.log("YO SOY DOCUMENTO");
//         console.log("documento",documento)
//          array.push({documento})
//         console.log(doc.id, " => ", doc);
//       });
//       array.forEach((value)=>console.log('valueobject :>> ',value))
//       setItemsFromDB([array])
//       console.log('itemsFromDB :>> ', itemsFromDB);

//     })
//     .catch((error) => {
//       console.log("Error getting documents: ", error);
//     });
// }, []);
