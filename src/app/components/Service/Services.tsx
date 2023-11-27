import React from 'react'
import { Card } from '../Card/Card'
import styles from './service.module.css'

type Props = {}

`use client`

export default function Services({}: Props) {
  return (
    <section className={styles.service__container}>
        <Card image="img/planos-header.png" alt='image'/>
        <Card image="img/card-img.png" alt='image'/>
        <Card image="img/card-img.png" alt='image'/>
    </section>
  )
}