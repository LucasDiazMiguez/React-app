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
import MonkeyWorking from './components/MonkeyWorking';
export default function App() {
  const [items, setItems] = useState(0);
  const [valores, setValores] = useState("");
  const eventhandler = (e) => {
    console.log("event.hander", e.key);
    if (
      e.key === "a" ||
      e.key === "e" ||
      e.key === "i" ||
      e.key === "o" ||
      e.key === "u"
    ) {
      console.log("ta mal");
      e.preventDefault();
    }
  };
  useEffect(() => {
    const buscoItems = new Promise((resolve, reject) => {
      const items = [
        {
          id: "00000001",
          name: "RTX 3090",
          category: "video-graphics-card",
          description: "NVIDIA GPU RTX 3090 24gb MSI",
          value: "$300000",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Fstateless-www-realhardwarerevi%2F2020%2F09%2FASUS-RTX-30-STRIX-5-1280x640.jpg&f=1&nofb=1",
        },
        {
          id: "00000002",
          name: "Processor gamer AMD Ryzen 7 3700X ",
          category: "processors",
          description:
            "Procesador gamer AMD Ryzen 7 3700X 100-100000071BOX de 8 núcleos y 4.4GHz de frecuencia",
          value: "$44588",
          img:
            "https://http2.mlstatic.com/D_NQ_NP_647835-MLA32242537922_092019-O.webp",
        },
        {
          id: "00000003",
          name: "Intel Core i9 10850K ",
          category: "processors",
          description:
            "Procesador gamer Intel Core i9 10850K BX8070110850K de 10 núcleos y 5.2GHz de frecuencia con gráfica integrada",
          value: "$60000",
          img:
            "https://http2.mlstatic.com/D_NQ_NP_908864-MLA44029060066_112020-O.webp",
        },
        {
          id: "00000004",
          name: "Gabinete Lian Li O11 Dynamic Xl Rog Certified Atx ",
          category: "cases",
          description:
            "Lian Li O11 Dynamic XL ROG Certified (negro) ATX Full Tower Gaming Computer Case",
          value: "$75.900",
          img:
            "https://http2.mlstatic.com/D_NQ_NP_996620-MLA44773389046_022021-O.webp",
        },
        {
          id: "00000005",
          name: "Sapphire Nitro+ Rx 6700 Xt Radeon Rx 6000 Series ",
          category: "video-graphics-card",
          description:
            "La tarjeta gráfica SAPPHIRE NITRO + AMD Radeon RX 6700 XT para el jugador de 1440p definitivo que busca aprovechar gráficos innovadores con imágenes vívidas y soluciones de refrigeración de excelente calidad. Equipada con componentes superiores para manejar escenarios de juegos AAA, la tarjeta gráfica NITRO + AMD Radeon RX 6700 XT es un componente crucial para una experiencia de juego increíble. El diseño estético será una hermosa integración en cualquier construcción de PC.",
          value: "$339.999",
          img:
            "https://http2.mlstatic.com/D_NQ_NP_624759-MLA45625734705_042021-O.webp",
        },
        {
          id: "00000006",
          name:
            "Gamer Processor Intel Core i5 10400F with 6 núcleos y 4.3GHz de frecuencia ",
          category: "processors",
          description:
            "Ejecuta programas de edición de videos, creación de contenido, streaming y videojuegos sin afectar el rendimiento del dispositivo. Memoria caché de 12 MB, rápida y volátil. Soporta memoria RAM DDR4. Su potencia es de 65 W. Cuenta con Hyper-Threading que favorece la ejecución de programas en simultáneo, al dividir el procesador físico en dos procesadores lógicos. Incluye air cooler. Producto  empaque original. Procesador avanzado de alto desempeño y marca líder en el rubro",
          value: "$19.900",
          img:
            "https://http2.mlstatic.com/D_NQ_NP_951550-MLA43003993763_082020-O.webp",
        },
        {
          id: "00000007",
          name: "Gabinete Gamer Xigmatek Aquarius Plus Tempaldo 7 Cooles Argb",
          category: "cases",
          description:
            "Gabinete Xigmatek Aquarius Plus, una carcasa para PC Rainbow RGB de nueva generación con vidrio templado frontal e izquierdo, el chasis de la carcasa diseñado para todos los juegos ATX, M-ATX y Mini ITX principales o placas base profesionales. Admite un espacio libre del enfriador de CPU de 158 mm y una tarjeta VGA de 360 mm , hasta 10 ventiladores de 120 mm, o radiadores de watercooler liquida en la parte superior 240, 360 mm, la derecha 240 360 mm y la parte trasera 120 mm para un excelente rendimiento de enfriamiento. El diseño de chasis especial facilita la gestion de cables y oculta todos los cables desordenados para una pantalla ordenada Aquarius viene especialmente con un panel frontal de vidrio templado transparente es una elección perfecta para mostrar lo hermosa que será la construcción de su sistema.",
          value: "$22.900",
          img:
            "https://http2.mlstatic.com/D_NQ_NP_918669-MLA43758321866_102020-O.webp",
        },
        {
          id: "00000008",
          name:
            "Placa de video Nvidia Gigabyte Gaming GeForce RTX 30 Series RTX 3060 Ti GV-N306TGAMING OC-8GD OC Edition 8GB",
          category: "video-graphics-card",
          description:
            "Fabricante: Nvidia.Tipo de memoria gráfica: GDDR6. Interfaz con la placa madre: PCI-Express 4.0.Tamaño de memoria: 8 GB. Contectividad: HDMI, DisplayPort.",
          value: "$324.999",
          img:
            "https://http2.mlstatic.com/D_NQ_NP_976092-MLA44546830880_012021-O.webp",
        },
      ];
      setTimeout(() => {
        resolve(items);
      }, 1);
    });

    buscoItems
      .then(
        (res) => {
          setItems(res);
          console.log("me ejecute");
          // res.forEach((item) => console.log("item", item)
          // )
        },
        (rej) => {
          console.log("rechazada-->", rej);
        }
      )
      .catch((err) => {
        console.log("Hubo un error");
      })
      .finally(() => {
        console.log("AL FIN TERMINE");
      });
  }, []);

  console.log("soy el principal;", items);
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
              <MonkeyWorking/>
            )}
          </Route>
        
          <Route path="/sign-in">
              <MonkeyWorking/>
          </Route>
          <Route path="/register">
          <MonkeyWorking/>
          </Route>
          <Route path="/shopping-cart">
          <MonkeyWorking/>
          </Route>
          <Route path="/item/:productId">
            {items.length > 0 ? (
              <ItemDetailContainer productos={items} />
            ) : (
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fcnaustin.com%2Fwp-content%2Fuploads%2F2017%2F08%2FMokeyLaptop.gif&f=1&nofb=1"></img>
            )}
          </Route>
          
          <Route exact path="/">
            {items.length > 0 ? (
              <ItemListContainer productos={items} />
            ) : (
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.203OyIQrZQcvPAtttruksgHaD6%26pid%3DApi%26h%3D160&f=1"></img>
            )}
          </Route>
         <CartContextTag></CartContextTag></CartContextTag>
        </Switch>

        {/* agregarle lo de colores con : */}
        {/* TODO  agregarle lo de colores con : */}
      </div>
    </BrowserRouter>
  );
}

// TODO agregar colores, también agregar los diferentes porductos con el coso variable :
// TODO después encargarnos del sass
// let producto1 = new Products(4999, 1, "imagenes/imagenesInicio/camara-destacada.webp", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "000000001", "none", 0);
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