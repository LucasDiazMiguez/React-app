// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar'
import { ItemListContainer} from './components/ItemListContainer'
import './stylesheet.scss'
import React, {useState,useEffect} from "react";



export default function App() {
  const [items, setItems] = useState(0)

  useEffect(() => {
    const buscoItems = new Promise((resolve, reject) => {
    const items = [{
        id: '00000001',
        name: 'RTX 3090',
        description: 'NVIDIA GPU RTX 3090 24gb MSI',
        value: '$300000',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Fstateless-www-realhardwarerevi%2F2020%2F09%2FASUS-RTX-30-STRIX-5-1280x640.jpg&f=1&nofb=1'
      },
      {
        id: '00000002',
        name: 'Procesador gamer AMD Ryzen 7 3700X ',
        description: 'Procesador gamer AMD Ryzen 7 3700X 100-100000071BOX de 8 núcleos y 4.4GHz de frecuencia',
        value: '$44588',
        img: 'https://http2.mlstatic.com/D_NQ_NP_647835-MLA32242537922_092019-O.webp'
      },
      {
        id: '00000003',
        name: 'Intel Core i9 10850K ',
        description: 'Procesador gamer Intel Core i9 10850K BX8070110850K de 10 núcleos y 5.2GHz de frecuencia con gráfica integrada',
        value: '$60000',
        img: 'https://http2.mlstatic.com/D_NQ_NP_908864-MLA44029060066_112020-O.webp'
      },
      {
        id: '00000004',
        name: 'Gabinete Lian Li O11 Dynamic Xl Rog Certified Atx ',
        description: 'Lian Li O11 Dynamic XL ROG Certified (negro) ATX Full Tower Gaming Computer Case',
        value: '$75.900',
        img: 'https://http2.mlstatic.com/D_NQ_NP_996620-MLA44773389046_022021-O.webp'
      },]
      setTimeout(() => {
        resolve(items)
      }, 2000)
    })

    buscoItems.then((res) => {
      console.log("res ", res)
      setItems(res)

      // res.forEach((item) => console.log("item", item)
      // )
    }, (rej) => {
      console.log("rechazada-->", rej)
    })
      .catch((err) => {
        console.log("Hubo un error")
      })
      .finally(() => {
        console.log("AL FIN TERMINE")
      })


  }, [])
 
  console.log("soy el principal;",items);
  return (
    <div className="App" >
      <NavBar />
      
      {items.length>0 ? <ItemListContainer productos={items}/> : <img src=""></img> }
 
    </div>
  );
}