import React from 'react'
import styles from "./cardBen.module.css"

type Props = {
    icono:string,
    titulo:string,
    texto:string,
}

function CardBen({icono, titulo, texto}: Props) {
  return (
    <article className={styles.container}>
        <div className={styles.icon}>
        <img className={styles.icon_img} src={icono} alt={titulo}/>
        </div>
        <div className={styles.title}>
            <h2>{titulo}</h2>
        </div>
        <div className={styles.text}>{texto}</div>
        

    </article>
  )
}

export default CardBen