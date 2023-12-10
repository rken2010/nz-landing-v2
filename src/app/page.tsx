
import Inicio from './components/Inicio/Inicio'
import Services from './components/Service/Services'
import Contact from './components/Contact/Contact'
import Beneficios from './components/Beneficios/Beneficios'
import api from './api/data'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <main>
    <Inicio />
    <Beneficios beneficios ={api.beneficios}/>
    <Services servicios= {api.servicios} />
    <Contact />
    <Footer 
      
      logo={api.footer.logo}
      
    
    />
    </main>
  )
}
