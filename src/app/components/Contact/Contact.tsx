import React from 'react'
import { FormContact } from '../Form/FormContact'
import styles from "./contact.module.css"

type Props = {}

export default function Contact({}: Props) {
  return (
    <section className={styles.contact__container}>
        <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.form__contact}>
        <FormContact />
        </div>
        
    </section>
  )
}