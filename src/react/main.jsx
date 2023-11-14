import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './header/header'
import Cont_genero from './Genero/Cont-genero';
import BarraBusqueda from './Busqueda/BarraBusqueda';
import Menu_autores from './Autores/Menu_autores';



ReactDOM.createRoot(document.getElementById('root')).render(    
  <React.StrictMode>
    <Menu />
    <BarraBusqueda/>  
    <Cont_genero />
    <Menu_autores/>
  </React.StrictMode>,
)
