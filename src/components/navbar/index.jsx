import React from "react"
import "./styles.css"
function Navbar(){
    return(
        <nav className="navbar">
            <div><a className="logo" href="/"><h3>LOGO</h3></a></div>

            <div>
                <a className="navlink" href="/sobre">Sobre</a>
                <a className="navlink" href="/areas">Áreas de atuação</a>
                <a className="navlink" href="/artigos">Artigos</a>
                <a className="navlink" href="/contatos">Contatos</a>
            </div>
        </nav>
        
    )

} export default Navbar