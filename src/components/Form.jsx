import React from "react";

export default function Form(props) {
    return(
        <div>
            <form onSubmit={props.handleFormSubmit}>formulario</form>
        </div>
        )
}