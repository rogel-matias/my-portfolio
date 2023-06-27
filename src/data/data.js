const ICONS = {
  github: 'src/assets/rrss/github.svg',
  linkedin: 'src/assets/rrss/linkedin.svg',
  whatsapp: 'src/assets/rrss/whatsapp.svg',
  javascript: 'src/assets/rrss/javascript.svg',
  react: 'src/assets/rrss/react.svg',
  sass: 'src/assets/rrss/sass.svg',
  html: 'src/assets/rrss/html5.svg',
  css: 'src/assets/rrss/css3.svg',
  bootstrap: 'src/assets/rrss/bootstrap.svg',
  fire: 'src/assets/rrss/fire.svg',
}


export const data = {
  projects: [
    {
      id: 1,
      title: 'Tu Giffy',
      img: '/src/assets/projects/tu-giffy.png',
      description: {
        text: 'Buscador de gifs con register/login, opción de añadir favoritos, clasificar por edad y revisar tendencias. Para esto me he servido de la API de Giphy',
        icons: [
        ]
      },
      url: {
        github: '',
        deploy: ''
      }
    },
    {
      id: 2,
      title: 'El Tente',
      img: 'src/assets/projects/el-tente.png',
      description: {
        text: 'Mi primer proyecto profesional para un cliente dedicado a una empresa de branding, fotografía, diseño y video. Web con formulario manejado con Formik y enviado partir del servicio Email JS.',
        icons: []
      },
      url: {
        deploy: 'www.eltente.com'
      }
    },
    {
      id: 3,
      title: 'Tu Tabaco',
      img: 'src/assets/projects/tu-tabaco.png',
      description: {
        text: 'E-commerce tabaquería estilado con la librería Tailwind CSS. Contiene manejo de base de datos a partir de Firebase, carrito de compras, clasificación de mercadería, manejo de stock y más.',
        icons: []
      },
      url: {
        github: '',
        deploy: ''
      }
    },
    {
      id: 4,
      title: 'Open Drink Store',
      img: 'src/assets/projects/open-drink-store.png',
      description: {
        text: 'E-commerce de bebidas realizado con Javascript Vanilla. Contiene carrito de compras, posibilidad de eliminar productos del mismo, manejo de stock, etc.',
        icons: []
      },
      url: {
        github: '',
        deploy: ''
      }
    },
    {
      id: 5,
      title: 'Joyeria Gold',
      img: '../src/assets/projects/joyeria-gold.png',
      description: {
        text: 'Web estática de tienda de joyerías realizada con HTML y SASS. Fué mi primer proyecto como developer donde entendí que comenzaba la pasión.',
        icons: []
      },
      url: {
        github: '',
        deploy: ''
      }
    },
  ]
}
