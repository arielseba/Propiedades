import ButtonWork from "../Buttonwork/ButtonWork";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-footer-top">
        <h1 className="title">
          Make your dreams <img src="/img/reality.png" alt="" />
        </h1>
        <div className="button-work">
          <ButtonWork />
        </div>
      </div>
      <div className="line-footer"></div>
      <div className="container-footer-bottom">
        <div className="container-footer-bottom-column">
          <div className="logo-img-footer">
            <img src="/img/logo.png" alt="1" width="" />
            <img src="/img/logo-text.png" alt="" />
          </div>
          <div className="img-social">
            <img src="/img/Social.png" alt="" />
          </div>
        </div>

        <div className="container-footer-bottom-column">
          <h1>Column Heading</h1>
          <p className="container-footer-bottom-column-p"> Link goes here</p>
          <p className="container-footer-bottom-column-p"> Link goes here</p>
          <p className="container-footer-bottom-column-p"> Link goes here</p>
          <p className="container-footer-bottom-column-p"> Link goes here</p>
        </div>
        <div className="container-footer-bottom-column">
          <h1>Column Heading</h1>
          <p className="container-footer-bottom-column-p">Link goes here</p>
          <p className="container-footer-bottom-column-p">Link goes here</p>
          <p className="container-footer-bottom-column-p">Link goes here</p>
          <p className="container-footer-bottom-column-p">Link goes here</p>
        </div>
        <div className="container-footer-bottom-column">
          <h1>Column Heading</h1>
          <p className="container-footer-bottom-column-p">Link goes here</p>
          <p className="container-footer-bottom-column-p">Link goes here</p>
          <p className="container-footer-bottom-column-p">Link goes here</p>
          <p className="container-footer-bottom-column-p">Link goes here</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
