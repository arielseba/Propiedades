import "./SimilarListingContainer.css";
import CardSimilarListing from "../Similarlistingdetail/CardSimilarListing";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SimilarListingContainer = () => {
  const parametros = useParams();
  const [categoria, setCategoria] = useState();
  const [buscador, setBuscador] = useState([]);
  const [datos, setDatos] = useState([]);
  const [propiedades, setPropiedades] = useState([]);
  const [selectFilter, setSelectFilter] = useState("");

  const getDatos2 = async () => {
    try {
      //LLamada a Renta

      if (parametros.category == "Renta" || parametros.category == undefined) {
        const response = await fetch(
          "https://61aec09c2fd8100017ccd65c.mockapi.io/api/v1/rent"
        );
        const data = await response.json();
        setDatos(data);
        setPropiedades(data);
        setCategoria("Renta");
      }
      //LLamada a venta
      if (parametros.category == "Venta") {
        const response1 = await fetch(
          "https://61aec09c2fd8100017ccd65c.mockapi.io/api/v1/buy"
        );
        const data1 = await response1.json();
        setDatos(data1);
        setPropiedades(data1);
        setCategoria("Venta");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDatos2();
  }, [parametros]);

  if (datos.length > 0) {
    const handleChange = (e) => {
     
 
      setBuscador(e.target.value);
      filtrar(e.target.value);
      
      
    };
    const filtrar = (terminoBusqueda) => {
      let resultadoBusqueda = datos.filter((elemento) => {
        if (selectFilter == "bathroom") {
          if (
            elemento.bathroom
              .toString()
              .toLowerCase()
              .includes(terminoBusqueda.toLowerCase())
          ) {
            return elemento;
          }
        }
        if (selectFilter == "cost") {
          if (
            elemento.cost
              .toString()
              .toLowerCase()
              .includes(terminoBusqueda.toLowerCase())
          ) {
            return elemento;
          }
        }
        if (selectFilter == "bedrooms") {
          if (
            elemento.bedrooms
              .toString()
              .toLowerCase()
              .includes(terminoBusqueda.toLowerCase())
          ) {
            return elemento;
          }
        }
        if (selectFilter == "name") {
          if (
            elemento.name
              .toString()
              .toLowerCase()
              .includes(terminoBusqueda.toLowerCase())
          ) {
            return elemento;
          }
        }
        if (selectFilter == "year") {
          if (
            elemento.year
              .toString()
              .toLowerCase()
              .includes(terminoBusqueda.toLowerCase())
          ) {
            return elemento;
          }
        }
        if (selectFilter == "slot") {
          if (
            elemento.slot
              .toString()
              .toLowerCase()
              .includes(terminoBusqueda.toLowerCase())
          ) {
            return elemento;
          }
        }
        if (selectFilter == "mts") {
          if (
            elemento.mts
              .toString()
              .toLowerCase()
              .includes(terminoBusqueda.toLowerCase())
          ) {
            return elemento;
          }
        }
      });
      setPropiedades(resultadoBusqueda);
    };

    /* Busca las los nombres de las propiedades del objeto para cargar el dropdown mas adelante
const keys=[]
for(let aux in datos[0]){
      keys.push(aux)
}*/
    const filterSelecter = (e) => {
      setSelectFilter(e.target.value);
      setBuscador("");
      setPropiedades(datos);
    };

    return (
      <>
        <div className="line"></div>
        <h1 className="container-similar-listing-container-titulo">
          Similar Listing
        </h1>
        <div className="search">
          <input
            value={buscador}
            onChange={handleChange}
            className="placeholder:italic placeholder:text-slate-400 block bg-white w border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm m-4"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />

          <select
            onChange={filterSelecter}
            value={selectFilter}
            className="placeholder:italic placeholder:text-slate-400 block bg-white w border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm m-4"
            placeholder="Search for anything..."
            type="text"
            name="search"
          >
           <option  value="type">
             Type
             </option>
            <option  value="name">
              Name
            </option>
            <option value="cost">Cost</option>
            <option value="bedrooms">Bedrooms</option>
            <option value="bathroom">Bathroom</option>
            <option value="year">Year</option>
            <option value="slot">Slot</option>
            <option value="mts">Mts</option>
          </select>
        </div>

        <div className="container-similar-listing-container">
          {propiedades.map((element, key) => {
            return (
              <Fragment key={key}>
                <CardSimilarListing
                  name={element.name}
                  bedrooms={element.bedrooms}
                  bathroom={element.bathroom}
                  slot={element.slot}
                  img={element.src}
                  param={categoria}
                />
              </Fragment>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Spinner</h1>
      </>
    );
  }
};

export default SimilarListingContainer;
