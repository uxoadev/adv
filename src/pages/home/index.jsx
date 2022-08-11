import React from "react"
import "./styles.css"
import inicial1 from "../../imagens/inicial1.png"

function Home() {
    return (
        <div className="home">
            <div>
                <h2>CUIDO DOS SEUS DIREITOS</h2>
                <h1>HILQUIAS JORDÃO</h1>
                <h4>Advocacia e assessoria jurídica</h4>
                <h4>Eficiência, transparência e atendimento individualizado na sua demanda.</h4>
            </div>
            <img src={inicial1} alt="" />
           
        </div>
        


    )

} export default Home