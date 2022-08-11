import React from "react"
import "./styles.css"
import logo from "./logo.png"
function Navbar(){
    return(
        <nav className="navbar">
            <div><a className="logo" href="/"> <img src={logo} alt="" width="150" height="150" /> </a></div>

            <div className="navbar">
                <a className="navlink" href="/sobre">Sobre</a>
                <a className="navlink" href="/areas">Áreas de atuação</a>
                <a className="navlink" href="/artigos">Artigos</a>
                <a className="navlink" href="/contatos">Contatos</a>
            </div>
        </nav>
        
    )

} export default Navbar