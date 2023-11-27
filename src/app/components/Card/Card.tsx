import * as React from 'react';
import styles from './card.module.css'

export interface IAppProps {
  image:string,
  alt:string,
}

export function Card (props: IAppProps) {
  return (
    <div className={styles.card__container}>
      <div className={styles.card__img}>
       <img className={styles.card__img} src={props.image} alt={props.alt}/>
      </div>
      <div className={styles.card__footer}>
        <h3>Planos </h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div>
        <button className={styles.card__bt}>
          Consulte!
        </button>
      </div>
      
    </div>
  );
}
