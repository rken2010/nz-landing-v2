import React from 'react'
import { FormContact } from '../Form/FormContact'
import styles from "./contact.module.css"
import "./redes.css"

type Props = {}

export default function Contact({}: Props) {
  return (
    <section className={styles.contact__container}>
        <article>
            <h2>Estos son nuestros medios de contacto</h2>

        <div className="redesBar">
<ul className="wrapper">
    <li className="icon instagram">
      <span className="tooltip">Instagram</span>
      <span >
        <a href="https://www.instagram.com/" target="_blank" >
        <i className="fi fi-brands-instagram"></i>
        </a>
      </span>
    </li>
  
    <li className="icon mail">
      <span className="tooltip">Mail</span>
      <span>
        <a href="mailto:@gmail.com" target="_blank">
        <i className="fi fi-br-envelope"></i>
        </a>
        </span>
    </li>
    <li className="icon whatsapp">
      <span className="tooltip">WhatsApp</span>
      <span>
        <a href="#" target="_blank">
        <i className="fi fi-brands-whatsapp"></i>
         </a>
         </span>
    </li>
</ul>
</div>

        </article>
        <div className={styles.form__contact}>
        <FormContact />
        </div>
        
    </section>
  )
}