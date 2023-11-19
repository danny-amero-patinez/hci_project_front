import Option from "../Option";
import "./MenuGeneros.css";

function MenuGeneros() {
    const imagenes = [        
        "../../public/generos/novela.jpg",
        "../../public/generos/cuento.svg",
        "../../public/generos/poesia.jpg",
        "../../public/generos/memorias.jpg",
        "../../public/generos/romance.jpg",
        "../../public/generos/teatro.svg",
        "../../public/generos/cienciaFiccion.jpg",
        "../../public/generos/no_ficcion.svg",
    ];

    const titulos = ["Novela", "Cuento", "Poesia", "Memorias", "Romance", "Teatro", "Ciencia Ficción", "No ficción"];

    return (
        <>
            <div className="contGeneros">
                <h2 id="contGeneros__titulo">Géneros</h2>
                <ul>
                    {imagenes.map((url, index) => (
                        <Option key={index} urlImg={url} titulo={titulos[index]} />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MenuGeneros;