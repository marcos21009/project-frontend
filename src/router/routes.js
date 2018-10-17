import Route from 'vue-routisan'
import user from '@imagina/quser/_router/routes' //Routes module
import auth from '@imagina/quser/_router/middlewares/auth' //Middleware auth
import access from '@imagina/quser/_router/middlewares/access' //Middleware access

// Define path where your views are stored
Route.setViewResolver(component => require('src/layouts/' + component).default)

/*=============== Route Redirects ===========================*/
Route.redirect('/', '/dashboard');

/*===================== Routes ============================*/
/*Home*/
Route.view('/dashboard', 'master')
  .guard(auth)
  .children(() => {
      Route.view('/', 'pages/1').name('dashboard')
    }
  )

/*Pages*/
Route.view('/products', 'master')
.guard(auth)
  .children(() => {
      Route.view('/nosotros', 'pages/Index').options({
        name: 'nosotros',
        guard:access
      })
      Route.view('/servicios', 'pages/Index').options({
        name: 'servicios',
        guard:access
      })
      Route.view('/blog', 'pages/Index').options({
        name: 'blog',
        guard:access
      })
      Route.view('/contacto', 'pages/Index').options({
        name: 'contacto',
        guard:access
      })
      Route.view('/Solicita-tu-Cotización', 'pages/Index').options({
        name: 'cotizacion',
        guard:access
      })
    }
  )

/*Categories*/
Route.view('/productos', 'master')
.guard(auth)
  .children(() => {
    Route.view('/', 'iblog/index').options({
      name: 'productos',
      guard:access
    }).children(() => {
      Route.view('/show', 'iblog/show').options({
        name: 'show',
        guard:access
      })
    })
  })

Route.view('*', 'pages/404')//Route error 404

export default Route.all()
