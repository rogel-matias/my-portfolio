const ICONS = {
  github: {
    svg: 'src/public/assets/rrss/svg/github.svg',
    alt: 'github'
  },
  linkedin: {
    svg: 'src/public/assets/rrss/svg/linkedin.svg',
    alt: 'linkedin'
  },
  whatsapp: {
    svg: 'src/public/assets/rrss/svg/whatsapp.svg',
    alt: 'whatsapp'
  },
  javascript: {
    svg: 'src/public/assets/rrss/svg/javascript.svg',
    alt: 'javascript'
  },
  react: {
    svg: 'src/public/assets/rrss/svg/react.svg',
    alt: 'react'
  },
  sass: {
    svg: 'src/public/assets/rrss/svg/sass.svg',
    alt: 'sass'
  },
  html: {
    svg: 'src/public/assets/rrss/svg/html5.svg',
    alt: 'html5'
  },
  css: {
    svg: 'src/public/assets/rrss/svg/css3.svg',
    alt: 'css3'
  },
  bootstrap: {
    svg: 'src/public/assets/rrss/svg/bootstrap.svg',
    alt: 'bootstrap'
  },
  fire: {
    svg: 'src/public/assets/rrss/svg/fire.svg',
    alt: 'fire'
  },
}


export const data = {
  projects: [
    {
      id: 1,
      title: 'Tu Giffy',
      img: '/assets/projects/tu-giffy.webp',
      description: {
        text: 'Web buscador de gifs con register/login, función de añadir favoritos, clasificar por edad y revisar tendencias. Para esto me he servido de la API de Giphy. Algunas dependencias: React Helmet, Formik, Wouter.',
        icons: [
          ICONS.html,
          ICONS.css,
          ICONS.react,
          ICONS.fire,
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
      img: '/assets/projects/el-tente.webp',
      description: {
        text: 'Mi primer proyecto profesional para un cliente dedicado a una empresa de branding, fotografía, diseño y video. Contiene formulario manejado con Formik y enviado partir del servicio Email JS, React Helmet, Toastify, etc.',
        icons: [
          ICONS.html,
          ICONS.sass,
          ICONS.react,
        ]
      },
      url: {
        deploy: 'www.eltente.com'
      }
    },
    {
      id: 3,
      title: 'Tu Tabaco',
      img: '/assets/projects/tu-tabaco.webp',
      description: {
        text: 'E-commerce tabaquería estilado con la librería Tailwind CSS. Contiene manejo de base de datos a partir de Firebase, carrito de compras, clasificación de mercadería, manejo de stock y más.',
        icons: [
          ICONS.html,
          ICONS.css,
          ICONS.react,
          ICONS.fire,
        ]
      },
      url: {
        github: '',
        deploy: ''
      }
    },
    {
      id: 4,
      title: 'Open Drink Store',
      img: '/assets/projects/open-drink-store.webp',
      description: {
        text: 'E-commerce de bebidas realizado con HTML, CSS, Javascript Vanilla y LocalStorage para el guardado de datos. Contiene carrito de compras, posibilidad de eliminar productos del mismo, manejo de stock y demás característica.',
        icons: [
          ICONS.html,
          ICONS.css,
          ICONS.react,
        ]
      },
      url: {
        github: '',
        deploy: ''
      }
    },
    {
      id: 5,
      title: 'Joyeria Gold',
      img: '/assets/projects/joyeria-gold.webp',
      description: {
        text: 'Web estática de tienda de joyerías realizada con HTML y SASS. Fué mi primer proyecto como developer donde entendí que comenzaba la pasión.',
        icons: [
          ICONS.html,
          ICONS.sass,
          ICONS.bootstrap,
        ]
      },
      url: {
        github: '',
        deploy: ''
      }
    },
  ]
}
