import React from "react";
import './index.css'

function handleSubmit (event) {
    event.preventDefault()
    console.log(event)
    console.log('Hola')
}

export const Login = () => {
    return (
        <div>
            <div className="wrapper-login">
            <h2 className="login-tittle">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="wrapper-login_inputs">
                    <h5>Email:</h5>
                    <input placeholder="email"/>
                    <br />
                    <h5>Password:</h5>
                    <input type={"password"} placeholder="password"/>
                </div>
                <button className="boton_login" type="submit">Login</button>
            </form>
            </div>
        </div>
    )
}