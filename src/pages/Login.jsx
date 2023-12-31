import React from "react";
import Form from "../components/Form";

export default function Login(props) {
    return(
        <div className="Login h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="Welcome-section"></div>
            <Form/>
        </div>
        )
}