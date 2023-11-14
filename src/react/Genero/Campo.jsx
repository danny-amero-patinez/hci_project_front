import '../../style/Genero/Campo.css';


function Campo(props){
    const {urlImg, titulo, estilos} = props;    
    return(
        <>
            <li>
                <img src={urlImg} alt={titulo} style={estilos}/>
                <h3>{titulo}</h3>
            </li>      
        </>
    )
}

export default Campo;