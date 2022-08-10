import React from "react";
import "./styles.css"
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"


function Footer() {
    return (
        <footer className="footer">
            <ul>
                <li><h1>LOGO</h1></li>
            </ul>

            
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
            </div>
            
            
        </footer >


    )
} export default Footer