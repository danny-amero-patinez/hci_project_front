import Option from "../Option";
import "./MenuAutores.css";

function MenuAutores(){    
    const autores = [
        "../../public/autores/borges.jpg",
        "../../public/autores/cortazar.jpg",
        "../../public/autores/gabo.jpg",
        "../../public/autores/poe.jpg",
        "../../public/autores/williamS.jpg"
    ];

    const nombres = [
        "Borges", "Cortázar", "Gabo", "Allan Poe", "William"
    ];        

    return (
        <>
            <div className="contAutores">
                <h2 style={{fontSize: "30px", textAlign: "center"}}>Autores</h2>
                <ul>
                    {autores.map((url, index) => (
                        <Option key={index} urlImg={url} titulo={nombres[index]} />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MenuAutores;