import * as React from 'react';
import {ProyectCard} from "../ProyectCard/ProyectCard"
import styles from "./proyectSection.module.css"

export interface IAppProps {
}

export default function ProyectSection (props: IAppProps) {
  return (
    <section className={styles.proyect__container}>
      <h2>PROYECTOS</h2>
      <h3>Tus sueños hechos realidad, desde el diseño hasta la construcción</h3>
      <div className={styles.proyect__container_card}>
        <ProyectCard />
        <ProyectCard />
        <ProyectCard />
        <ProyectCard />
        <ProyectCard />
      </div>
    </section>
  );
}
