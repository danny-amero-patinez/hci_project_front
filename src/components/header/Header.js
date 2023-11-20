import {IoIosNotificationsOutline} from "react-icons/io";
import {FiMessageCircle} from "react-icons/fi";
import {FaRegUserCircle} from "react-icons/fa";

import "./Header.css";
const margin = {
    margin:"5px"
};

function Header(){
    return <>
        <div className="header">
            <div className="header__logo">
                <img src="../../../public/Logo.png" alt="Logo del sistema"/>
            </div>        
            <div className="header__options">
                <IoIosNotificationsOutline color="white" size={28} style={margin}/>
                <FiMessageCircle color="white" size={28} style={margin}/>
                <FaRegUserCircle color="white" size={52} style={margin}/>
            </div>
        </div>    
    </>
}

export default Header;