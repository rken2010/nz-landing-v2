import React from 'react'
import { Card } from '../Card/Card'
import styles from './service.module.css'

type Props = {
  servicios?:{
    titulo:string,
    subtitulo:string,
    texto:string,
    img:string,
    alt:string,
    bg:string,
    bgBt:string
  }[];
}

`use client`

export default function Services(props: Props) {
  const servicios = props.servicios ?? [];
  return (
    <section className={styles.service__container}>
      <h2 className={styles.service__container_title}>Ofrecemos nuestros servicios para ayudarte a construir el hogar de tus sueños.</h2>
      <div className={styles.service__container_card}>
      {servicios.map((servicios) => (
        <Card 
          titulo={servicios.titulo}
          subtitulo={servicios.subtitulo}
          texto={servicios.texto}
          img= {servicios.img}
          alt= {servicios.alt}
          bg={servicios.bg}
          bgBt={servicios.bgBt}
          />
      ))}
      </div>
    </section>
  )
}