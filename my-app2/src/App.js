// import logo from './logo.svg';
import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./stylesheet.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainRow from "./components/MainRow";
import { Items } from "./components/Items";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemCategoryContainer } from "./components/ItemCategoryContainer";
import { CartContextTag } from "./components/CartContextTag";
import MonkeyWorking from "./components/MonkeyWorking";
import { getFirestore } from "./components/firebase";
import ItemCartContainer from "./components/ItemCartContainer.jsx"
import ItemCart from "./components/ItemCart";
// import imagenes from '../src/imagenes'
export default function App() {
  const [valores, setValores] = useState("");

  class Products {
    constructor(
      price,
      stock,
      image,
      description,
      name,
      id,
      marca,
      cantidadAgregada,
      categoria
    ) {
      this.price = price;
      this.stock = stock;
      this.image = image;
      this.name = name;
      this.id = id;
      this.marca = marca;
      this.description = description;
      this.cantidadAgregada = cantidadAgregada;
      this.category = categoria;
    }
  }
  var productConverter = {
    toFirestore: function (product) {
      return {
        price: product.price,
        stock: product.stock,
        image: product.image,
        name: product.name,
        id: product.id,
        marca: product.marca,
        description: product.description,
        cantidadAgregada: product.cantidadAgregada,
        categoria: product.category,
      };
    },
    fromFirestore: function (snapshot, options) {
      const data = snapshot.data(options);
      return new Products(
        data.price,
        data.stock,
        data.image,
        data.name,
        data.id,
        data.marca,
        data.description,
        data.cantidadAgregada,
        data.categoria
      );
    },
  };
  const producto1 = new Products(
    "$300.000",
    39,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/3090rtx.webp?alt=media&token=bc45e398-9866-4923-8548-36e1eb84c5ea",
    "NVIDIA GPU RTX 3090 24gb MSI",
    "RTX 3090",
    1,
    "nvidia",
    0,
    "video-graphics-card"
  );
  const producto2 = new Products(
    "$44.588",
    30,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/ryzen73700x.webp?alt=media&token=3c44c7ed-853a-493e-a6d5-5e2dd9dfa9f6",
    "Procesador gamer AMD Ryzen 7 3700X 100-100000071BOX de 8 núcleos y 4.4GHz de frecuencia",
    "Processor gamer AMD Ryzen 7 3700X",
    2,
    "amd",
    0,
    "processors"
  );
  const producto3 = new Products(
    "$60.000",
    8,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/inteli9core.webp?alt=media&token=6ccde020-f3fd-47a9-a5f5-f0f03afffd4a",
    "Procesador gamer Intel Core i9 10850K BX8070110850K de 10 núcleos y 5.2GHz de frecuencia con gráfica integrada",
    "Intel Core i9 10850K ",
    3,
    "intel",
    0,
    "processors"
  );
  const producto4 = new Products(
    "$75.900",
    9,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/Gabinete%20Lian%20Li%20O11%20Dynamic%20Xl%20Rog%20Certified%20Atx%20.webp?alt=media&token=52148a70-b2d9-4356-bfeb-43b347cc2d74",
    "Lian Li O11 Dynamic XL ROG Certified (negro) ATX Full Tower Gaming Computer Case",
    "Gabinete Lian Li O11 Dynamic Xl Rog Certified Atx ",
    4,
    "lian",
    0,
    "cases"
  );
  const producto5 = new Products(
    "$339.999",
    1,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/Sapphire%20Nitro%2B%20Rx%206700%20Xt%20Radeon%20Rx%206000%20Series.webp?alt=media&token=e87f532d-7871-4049-b2de-6ce367d1afda",
    "La tarjeta gráfica SAPPHIRE NITRO + AMD Radeon RX 6700 XT para el jugador de 1440p definitivo que busca aprovechar gráficos innovadores con imágenes vívidas y soluciones de refrigeración de excelente calidad. Equipada con componentes superiores para manejar escenarios de juegos AAA, la tarjeta gráfica NITRO + AMD Radeon RX 6700 XT es un componente crucial para una experiencia de juego increíble. El diseño estético será una hermosa integración en cualquier construcción de PC.",
    "Sapphire Nitro+ Rx 6700 Xt Radeon Rx 6000 Series ",
    5,
    "amd",
    0,
    "video-graphics-card"
  );
  const producto6 = new Products(
    "$19.900",
    3,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/Gamer%20Processor%20Intel%20Core%20i5%2010400F%20with%206%20n%C3%BAcleos%20y%204.3GHz%20de%20frecuencia.webp?alt=media&token=a9114af1-ca69-466b-92a2-c0a98fe4f84b",
    "Ejecuta programas de edición de videos, creación de contenido, streaming y videojuegos sin afectar el rendimiento del dispositivo. Memoria caché de 12 MB, rápida y volátil. Soporta memoria RAM DDR4. Su potencia es de 65 W. Cuenta con Hyper-Threading que favorece la ejecución de programas en simultáneo, al dividir el procesador físico en dos procesadores lógicos. Incluye air cooler. Producto  empaque original. Procesador avanzado de alto desempeño y marca líder en el rubro",
    "Gamer Processor Intel Core i5 10400F with 6 núcleos y 4.3GHz de frecuencia ",
    6,
    "intel",
    0,
    "processors"
  );
  const producto7 = new Products(
    "$22.900",
    20,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/Gabinete%20Gamer%20Xigmatek%20Aquarius%20Plus%20Tempaldo%207%20Cooles%20Argb.webp?alt=media&token=a2cc6571-7df2-45a1-8207-d584f37e5f2e",
    "Gabinete Gamer Xigmatek Aquarius Plus Tempaldo 7 Cooles Argb",
    "Gabinete Gamer Xigmatek Aquarius Plus Tempaldo 7 Cooles Argb",
    7,
    "xigmatek",
    0,
    "cases"
  );
  const producto8 = new Products(
    "$324.999",
    5,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/Placa%20de%20video%20Nvidia%20Gigabyte%20Gaming%20GeForce%20RTX%203060Ti%20OC-8GD%20OC%20Edition.webp?alt=media&token=90ea9314-782f-4323-b9eb-6312209f6eda",
    "Fabricante: Nvidia.Tipo de memoria gráfica: GDDR6. Interfaz con la placa madre: PCI-Express 4.0.Tamaño de memoria: 8 GB. Contectividad: HDMI, DisplayPort.",
    "Placa de video Nvidia Gigabyte Gaming GeForce RTX 3060Ti OC-8GD OC Edition ",
    8,
    "nvidia",
    0,
    "video-graphics-card"
  );

  const producto9 = new Products(
    "$4.999",
    1,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/camara-destacada.webp?alt=media&token=46ddec34-ea65-4fb5-bda5-6a7aca104ef2",
    "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono",
    "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono",
    "9",
    "none",
    0,
    "cameras"
  );
  const producto10 = new Products(
    "$15.999",
    20,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/gabinetegamer.webp?alt=media&token=7130942b-5542-4949-94a4-878e7438435e",
    "Gabinete Sentey Z20 Lite - Led Rgb",
    "Gabinete Sentey Z20 Lite - Led Rgb",
    "10",
    "sentey",
    0,
    "cases"
  );
  const producto11 = new Products(
    "$150.999",
    10,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/GPU.webp?alt=media&token=7a295041-d3d3-4e92-bc95-0e4f954e6d4f",
    "Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr",
    "Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr",
    "11",
    "nvidia",
    0,
    "video-graphics-card"
  );
  const producto12 = new Products(
    "$26.999",
    16,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/motherboardbarata-destacado.webp?alt=media&token=1e67bb23-d7d0-4c4a-b621-4ee426bd25c8",
    "Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4",
    "Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4",
    "12",
    "gigabyte",
    0,
    "motherboards"
  );
  const producto13 = new Products(
    "$3.999",
    16,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/reloj-destacado.webp?alt=media&token=d7b23822-d7f6-4ee6-b72d-a7589a5b341e",
    "Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film",
    "Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film",
    "13",
    "xiaomi",
    0,
    "watches"
  );
  const producto14 = new Products(
    "$180.999",
    26,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/rtx%202080ti.webp?alt=media&token=40e41513-0cc7-479b-acd8-638fa68fbf16",
    "Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ",
    "Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ",
    "14",
    "nvidia",
    0,
    "video-graphics-card"
  );
  const producto15 = new Products(
    "$5.999",
    26,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/ssd.webp?alt=media&token=1d39fc58-cdb9-48e4-826c-b796d41ec1a1",
    "Disco sólido interno Kingston SA400S37/480G 480GB",
    "Disco sólido interno Kingston SA400S37/480G 480GB",
    "15",
    "kingston",
    0,
    "ssd"
  );
  const producto16 = new Products(
    "$85.099",
    26,
    "https://firebasestorage.googleapis.com/v0/b/hardwarehouse-proyecto-coder.appspot.com/o/%C3%ADndice.jpg?alt=media&token=58e3752b-0b8c-48aa-8055-90d99bc4b8ea",
    "Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10",
    "Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10",
    "16",
    "hp",
    0,
    "notebooks"
  );
  const items = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15,
    producto16,
  ];

  // useEffect(() => {
  //   //!hacer una funcion que lea todos los documentos que tengan stock ==0,
  //   //!
  //   const db = getFirestore(); //abrir la puerta a la base de datos
  //   var batch = db.batch();
  //  items.forEach( (element)=>
  //     batch.set( db.collection("items1").doc().withConverter(productConverter),element)
  //   )
  //   batch.commit();
  //   console.log("db :>> ", db);
  // }, []);

  //TODO  agregar categorias, darle mas estilos
  //categories:
  // cases
  // processors
  // video-graphic-card
  //watches
  //cameras
  //motherboards
  //ssd
  //notebooks

  console.log("soy el principal;", items[0]);
  return (
    //TODO agregar keys a las map functions
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
          <MainRow />
        </header>
        <Switch>
          <CartContextTag>
            <Route path="/category/:categoryId">
              {items.length > 0 ? (
                <ItemCategoryContainer productos={items} />
              ) : (
                <MonkeyWorking />
              )}
            </Route>

            <Route path="/sign-in">
              <MonkeyWorking />
            </Route>
            <Route path="/register">
              <MonkeyWorking />
            </Route>
            <Route path="/shopping-cart">
                <ItemCartContainer/>
            </Route>
            <Route path="/item/:productId">
              {items.length > 0 ? (
                <ItemDetailContainer product={items} />
              ) : (
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fcnaustin.com%2Fwp-content%2Fuploads%2F2017%2F08%2FMokeyLaptop.gif&f=1&nofb=1"></img>
              )}
            </Route>

            <Route exact path="/">
              {items.length > 0 ? (
                <ItemListContainer product={items} />
              ) : (
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.203OyIQrZQcvPAtttruksgHaD6%26pid%3DApi%26h%3D160&f=1"></img>
              )}
            </Route>
          </CartContextTag>
        </Switch>

        {/* agregarle lo de colores con : */}
        {/* TODO  agregarle lo de colores con : */}
      </div>
    </BrowserRouter>
  );
}

// TODO agregar colores, también agregar los diferentes porductos con el coso variable :
// TODO después encargarnos del sass
// let producto1 = new Products(4999, 1, "imagenes/imagenesInicio/camara-destacada.webp", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "1", "none", 0);
// let producto2 = new Products(15999, 20, "imagenes/imagenesInicio/gabinetegamer.webp", "Gabinete Sentey Z20 Lite - Led Rgb", "Gabinete Sentey Z20 Lite - Led Rgb", "000000002", "sentey", 0);
// let producto3 = new Products(150999, 10, "imagenes/imagenesInicio/GPU.webp", "Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr", "Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr", "000000003", "nvidia", 0);
// let producto4 = new Products(26999, 16, "imagenes/imagenesInicio/motherboardbarata-destacado.webp", "Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4", "Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4", "000000004", "gigabyte", 0);
// let producto5 = new Products(3999, 16, "imagenes/imagenesInicio/reloj-destacado.webp", "Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film", "Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film", "000000005", "xiaomi", 0);
// let producto6 = new Products(180999, 26, "imagenes/imagenesInicio/rtx 2080ti.webp", "Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ", "Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ", "000000006", "nvidia", 0);
// let producto7 = new Products(5999, 26, "imagenes/imagenesInicio/ssd.webp", "Disco sólido interno Kingston SA400S37/480G 480GB", "Disco sólido interno Kingston SA400S37/480G 480GB", "000000007", "kingston", 0);
// let producto8 = new Products(85099, 26, "imagenes/imagenesInicio/indice.webp", "Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10", "Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10", "000000008", "hp", 0);
// ?  What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API..
// ? Does useEffect run after every render? Yes! By default, it runs both after the first render and after every updat
//?  In the example above, we pass [count] as the second argument. What does this mean? If the count is 5, and then our component re-renders with count still equal to 5, React will compare [5] from the previous render and [5] from the next render. Because all items in the array are the same (5 === 5), React would skip the effect. That’s our optimization.

//  ?When we render with count updated to 6, React will compare the items in the [5] array from the previous render to items in the [6] array from the next render. This time, React will re-apply the effect because 5 !== 6. If there are multiple items in the array, React will re-run the effect even if just one of them is different.

// ? Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
//  ? The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

// ?All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers (including .contextType and useContext) is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.
// ? .consumer se usa mas que nada para cuando solo necesitas imprimirlo o no aplicarle una logica a ese valor. Para usarlo  con Logica si necesito un useState
