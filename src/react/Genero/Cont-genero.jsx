import Campo from './Campo';
import "../../style/Genero/Menu_generos.css";


function Cont_genero() {    
    const imagenes = [
        "../../src/img/generos/novela.jpg",
        "../../src/img/generos/cuento.svg",
        "../../src/img/generos/poesia.jpg",
        "../../src/img/generos/memorias.jpg",
        "../../src/img/generos/romance.jpg",
        "../../src/img/generos/teatro.svg",
        "../../src/img/generos/cienciaFiccion.jpg",
        "../../src/img/generos/no_ficcion.svg",
    ];

    const titulos = ["Novela", "Cuento", "Poesia", "Memorias", "Romance", "Teatro", "Ciencia Ficción", "No ficción"];

    return (
        <>
            <div className="menu_generos">
                <h2>Menú Géneros</h2>
                <ul>
                    {imagenes.map((url, index) => (                        
                        <Campo urlImg={url} titulo={titulos[index]} />
                    ))}                    
                </ul>
            </div>
        </>
    )
}

export default Cont_genero;