import React from "react";
import "./styles.css"
import {FaTwitter, FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa"

function Cardhome(props){
    return(
        <div className="back1">
             <div className="cardhome">
            <div>
                
                <h2>CUIDO DOS SEUS DIREITOS</h2>
                <h1>HILQUIAS JORDÃO</h1>
                <h4>Advocacia e assessoria jurídica</h4>
                <h4>Eficiência, transparência e atendimento individualizado na sua demanda.</h4>
            </div>
            <div className="icons1">
            <img src={props.inicial1} alt="" height="500px" width="400px"/>
            <div >
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size="25" /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size="25" /></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size="25"  /></a>
                    <a href="http://wa.me/5586988663532" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size="25" /></a>
            </div>
            </div>
            

        </div>
        </div>
       
    )
    
}export default Cardhome