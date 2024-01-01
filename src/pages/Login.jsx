import React from "react";
import Form from "../components/Form";
import "./Login.css"

export default function Login(props) {
    return(
        <div className="Login">
            <div className="Welcome-section">
                <h1 className="Welcome-section_Title">Welcome Back!</h1>
            </div>
            <div className="Form">
                <p className="Form-title">Login</p>
                <p className="Form-subtitle">Welcome back! Please login to your acount.</p>
                <form action="" className="Form-section">
                    <label className="Form-subtext" for="mail">User Name</label>
                    <input className="Form-input" type="text" name="mail" placeholder="username@gmail.com" required/>
                    <label className="Form-subtext" for="password">Password</label>
                    <input className="Form-input" type="password" name="password" placeholder="********" required />
                    <div className="Form-section2">
                        <div className="Form-remember">
                            <input className="Form-remember_checkbox" type="checkbox" name="rememberme" id="remberme" />
                            <label className="Form-remember_text" for="cbox2">Remember Me?</label>
                        </div>
                        <a className="Form-forget" href="">Forget Password?</a>
                    </div>
                    <button className="Form-button">Login</button>
                </form>
                <p className="Form-subtext">New User? <a href="">Signup</a></p>
            </div>
        </div>
        )
}