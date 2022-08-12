import React from "react";
import "./styles.css"

function Caixa(props) {
    return (
        <div className="backte">
            <div className="texto">
                <img src={props.img} alt="" />


                <div><h1>{props.titulo}</h1>
                    <h2>{props.sub}</h2>
                    <p>{props.text}</p>
                    <h2>{props.sub2}</h2>
                    <p>{props.text2}</p>
                </div>

            </div>
        </div>



    )
} export default Caixa