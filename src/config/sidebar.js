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
  /*User*/
user: {
  title: 'Users',
  icon: 'fas fa-users',
  children: [
    {
      title: 'Create',
      icon: 'fas fa-user-plus',
      to: 'user.users.create',
      can:'user.users.create'
    },
    {
      title: 'List/Search',
      icon: 'fas fa-list-alt',
      to: 'user.users.index',
      can:'user.users.index'
    },
    {
      title: 'My profile',
      icon: 'fas fa-user-tie',
      to: 'user.profile.me'
    },
    {
      title: 'Departments',
      icon: 'fas fa-cube',
      to: 'user.department'
    }
  ]
},
/*logout*/
logout: {
  title: 'Sign out',
  icon: 'fas fa-sign-out-alt',
  to: 'auth.logout'
}
}
