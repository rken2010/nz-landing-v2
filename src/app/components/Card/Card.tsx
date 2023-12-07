import * as React from 'react';
import styles from './card.module.css'

export interface IAppProps {
  titulo:string,
  subtitulo:string,
  texto:string,
  img:string,
  alt:string,
  bg:string,
  bgBt:string,
}

export function Card (props: IAppProps) {
  return (
     <article className={styles.card__container} 
     style={{backgroundColor: `${props.bg}`}}>
      <div className={styles.card__img}>
       <img className={styles.card__img_img} src={props.img} alt={props.alt}/>
      </div>
      <div className={styles.card__footer}>
        <h3 className={styles.card__footer_title} style={{color:`${props.bgBt}`}}>{props.titulo} </h3>
        <h4 className={styles.card__footer_subtitle}>{props.subtitulo}</h4>
        <p className={styles.card__footer_txt}>{props.texto}</p>
      </div>
      <div>
        <button className={styles.card__bt} style={{backgroundColor: `${props.bgBt}`}}>
          Consulte!
        </button>
      </div>
      
    </article>
  );
}
