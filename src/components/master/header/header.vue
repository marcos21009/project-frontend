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

          <q-btn-dropdown
    color="white"
    flat
    icon="fas fa-user-circle"
    id="user-dropdown"
  >
    <q-list>

      <q-item tag="label" to="/">
        <q-item-side>
          <img src="../../../assets/image/logo.png" width="32px" style="border-radius: 100%">
        </q-item-side>
        <q-item-main>
          <q-item-tile tag="a"
                       color="tertiary"
                       style="text-decoration: none">
            Profile
          </q-item-tile>
        </q-item-main>
      </q-item>


      <q-item tag="label" link to="/">
        <q-item-side>
          <q-icon color="negative" name="fas fa-sign-out-alt" size="25px"></q-icon>
        </q-item-side>
        <q-item-main>
          <q-item-tile tag="a"
                       color="tertiary"
                       style="text-decoration: none">
            Sign out
          </q-item-tile>
        </q-item-main>
      </q-item>

    </q-list>
  </q-btn-dropdown>
       
      </q-toolbar>

    </q-layout-header>

    <!-- === MENU === -->
    <q-layout-drawer class="no-shadow"
                     content-class="bg-white"
                     v-model="leftDrawerOpen"
                    width="250"
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

  export default {
    props: {},
    components: {
      informationHeader,
      searchComponent,
      menuDesktop,
      menuMobile,
      menuMaster
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {
        leftDrawerOpen: true,
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
