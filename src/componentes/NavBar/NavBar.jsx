import ButtonWork from "../ButtonWork/ButtonWork";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = ({ props }) => {
  return (
    <>
      <div className="header">
        <div className="NavBar">
          <div className="logo-img">
            <img src="/img/logo.png" alt="1" width="" />
            <img src="/img/logo-text.png" alt="" />
          </div>

          <div className="links">
            <ol>
              <Link to="/Renta">
                <li>Renta</li>
              </Link>
              <Link to="/Venta">
                <li>Venta</li>
              </Link>
              <li>NavLink</li>
              <li>NavLink</li>

              <ButtonWork />
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
