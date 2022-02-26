import "./CardDetailPropiedad.css";
import {
  faBed,
  faShower,
  faBorderNone,
  faWarehouse,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CardDetailPropiedad = (props) => {
  return (
    <>
      <div className="container-details">
        <div className="container-details-text">Details</div>
        <div className="container-details-icons">
          <div className="container-details-icons-detail">
            <FontAwesomeIcon icon={faBed} />
            {props.bedrooms}
          </div>
          <div className="container-details-icons-detail">
            <FontAwesomeIcon icon={faShower} />
            {props.bathroom}
          </div>
          <div className="container-details-icons-detail">
            <FontAwesomeIcon icon={faBorderNone} />
            {props.bathroom}
          </div>
          <div className="container-details-icons-detail">
            <FontAwesomeIcon icon={faWarehouse} />
            {props.slot}
          </div>
          <div className="container-details-icons-detail-end">
            <FontAwesomeIcon icon={faCalendarDays} />
            {props.year}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetailPropiedad;
