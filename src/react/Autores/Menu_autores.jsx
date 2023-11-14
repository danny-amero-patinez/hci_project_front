import Campo from "../Genero/Campo";
import "../Autores/Menu_autores.css";

function Menu_autores(){
    const autores = [
        "../../src/img/autores/borges.jpg",
        "../../src/img/autores/cortazar.jpg",
        "../../src/img/autores/gabo.jpg",
        "../../src/img/autores/poe.jpg",
        "../../src/img/autores/williamS.jpg"
    ];

    const nombres = [
        "Borges", "Cortázar", "Gabo", "Allan Poe", "William"
    ];    

    const estilos = {
        width: "60px", height: "80px",
    };


    return (
        <>
            <div className="menu_autores">
                <h2>Autores</h2>
                <ul>
                    {autores.map((url, index) =>(
                        <Campo urlImg= {url} titulo = {nombres[index]} estilos = {estilos}/>
                    ))};
                </ul>                
            </div>        
        </>
    )
}

export default Menu_autores;