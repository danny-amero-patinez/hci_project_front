import { TextField } from "@mui/material";

function BarraBusqueda(){    
    const estilos = {
        with: "250px", height: "40px", marginTop: "28px"
    };

    return(
        <>  
            <TextField variant="standard" label = "Busqueda" style={estilos}/>
        </>
    )
}

export default BarraBusqueda;