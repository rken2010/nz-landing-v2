import * as React from 'react';
import styles from "./formContact.module.css"
import Image from 'next/image';


export interface IAppProps {
}

export function FormContact (props: IAppProps) {
  return (
    <div className={styles.form__container}>
      <div className={styles.form__container_img}>
        <Image width={100} height={150} src="/img/form-contact-img.png" alt="plant" className={styles.form__img}/>
      </div>
      <div>
        <form name="contact" className={styles.form__content} method="POST" data-netlify="true">
          <h2>O escribinos tu consulta</h2>
          <input type="text" name="nombre" id="nombre" className={styles.form__input} placeholder='Nombre' required/>
          <input type="tel" name="telefono" id="telefono" className={styles.form__input} placeholder='Teléfono' required/>
          <input type="email" name='email' id='email' className={styles.form__input}placeholder='Email' required/>
          <textarea cols={20} name="consulta" rows={5} placeholder='Dejanos tu consulta y te contestaremos a la brevedad'
            className={styles.form__textarea}
          />
          <button type="submit" value="Enviar" className={styles.form__bt}>Enviar</button>
        </form>
      </div>
    </div>
  );
}
