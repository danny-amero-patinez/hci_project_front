import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
        
    const onButtonClick = () => {

        // Set initial error values to empty
        setEmailError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }

        // Authentication calls will be made here...       

    }

    return <form>
        <figure>
            <img src="img/Logo.png" alt="logo" style={{width: "35%"}} />
        </figure>
        <Nav justify variant="tabs" style={{backgroundColor: "#6dc6ff"}}>
            <Nav.Item style={{backgroundColor: "#20a8ff"}}>
                <Nav.Link href="/login" style={{color: "white"}}>Iniciar sesión</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/register" style={{color: "white"}}>Registrar</Nav.Link>
            </Nav.Item>
        </Nav>
        <div className="mainContainer" style={{backgroundColor: "#b2dfff"}}>
            <div className={"titleContainer"}>
                <div>BIENVENIDO</div>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    value={email}
                    placeholder="Ingresa tu usuario o correo"
                    onChange={ev => setEmail(ev.target.value)}
                    className={"inputBox"} />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    value={password}
                    placeholder="Ingresa tu contraseña"
                    onChange={ev => setPassword(ev.target.value)}
                    className={"inputBox"} />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
                <input
                    className={"inputButton"}
                    type="button"
                    onClick={onButtonClick}
                    value={"Iniciar sesión"}
                    style={{backgroundColor: "#20a8ff"}} />
            </div>
        </div>
    </form>
}

export default Login