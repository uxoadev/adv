import React from "react";
import "./styles.css"
import logo from "./logo.png"
import {FaTwitter, FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa"


function Footer() {
    return (
        <div className="backfo">
<footer className="footer">
            <ul><img src={logo} alt="" width="150" height="150"/></ul>

            
            <ul>
                <h2>CONTATO</h2>
                <li>(86) 9 9999-9999</li>
                <li>eng.uxoa@gmail.com</li>
            </ul>
            
            <ul>    
            <h2>ENDEREÇO</h2>
                <li>Rua 123, Bairro</li>
                <li>Teresina - PI, 64000-00</li>
            </ul>
            <div className="icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size="40" color="#fff" /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size="40" color="#fff" /></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size="40" color="#fff" /></a>
                    <a href="http://wa.me/5586988663532" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size="40" color="#fff" /></a>
            </div>
            
            
        </footer >

        </div>
        

    )
} export default Footer