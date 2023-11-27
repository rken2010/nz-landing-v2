import styles from './page.module.css'
import Inicio from './components/Home/Home'
import Services from './components/Service/Services'

export default function Home() {
  return (
    <main className={styles.main}>
      <Inicio/>
      <Services />
    </main>
  )
}
