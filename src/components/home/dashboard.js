import React from "react"
import { useNavigate } from "react-router-dom";

import Header from '../header/Header';
import MenuGeneros from '../generos/MenuGeneros';
import MenuAutores from '../autores/MenuAutores';
import BarraBusqueda from '../barraBusqueda/BarraBusqueda';
import Publicacion from '../publicacion/Publicacion';

const Dashboard = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        } else {
            navigate("/login")
        }
    }

    return <div className="mainContainer">
        <React.StrictMode>
            <Header />
            <BarraBusqueda />
            <MenuGeneros />
            <MenuAutores />    
            <div className="main__resenas">
            <Publicacion />      
            <Publicacion />
            <Publicacion />
            </div>    
        </React.StrictMode>,
    </div>
}

export default Dashboard