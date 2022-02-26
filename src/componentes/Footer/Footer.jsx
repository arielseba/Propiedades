import ButtonWork from "../ButtonWork/ButtonWork";
import "./Footer.css"

const Footer=()=>{
    return(
        <div className="container-footer">
            <div className="container-footer-top">
                <h1 className="title">Make your dreams a reality</h1>
                <div className="button-work">
                    <ButtonWork/>
                </div>
            </div>
            <div className="container-footer-bottom">
                <h1 className="container-footer-bottom-column">
                <div className="logo-img">
                    <img src="/img/logo.png" alt="1" width=""/>
                    <h1 className="logo-text">LogoIpsum</h1>
                </div>
                <div className="img-social">
                    <img src="/img/Social.png" alt="" />
                </div>
                </h1>
                
                <h1 className="container-footer-bottom-column">
                    <h1>Column Heading</h1>
                    <p className="container-footer-bottom-column-p"> Link goes here</p>
                    <p className="container-footer-bottom-column-p"> Link goes here</p>
                    <p className="container-footer-bottom-column-p"> Link goes here</p>
                    <p className="container-footer-bottom-column-p"> Link goes here</p>
                
                </h1>
                <h1 className="container-footer-bottom-column">
                <h1>Column Heading</h1>
                    <p className="container-footer-bottom-column-p">Link goes here</p>
                    <p className="container-footer-bottom-column-p">Link goes here</p>
                    <p className="container-footer-bottom-column-p">Link goes here</p>
                    <p className="container-footer-bottom-column-p">Link goes here</p>
                
                </h1>
                <h1 className="container-footer-bottom-column">
                <h1>Column Heading</h1>
                    <p className="container-footer-bottom-column-p">Link goes here</p>
                    <p className="container-footer-bottom-column-p">Link goes here</p>
                    <p className="container-footer-bottom-column-p">Link goes here</p>
                    <p className="container-footer-bottom-column-p">Link goes here</p>
                
                </h1>
            </div>
        </div>

    )


}
export default Footer;