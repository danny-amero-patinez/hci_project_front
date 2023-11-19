import {FaStar} from "react-icons/fa";
import "./UserPublication.css";

function UserPublication(props){
    const {urlImg, nombre, usuario, calificacion} = props;
    return(
        <>
            <div className="userPublication">
                <div className="userPublication__foto">
                    <img src={urlImg} alt={usuario}/>
                </div>
                <div className="userPublication__info">
                    <h2>{nombre}</h2>
                    <h3>{usuario}</h3>
                    <h4>
                        <FaStar />{<FaStar />}{<FaStar />}{<FaStar />}{<FaStar />}
                    </h4>
                </div>
            </div>
        </>
    );
}

export default UserPublication;