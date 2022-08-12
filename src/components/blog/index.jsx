import React from "react";

function Blog(props){
    return(
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </div>

    )
} export default Blog