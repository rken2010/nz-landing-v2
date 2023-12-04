import React from 'react'
import Inicio from '../prueba/componentsPrueba/Inicio/Inicio'
import Beneficios from './componentsPrueba/Beneficios/Beneficios'
import Services from '../components/Service/Services'
import "../globals.css"
import api from '../api/data'
import Contact from '../components/Contact/Contact'



const Prueba = () => {
  return (
    <div>
        <Inicio />
        <Beneficios beneficios ={api.beneficios}/>
        <Services servicios= {api.servicios} />
        <Contact />
    </div>
  )
}

export default Prueba