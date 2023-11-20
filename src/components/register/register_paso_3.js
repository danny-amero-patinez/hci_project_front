import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Row } from "react-bootstrap";
import { Col } from 'react-bootstrap';

// import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const RegisterPaso3 = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);
    const [checked8, setChecked8] = useState(false);
    
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
            <Nav.Item>
                <Nav.Link href="/login" style={{color: "white"}}>Iniciar sesión</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{backgroundColor: "#20a8ff"}}>
                <Nav.Link href="/register" style={{color: "white"}}>Registrar</Nav.Link>
            </Nav.Item>
        </Nav>
        <div className="mainContainer" style={{backgroundColor: "#b2dfff"}}>
            <div className={"titleContainer"}>
                <div>ELIGE TUS GÉNEROS FAVORITOS</div>
            </div>
            <br />
            <Row>
                <Col>
                    <figure>
                        <img src="img/generos/ciencia_ficcion.jpg" alt="logo" style={{width: "50%"}} />
                        <figcaption>
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked}
                                value="1"
                                onChange={(e) => setChecked(e.currentTarget.checked)}
                            >
                                Ciencia Ficción
                            </ToggleButton>
                        </figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure>
                        <img src="img/generos/memorias.jpg" alt="logo" style={{width: "35%"}} />
                        <figcaption>
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked2}
                                value="1"
                                onChange={(e2) => setChecked2(e2.currentTarget.checked)}
                            >
                                Memorias
                            </ToggleButton>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <figure>
                        <img src="img/generos/novela.jpg" alt="logo" style={{width: "35%"}} />
                        <figcaption>
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked3}
                                value="1"
                                onChange={(e) => setChecked3(e.currentTarget.checked)}
                            >
                                Novela
                            </ToggleButton>
                        </figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure>
                        <img src="img/generos/poesia.jpg" alt="logo" style={{width: "35%"}} />
                        <figcaption>
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked4}
                                value="1"
                                onChange={(e) => setChecked4(e.currentTarget.checked)}
                            >
                                Poesía
                            </ToggleButton>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <figure>
                        <img src="img/generos/romance.jpg" alt="logo" style={{width: "35%"}} />
                        <figcaption>
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked5}
                                value="1"
                                onChange={(e) => setChecked5(e.currentTarget.checked)}
                            >
                                Romance
                            </ToggleButton>
                        </figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure>
                        <img src="img/generos/cuento.svg" alt="logo" style={{width: "35%"}} />
                        <figcaption>
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked6}
                                value="1"
                                onChange={(e) => setChecked6(e.currentTarget.checked)}
                            >
                                Cuento
                            </ToggleButton>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <figure>
                        <img src="img/generos/no_ficcion.svg" alt="logo" style={{width: "35%"}} />
                        <figcaption>
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked7}
                                value="1"
                                onChange={(e) => setChecked7(e.currentTarget.checked)}
                            >
                                No Ficción
                            </ToggleButton>
                        </figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure>
                        <img src="img/generos/teatro.svg" alt="logo" style={{width: "35%"}} />
                        <figcaption>
                            <ToggleButton
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked8}
                                value="1"
                                onChange={(e) => setChecked8(e.currentTarget.checked)}
                            >
                                Teatro
                            </ToggleButton>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
            <br />
            <div className={"inputContainer"}>
                <a 
                href="/home"
                className={"inputButton btn btn-primary"}
                type="button"
                style={{backgroundColor: "#20a8ff"}}
                >
                    Continuar
                </a>
            </div>
            <br />
        </div>
    </form>
}

export default RegisterPaso3