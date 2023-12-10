import React from 'react'
import styles from "./inicio.module.css"

type Props = {}

export default function Inicio({}: Props) {
  return (
    <section className={styles.home__container}>
      <h2 className={styles.home__title}>Tu <span className={styles.home__txt}>hogar</span>, tu <span className={styles.home__txt}>refugio</span></h2>
      <h3 className={styles.home__subtitle}>Nosotros lo hacemos <span className={styles.home__txt}>REALIDAD</span></h3>
    </section>
  )
}