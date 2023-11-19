import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header/Header'
import MenuGeneros from './components/generos/MenuGeneros'
import MenuAutores from './components/autores/MenuAutores'
import BarraBusqueda from './components/barraBusqueda/BarraBusqueda'
import Publicacion from './components/publicacion/Publicacion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BarraBusqueda />
    <MenuGeneros />
    <MenuAutores />    
    <div className="main__resenas">
      <Publicacion />      
      <Publicacion />
      <Publicacion />
    </div>    
  </React.StrictMode>,
)
