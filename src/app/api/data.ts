interface contenidoCardProyect{
    icono:string,
    titulo:string,
    texto:string,
}

interface beneficios{
  icono:string,
  titulo:string,
  texto:string,
}

interface servicios{
  titulo:string,
  subtitulo:string,
  texto:string
  img:string,
  alt:string,
  bg:string,
  bgBt:string
}

interface footer{
  titulo:string,
  bajada: string,
  logo:string
}

export const api ={
   proyecto: [
    {   
        icono:"",
        titulo:"REUNION INICIAL",
        texto:"Recopilamos la información para el desarrollo del proyecto, como los objetivos del proyecto, el presupuesto disponible, las necesidades y preferencias del cliente."
    },
    {   
        icono:"",
        titulo:"ESTUDIO PRELIMINAR",
        texto:" realizamos un análisis del entorno del proyecto, las normativas aplicables y las condiciones técnicas requeridas"
    }  
],
beneficios:[
  {
    icono:"./img/confianza-icono.png",
    titulo: "Confianza",
    texto:"Te garantizamos que tu proyecto estará en buenas manos. Contamos con un equipo de profesionales calificados y comprometidos."

  },
  {
    icono: "./img/gestion-icono.png",
    titulo: "Gestión",
    texto:"Nos encargamos de todo el proceso de construcción, desde la planificación hasta la entrega. Esto te permitirá ahorrar tiempo y estrés, para que te centres en lo que más importa: disfrutar de tu nuevo hogar. "

  },
  {
    icono: "./img/icono-casa.png",
    titulo: "Compromiso",
    texto:"Estamos comprometidos con la satisfacción de nuestros clientes. Por eso, nos aseguramos de cumplir con los plazos y presupuestos acordados, ofreciendo siempre un servicio de calidad."

  }
],

servicios:[


  {
    titulo:"Proyectos",
    subtitulo:"Llevamos tu espacio a la realidad",
    img:"./img/card-hab.png",
    alt:"proyecto-construccion",
    texto:"Nos encargamos de recopilar toda la información para cumplir con las necesidades del cliente. Apoyándonos en nuestro conocimiento técnico llevamos adelante el proyecto con profesionalismo. Contamos con los mejores profesionales para las tareas.",

    classStyle:"card__proyectos"

  },

  {
    titulo:"Planos y trámites",
    subtitulo:"Facilitamos tu vida",
    img:"./img/planos-header.png",
    alt:"planos-construccion",
    texto:"Realizamos planos municipales por obra nueva o hecho consumado, carpetas de obra completa (Plano de plantas y cortes, de estructura, de instalaciones: gas, eléctrico, agua y cloacas).Tramites de habilitaciones, revaluós y otros.",
    classStyle:"card__servicios"
  
  },
  {
    titulo:"Obras",
    subtitulo:"La construcción de tus sueños, a tu medida",
    img:"./img/card-img.png",
    alt:"tramites-construccion",
    texto:"Nos encargamos de todo el proceso de construcción organizando cada etapa. Trabajamos con materiales de alta calidad y mano de obra especializada en cada rubro. Garantizamos un resultado óptimo desde la planificación hasta la entrega de tu obra",
    classStyle:"card__tramites"
  },
 

],
footer:{
  logo:"/img/NZ.png"
}

}

export default api