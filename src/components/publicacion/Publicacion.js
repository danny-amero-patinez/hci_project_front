import Reactions from "../reactions/Reactions";
import InfoLibro from "./campos/InfoLibro";
import UserPublication from "../user/UserPublication";
import "./Publicacion.css";

function Publicacion() {
    const portada = "../../public/portada_libros/rayuela.png"
    const perfil = "../../public/autores/poe.jpg";
    return (
        <>
            <div className="contPublicacion">
                <div className="contPublication__info">
                    <UserPublication urlImg={perfil} nombre="Miguel Vasquez" usuario="@Miguel_VR12" calificacion="5" />
                    <InfoLibro urlImg={portada} nombreLibro="Rayuela" nombreAutor="Julio Cortazar" editorial="Porrua" />
                </div>
                <div className="contPublicacion__resena">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure autem ullam doloribus eaque excepturi architecto maiores inventore quidem culpa, deleniti necessitatibus velit obcaecati quod quisquam asperiores magnam aliquid. Nesciunt <a href="">seguir leyendo...</a></p>
                </div>
                <hr />
                <Reactions like="00" dislike="00" />
            </div>               
        </>
    )
}

export default Publicacion;