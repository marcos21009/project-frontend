import Route from 'vue-routisan'

// Define path where your views are stored
Route.setViewResolver(component => require('src/layouts/' + component).default)

/*=============== Route Redirects ===========================*/
Route.redirect('/', '/inicio');

/*===================== Routes ============================*/
/*Pages*/
Route.view('/', 'master')
  .children(() => {
      Route.view('/inicio', 'pages/1').options({
        name: 'home'
      })
      Route.view('/nosotros', 'pages/Index').options({
        name: 'nosotros'
      })
      Route.view('/servicios', 'pages/Index').options({
        name: 'servicios'
      })
      Route.view('/blog', 'pages/Index').options({
        name: 'blog'
      })
      Route.view('/contacto', 'pages/Index').options({
        name: 'contacto'
      })
      Route.view('/Solicita-tu-Cotización', 'pages/Index').options({
        name: 'cotizacion'
      })
    }
  )

/*Categories*/
Route.view('/productos', 'master')
  .children(() => {
    Route.view('/', 'iblog/index').options({
      name: 'productos'
    }).children(() => {
      Route.view('/show', 'iblog/show').options({
        name: 'show'
      })
    })
  })

Route.view('*', 'pages/404')//Route error 404

export default Route.all()
