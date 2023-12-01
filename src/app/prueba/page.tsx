import React from 'react'
import Inicio from '../prueba/componentsPrueba/Inicio/Inicio'
import Beneficios from './componentsPrueba/Beneficios/Beneficios'
import "../globals.css"

type Props = {}

const Prueba = (props: Props) => {
  return (
    <div>
        <Inicio />
        <Beneficios />
    </div>
  )
}

export default Prueba