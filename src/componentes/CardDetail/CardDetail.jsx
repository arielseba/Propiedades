import CardDetailPropiedad from "../Carddetailpropiedad/CardDetailPropiedad";
import CardFormulario from "../Cardform/CardFromulario";
import "./CardDetail.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SimilarListingContainer from "../Similarlistingcontainer/SimilarListingContainer";

const CardDetail = () => {
  const formatCurrency = (value) => {
    if (value) {
      return new Intl.NumberFormat("en-US").format(value);
    }
    return "";
  };
  const params = useParams();
  const [datos, setDatos] = useState([]);
  const [name, setName] = useState([]);

  const getDatos = async () => {
    try {
      //LLamada a Renta
      if (params.category != "Venta") {
        const response = await fetch(
          "https://61aec09c2fd8100017ccd65c.mockapi.io/api/v1/rent"
        );
        const data = await response.json();
        setDatos(data);

        let aux = data.find((element) => element.name == params.name);

        if (aux) {
          setName(aux);
        }
      }
      //LLamada a venta
      if (params.category == "Venta") {
        const response1 = await fetch(
          "https://61aec09c2fd8100017ccd65c.mockapi.io/api/v1/buy"
        );
        const data1 = await response1.json();
        setDatos(data1);
        let aux1 = data1.find((element) => element.name == params.name);

        if (aux1) {
          setName(aux1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDatos();
  }, [params]);

  if (datos.length > 0 && name.length < 1) {
    return (
      <>
        <div className="card-detail-navbar">
          <h1 className="name">{datos[0].name}</h1>
          <h1 className="cost">$ {formatCurrency(datos[0].cost)}</h1>
        </div>
        <div className="container-card-detail">
          <img className="card-detail-img" src={datos[0].src} alt="" />

          <div className="card-detail-form">
            <CardFormulario />
          </div>

          <div className="card-detail-propiedad">
            <CardDetailPropiedad
              bedrooms={datos[0].bedrooms}
              bathroom={datos[0].bathroom}
              slot={datos[0].slot}
              year={datos[0].year}
            />
          </div>
        </div>
        <SimilarListingContainer />
      </>
    );
  } else if (name) {
    return (
      <>
        <div className="card-detail-navbar">
          <h1 className="name"> {name.name}</h1>
          <h1 className="cost">$ {formatCurrency(name.cost)}</h1>
        </div>
        <div className="container-card-detail">
          <img className="card-detail-img" src={name.src} alt="" />

          <div className="card-detail-form">
            <CardFormulario />
          </div>

          <div className="card-detail-propiedad">
            <CardDetailPropiedad
              bedrooms={name.bedrooms}
              bathroom={name.bathroom}
              slot={name.slot}
              year={name.year}
            />
          </div>
        </div>
        <SimilarListingContainer />
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>Spinner</h1>
          <SimilarListingContainer />
        </div>
      </>
    );
  }
};

export default CardDetail;
