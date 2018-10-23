import Route from 'vue-routisan'
import auth from '@imagina/quser/_router/middlewares/auth' //Middleware auth
import access from '@imagina/quser/_router/middlewares/access' //Middleware access

/*VIEWS*/
import home from 'src/layouts/master'

import vueCrud from '@imagina/qcrud/_components/vueCrud'

/*CRUD CONFIGURATIONS*/
import * as lots from 'src/components/crud/lots'

/*Setup*/
Route.view('/lands', home)
  .guard(auth)
  .children(() => {
    Route.view('/lots', vueCrud).options({
    name: 'lands.lots',
    meta: {permission: 'agrocont.lots.index'},
    guard: access,
    props: (route) => { return { storeName: 'lots', singularName:'lot', parentId: route.params.parentId || null, ...lots, doPage: false } },
})

  })



export default Route.all()
