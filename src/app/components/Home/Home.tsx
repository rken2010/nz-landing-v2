import React from 'react'
import styles from './home.module.css'


type Props = {}

export default function Inicio({}: Props) {
  return (
    <section className={styles.homeContainer}>
          <h2 className={styles.title}>Tu hogar, tu refugio</h2>
          <h3 className={styles.subtitle}>Nosotros lo hacemos realidad</h3>
    </section>
  )
} 