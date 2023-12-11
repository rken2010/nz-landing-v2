import * as React from 'react';
import './card.css';

export interface IAppProps {
  titulo:string,
  subtitulo:string,
  texto:string,
  img:string,
  alt:string,
  classStyle:string,
}

export function Card (props: IAppProps) {
  return (
     <article className={`card__container ${props.classStyle}`}>
      <div className="card__img">
       <img className="card__img_img" src={props.img} alt={props.alt}/>
      </div>
      <div className="card__footer">
        <h3 className="card__footer_title">{props.titulo} </h3>
        <h4 className="card__footer_subtitle">{props.subtitulo}</h4>
        <p className="card__footer_txt">{props.texto}</p>
      </div>
      <div>
        <a className="card__bt" href='#contact'>
          Consulte!
        </a>
      </div>
      
    </article>
  );
}
