import * as React from 'react';
import styles from "./formContact.module.css"
import Image from 'next/image';


export interface IAppProps {
}

export function FormContact (props: IAppProps) {
  return (
    <div className={styles.form__container}>
      <div>
        <Image width={240} height={470} src="/img/form-contact-img.png" alt="plant" className={styles.form__img}/>
      </div>
      <div>
        <form action="/rkenshin.2010@gmail.com" method="post" className={styles.form__content}>
          <h2>Contactenos</h2>
          <input type="text" name="nombre" id="nombre" className={styles.form__input} placeholder='Nombre'/>
          <input type="tel" name="telefono" id="telefono" className={styles.form__input} placeholder='Teléfono'/>
          <input type="email" name='email' id='email' className={styles.form__input}placeholder='Email'/>
          <button type="submit" value="Enviar" className={styles.form__bt}>Enviar</button>
        </form>
      </div>
    </div>
  );
}
