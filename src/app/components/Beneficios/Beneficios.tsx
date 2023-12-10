import React from 'react';
import CardBen from '../CardBen/CardBen';
import styles from "./beneficios.module.css"

interface Props {
  beneficios?: {
    icono: string;
    titulo: string;
    texto: string;
  }[];
}

function Beneficios(props: Props) {
  const beneficios = props.beneficios ?? [];

  return (
    <section className={styles.ben__container}>
      
      {beneficios.map((beneficio) => (
        <CardBen
          icono={beneficio.icono}
          titulo={beneficio.titulo}
          texto={beneficio.texto}
          key={beneficio.titulo}
        />
      ))}
    </section>
  );
}

export default Beneficios;
