import {CiSearch} from "react-icons/ci";
import "./BarraBusqueda.css";


function BarraBusqueda(){
    return(
        <>
            <div className="barraBusqueda">
                <input type="text" placeholder="Busqueda..."/>
                <div className="barraBusqueda__icon">
                    <CiSearch size={28} color="white"/>
                </div>                
            </div>        
        </>
    )
}

export default BarraBusqueda;