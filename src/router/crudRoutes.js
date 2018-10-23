import Route from 'vue-routisan'
import user from '@imagina/quser/_router/routes' //Routes module
import auth from '@imagina/quser/_router/middlewares/auth' //Middleware auth
import access from '@imagina/quser/_router/middlewares/access' //Middleware access
import vueCrud from '@imagina/qcrud/_components/vueCrud'

/*CRUD CONFIGURATIONS*/
import * as lots from 'src/components/crud/lots'

Route.view('/lands/lots', vueCrud).options({
    name: 'lands.lots',
    meta: {permission: 'agrocont.lots.index'},
    guard: access,
    props: (route) => { return { storeName: 'lots', singularName:'lot', parentId: route.params.parentId || null, ...lots, doPage: false } },
})

export default Route.all()
