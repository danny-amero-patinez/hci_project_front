function Publicacion(props){
    const {imgPerfil, Nombre_Usuario, Nombre_perfil, Texto} = props;
    return(
        <>
            <div className="cont_resena">
                <div className="superior">
                    <div className="info_perfil">
                        
                    </div>
                    <div className="info_libro">
                        addLibro();
                    </div>
                </div>                
                <div className="inferior">

                </div>

            </div>
        </>
    )
}



function addLibro(titLibro, autor, editorial, urlImg){
    return `
    <div className="cont_info_libro">
        <h2>${titLibro}</h2>
        <h3>${autor}</h3>
        <h3>${editorial}</h3>
    </div>

    <div className="portadaLibro">
        <img src=${urlImg} alt=${titLibro}/>
    </div>
    `
}



export default Publicacion;