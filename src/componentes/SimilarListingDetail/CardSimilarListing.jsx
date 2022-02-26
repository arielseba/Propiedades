import "./CardSimilarListing.css";
import { Link } from "react-router-dom";
import {
  faBed,
  faShower,
  faBorderNone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function scroll() {
  return window.scrollTo(0, 0);
}
const CardSimilarListing = (props) => {
  return (
    <>
      <div className="container-card-similar">
        <Link to={`/${props.param}/${props.name}`} onChange={scroll}>
          <img className="img-card-similar" src={props.img} alt="" />
          <div>
            <h1 className="titulo-card-similar">{props.name}</h1>
          </div>
          <div className="container-card-similar-details-icons">
            <div className="container-card-similar-details-icons-detail">
              {" "}
              <FontAwesomeIcon icon={faBed} />
              {props.slot}
            </div>
            <div className="container-card-similar-details-icons-detail">
              <FontAwesomeIcon icon={faShower} />
              {props.bedrooms}
            </div>
            <div className="container-card-similar-details-icons-detail-end">
              <FontAwesomeIcon icon={faBorderNone} />
              {props.bathroom}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardSimilarListing;
