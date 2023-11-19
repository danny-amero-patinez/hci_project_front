import "./option.css";

function Option(props) {
    const { urlImg, titulo } = props;
    return (
        <>            
            <li>                
                <img src={urlImg} alt={titulo} />
                <h2>{titulo}</h2>
            </li>
        </>
    );
}

export default Option;