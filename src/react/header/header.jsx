import { BsChatRight } from "react-icons/bs"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"
import "../../style/header/header.css";

function header() {
    const logo = "../../src/img/Logo.png";        
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />   
                </div>                
                <div className="option">
                    <div className="chat">
                        <BsChatRight size={23} color="white"/>
                    </div>
                    <div className="notification">
                        <IoMdNotificationsOutline size={24} color="white"/>
                    </div>
                    <div className="user">
                        <BiUserCircle size={52} color="white"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default header;