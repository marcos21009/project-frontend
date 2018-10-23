<template>
  <div id="header">
    <q-layout-header class="shadow-3"  color="primary">
      <!--==== TOOLBAR FOR MOBILE ====-->
      <q-toolbar class="q-py-sm q-px-none q-pr-sm">
        <q-toolbar-title class="q-pa-none">
        <!--= BUTTON MENU =-->
        <q-btn flat 
               @click="leftDrawerOpen = !leftDrawerOpen"
               class="btn-menu float-left q-mx-sm q-px-sm"
               color="secondary"
               aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

 <!--= Search =-->
        <search-component class=""></search-component>
            <land-component></land-component>
    </q-toolbar-title>

        <!--= FULLSCREEN =-->
        <q-btn flat dense color="secondary" class="q-mx-xs"
               :icon="$q.fullscreen.isActive ? 'fas fa-compress' : 'fas fa-expand'"
               @click="toggleFullscreen()"></q-btn>

        <q-btn round outline class="q-mx-xs" size="sm" color="white" icon="fas fa-bell" >
          <q-chip floating round color="blue-14">4</q-chip>

        </q-btn>

         <q-btn round outline class="q-mx-xs" size="sm" color="white" icon="far fa-envelope" >
         <q-chip floating round color="red-12">2</q-chip>
        
        </q-btn>

       

        <q-btn round outline class="q-mx-xs" size="sm" color="white" icon="fas fa-cog" />

       <widget-user></widget-user>
       
      </q-toolbar>

    </q-layout-header>

    <!-- === MENU === -->
    <q-layout-drawer class="no-shadow"
                     content-class="bg-white"
                     v-model="leftDrawerOpen"
                    :width="250"
    >
      <!-- === MENU MOBILE === -->
      <menuMaster></menuMaster>

    </q-layout-drawer>
  </div>
</template>


<script>
  import menuDesktop from 'src/components/master/menu/menu-desktop'
  import menuMobile from 'src/components/master/menu/menu-mobile'
  import menuMaster from 'src/components/master/menu/menu'
  import informationHeader from 'src/components/master/header/information'
  import searchComponent from 'src/components/master/search'
  import WidgetUser from "@imagina/quser/_components/widget-user";
  import {authPlugin} from "@imagina/quser/_plugins/auth";
  import landComponent from "src/components/master/header/selectLand"
  export default {
    props: {},
    components: {
      informationHeader,
      searchComponent,
      menuDesktop,
      menuMobile,
      menuMaster,
      WidgetUser,
        landComponent
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {
        leftDrawerOpen: true,
        auth: require('@imagina/quser/_plugins/auth').default
      }
    },
    methods: {
      toggleFullscreen() {
        this.$q.fullscreen.toggle()
      },
    }

  }
</script>

<style lang="stylus">
  @import "~variables";
  #header
    .btn-menu
      i
        font-size 30px
</style>
