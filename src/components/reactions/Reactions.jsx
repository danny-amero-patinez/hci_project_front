import { SlLike, SlDislike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import "./Reactions.css";


function Reactions(props) {
    const {like, dislike} = props;
    return (
        <>
            <div className="reactions">
                <div className="reactions__like">
                    <SlLike size={16} style={{marginRight: "3px"}}/><h2>{like}</h2>
                </div>
                <div className="reactions__dislike">
                    <SlDislike size={16} style={{marginRight: "3px"}}/>
                    <h2>{dislike}</h2>
                </div>
                <div className="reactions__comment">
                    <FaRegComment size={16} style={{marginRight: "3px"}}/>
                    <h2>Comentar</h2>
                </div>
                <div className="reactions__share">
                    <CiShare2 size={16} style={{marginRight: "3px"}}/>
                    <h2>Compartir</h2>
                </div>
            </div>
        </>
    );
}

export default Reactions;