import styles from './page.module.css'
import Inicio from './components/Home/Home'
import Services from './components/Service/Services'
import ProyectSection from "./components/ProyectSection/ProyectSection"
import Contact from './components/Contact/Contact'

export default function Home() {
  return (
    <main className={styles.main}>
      <Inicio/>
      <Services />
      <ProyectSection />
      <Contact />
    </main>
  )
}
