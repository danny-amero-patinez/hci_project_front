import "./InfoLibro.css";

function InfoLibro(props){
    const {urlImg, nombreLibro, nombreAutor, editorial} = props;
    return (
        <>
            <div className="infoLibro">
                <div className="infoLibro__info">
                    <h2>{nombreLibro}</h2>
                    <h3>{nombreAutor}</h3>
                    <h4>{editorial}</h4>
                </div>
                <div className="infoLibro__foto">
                    <img src={urlImg} alt={nombreLibro} />
                </div>
            </div>
        </>
    );
}

export default InfoLibro;