/**
 * Config for items in Menu
 */

/*
*{
  title: 'Assignment',
  icon: 'fas fa-users-cog',
  to: 'user.users.assignment',
  can:'user.users.index'
},*/

export default {
  /*home*/
  inicio: {
    title: 'Inicio',
    icon: 'fas fa-home',
    to: 'home'
  },
  nosotros: {
    title: 'Nosotros',
    icon: 'fas fa-id-card-alt',
    to: 'nosotros'
  },
  productos: {
    title: 'Productos',
    icon: 'fas fa-sitemap',
    to: 'productos'
  },
  servicios: {
    title: 'Servicios',
    icon: 'fas fa-clipboard-list',
    to: 'servicios'
  },
  blog: {
    title: 'Blog',
    icon: 'fab fa-flipboard',
    to: 'blog'
  },
  contaco: {
    title: 'Contacto',
    icon: 'fas fa-phone-square',
    to: 'contacto',
    children:[
      {
        title: 'lv2',
        icon: 'fas fa-phone-square',
        to: 'contacto',
        children: [
          {
            title: 'lv3',
            icon: 'fas fa-phone-square',
            to: 'contacto',
          },{
            title: 'lv3.1',
            icon: 'fas fa-phone-square',
            to: 'contacto',
          },
        ]
      },
      {
        title: 'lv2.1',
        icon: 'fas fa-phone-square',
        to: 'contacto',
        children: [
          {
            title: 'lv3',
            icon: 'fas fa-phone-square',
            to: 'contacto',
          },{
            title: 'lv3.1',
            icon: 'fas fa-phone-square',
            to: 'contacto',
          },
        ]
      },
    ]
  },
  cotizacion : {
    title: 'Solicita Tu Cotización',
    icon: 'fas fa-bell',
    to: 'cotizacion'
  },
}
