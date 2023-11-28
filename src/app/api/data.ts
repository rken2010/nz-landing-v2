interface contenidoCardProyect{
    icono:string,
    titulo:string,
    texto:string,
}


const proyecto:contenidoCardProyect[] = [
    {   
        icono:`<svg xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158" fill="none">
        <g filter="url(#filter0_d_69_114)">
          <rect x="4" width="150" height="150" rx="30" fill="#636C71"/>
          <path d="M45.415 52.5112C43.8539 42.2106 51.1225 32.9425 62.2261 29.5418C64.1976 28.9384 66.3251 29.1098 68.1745 30.0212C70.0239 30.9326 71.4559 32.5152 72.1784 34.4462L75.739 43.9519C76.3114 45.481 76.4141 47.1462 76.0337 48.734C75.6534 50.3218 74.8074 51.7598 73.6043 52.8635L63.0128 62.5782C62.4905 63.0581 62.1012 63.665 61.8829 64.3399C61.6647 65.0148 61.6248 65.7348 61.7672 66.4296L61.8615 66.8558L62.1237 67.9251C62.3572 68.8266 62.7096 70.0967 63.2054 71.6127C64.1887 74.6242 65.758 78.6723 68.0934 82.7164C70.4289 86.7604 73.1495 90.1447 75.2637 92.5007C76.3648 93.7273 77.5157 94.9084 78.7136 96.0407L79.0414 96.3439C79.5712 96.8131 80.2134 97.1371 80.9056 97.2843C81.5978 97.4315 82.3163 97.3969 82.9912 97.1839L96.7007 92.8694C98.2583 92.3798 99.9268 92.3666 101.492 92.8317C103.057 93.2967 104.448 94.2187 105.485 95.4794L111.971 103.354C114.675 106.632 114.356 111.451 111.246 114.347C102.748 122.267 91.0628 123.894 82.9338 117.355C72.9698 109.318 64.5698 99.517 58.1534 88.4403C51.684 77.3708 47.3622 65.1837 45.415 52.5112ZM70.351 66.9705L79.1438 58.907C81.5501 56.6995 83.242 53.8236 84.0027 50.648C84.7634 47.4724 84.5581 44.142 83.4132 41.0838L79.8486 31.5781C78.3943 27.6944 75.5137 24.5115 71.7938 22.6783C68.074 20.845 63.795 20.4994 59.8292 21.7119C46.0418 25.9321 34.971 38.2936 37.3146 53.7362C39.4165 67.4295 44.083 80.6032 51.0692 92.5662C57.9898 104.511 67.0496 115.081 77.7958 123.747C89.9852 133.539 106.268 130.2 116.835 120.346C119.858 117.528 121.693 113.662 121.965 109.538C122.237 105.414 120.925 101.341 118.297 98.1508L111.811 90.2758C109.736 87.7536 106.954 85.9091 103.823 84.979C100.692 84.049 97.3541 84.0757 94.2382 85.0559L82.8601 88.6369C82.3507 88.1131 81.8521 87.579 81.3646 87.0349C79.0262 84.4478 76.9573 81.6294 75.1899 78.6232C73.4694 75.589 72.0623 72.3875 70.9902 69.0683C70.7629 68.3735 70.5498 67.674 70.351 66.9705Z" fill="white"/>
        </g>
        <defs>
          <filter id="filter0_d_69_114" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_69_114"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_69_114" result="shape"/>
          </filter>
        </defs>
      </svg>`,
        titulo:"REUNION INICIAL",
        texto:"Recopilamos la información para el desarrollo del proyecto, como los objetivos del proyecto, el presupuesto disponible, las necesidades y preferencias del cliente."
    },
    {   
        icono:`<svg xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158" fill="none">
        <g filter="url(#filter0_d_69_130)">
          <rect x="4" width="150" height="150" rx="30" fill="#636C71"/>
          <path d="M47 113.42L48.4172 126L57.6005 117.273L73.3029 74.2067C69.4482 73.2433 66.0469 71.3167 63.2693 68.6533L47 113.42ZM94.6741 68.6533C91.8964 71.3167 88.4384 73.2433 84.6404 74.2067L100.343 117.273L109.526 126L111 113.42L94.6741 68.6533ZM95.9779 52.3333C95.9779 44.9667 91.2161 38.7333 84.6404 36.3533V24H73.3029V36.3533C66.7272 38.7333 61.9655 44.9667 61.9655 52.3333C61.9655 61.74 69.5616 69.3333 78.9717 69.3333C88.3818 69.3333 95.9779 61.74 95.9779 52.3333ZM78.9717 58C75.8539 58 73.3029 55.45 73.3029 52.3333C73.3029 49.2167 75.8539 46.6667 78.9717 46.6667C82.0895 46.6667 84.6404 49.2167 84.6404 52.3333C84.6404 55.45 82.0895 58 78.9717 58Z" fill="white"/>
        </g>
        <defs>
          <filter id="filter0_d_69_130" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_69_130"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_69_130" result="shape"/>
          </filter>
        </defs>
      </svg>`,
        titulo:"ESTUDIO PRELIMINAR",
        texto:" realizamos un análisis del entorno del proyecto, las normativas aplicables y las condiciones técnicas requeridas"
    },

]