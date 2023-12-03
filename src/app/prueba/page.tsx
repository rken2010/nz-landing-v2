import React from 'react'
import Inicio from '../prueba/componentsPrueba/Inicio/Inicio'
import Beneficios from './componentsPrueba/Beneficios/Beneficios'
import "../globals.css"
import api from '../api/data'



const Prueba = () => {
  return (
    <div>
        <Inicio />
        <Beneficios beneficios ={api.beneficios}/>
    </div>
  )
}

export default Prueba