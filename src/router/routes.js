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
 //.guard(auth)
  .children(() => {
      Route.view('/', 'pages/1').name('dashboard')
    }
  )

/*Pages*/
Route.view('/products', 'master')
//.guard(auth)
  .children(() => {
      Route.view('/index','inventory/products/index' ).name('product.index')
    }
  )

Route.view('*', 'pages/404')//Route error 404

export default Route.all()
