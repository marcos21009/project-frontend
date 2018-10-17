<template>
  <div id="menu">
    <q-layout container style="height: 100vh;">
      <q-layout-header class="shadow-3 text-center q-py-md bg-primary">
        <!-- === LOGO === -->
        <router-link to="/" class="text-white " style="text-decoration: none">
    
    <div class="q-title text-bold">AGROCONT</div>

        </router-link>
      </q-layout-header>

      <q-scroll-area
              style="height: 100vh;"
              :thumb-style="{
    right: '4px',
    borderRadius: '5px',
    background: 'rgba(187, 187, 187)',
    opacity: 0.4,
    width: '7px',
  }"
              :delay="1500"
      >
        <!--= Content Menu =-->
        <q-page-container >
          <!--= MENU =-->
          <q-list id="list_menu" class=" q-py-none">
            <q-list-header>Navegacion</q-list-header>
            <q-item to="/inicio" >
              <q-item-side icon="home" />
              <q-item-main label="Inicio" />

            </q-item>

            <q-collapsible icon="fas fa-cubes" label="Inventario">

              <q-item to="/contacto" >
                <q-item-side icon="fas fa-cube" />
                <q-item-main label="Productos" />

              </q-item>
              <q-item to="/servicios" >
                <q-item                               -side icon="fas fa-warehouse" />
                <q-item-main label="Bodegas" />

              </q-item>

            </q-collapsible>

            <q-collapsible icon="far fa-credit-card" label="Compras">

              <q-item to="/contacto" >
                <q-item-side icon="far fa-list-alt" />
                <q-item-main label="Listar" />

              </q-item>

              <q-item to="/servicios" >
                <q-item-side icon="fas fa-cart-plus" />
                <q-item-main label="Pedidos" />

              </q-item>

              <q-item to="/servicios" >
                <q-item-side icon="fas fa-handshake" />
                <q-item-main label="Proveedores" />

              </q-item>

            </q-collapsible>

            <q-item to="/nosotros">
              <q-item-side icon="fas fa-tasks" />
              <q-item-main label="Tareas" />
              <q-item-side right >
                <q-chip color="green-4" dense>
                  2
                </q-chip>
              </q-item-side>
            </q-item>

            <q-collapsible icon="fas fa-dollar-sign" label="Ventas">
              <q-item to="/servicios" >
                <q-item-side icon="far fa-list-alt" />
                <q-item-main label="Listar" />

              </q-item>
              <q-item to="/contacto" >
                <q-item-side icon="fas fa-warehouse" />
                <q-item-main label="Bodegas" />

              </q-item>

              <q-item to="/servicios" >
                <q-item-side icon="fas fa-users" />
                <q-item-main label="Clientes" />

              </q-item>

            </q-collapsible>
            <q-item to="/blog">
              <q-item-side icon="fas fa-users-cog" />
              <q-item-main label="Empleados"/>
              <q-item-side right >
                <q-chip color="red-12" dense>
                  NEW
                </q-chip>
              </q-item-side>
            </q-item>

          </q-list>
          <information-component></information-component>
        </q-page-container>

        <q-layout-footer id="footer" class="no-shadow">
          <!--= Information =-->

        </q-layout-footer>
      </q-scroll-area>

    </q-layout>
  </div>
</template>
<script>
  /*Components*/
  import informationComponent from 'src/components/master/header/information'

  /*Config*/
  import Config from 'src/config/index'
  import _cloneDeep from 'lodash.clonedeep'

  /*Services*/
  import menuService from 'src/services/menu'

  export default {
    props: {},
    components: {
      informationComponent
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
        //this.getData()
      })
    },
    data() {
      return {
        sidebar: [],
      }
    },
    methods: {
      /*Request Menu*/
      getData(){
        menuService.index().then((menu) => {
          this.renderMenu(menu.data)
        })
      },

      /*Chech if hasacces item menu*/
      async renderMenu(dataMenu) {
        //Function recursive for validate permissions
        let hasAccess = async (data) => {
          for (var item in data) {
            let itemAccess = data[item]

            itemAccess.can = true
            if (itemAccess.children) {
              itemAccess.children = await hasAccess(itemAccess.children)
            }
          }
          return data//Return all data
        }

        this.sidebar = await hasAccess(dataMenu)
      },
    }

  }
</script>
<style lang="stylus">
  @import "~variables";
  #menu
    .q-layout-header
      min-height auto
      height auto
    #list_menu
      .q-item-side
        text-align center
      .q-item-label
        font-size 15px
      .q-icon
        color $grey-10
    .q-chip-dense 
      .q-chip-main
        padding 4px !important

</style> 
