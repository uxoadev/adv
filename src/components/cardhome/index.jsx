import React from "react";
import "./styles.css"

function Cardhome(props){
    return(
        <div className="cardhome">
            <div>
                
                <h2>CUIDO DOS SEUS DIREITOS</h2>
                <h1>HILQUIAS JORDÃO</h1>
                <h4>Advocacia e assessoria jurídica</h4>
                <h4>Eficiência, transparência e atendimento individualizado na sua demanda.</h4>
            </div>
            <img src={props.inicial1} alt="" />

        </div>
    )
    
}export default Cardhome