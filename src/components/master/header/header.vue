<template>
  <div id="header">
    <q-layout-header class="no-shadow"  color="primary">
      <!--==== TOOLBAR FOR MOBILE ====-->
      <q-toolbar>
        <!--= BUTTON MENU =-->
        <q-btn flat dense round
               @click="leftDrawerOpen = !leftDrawerOpen"
               class="btn-menu mobile-only"
               color="secondary"
               aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <!--= LOGO =-->
        <q-toolbar-title :class="$q.platform.is.mobile ? 'text-center' : ''">
          <router-link :to="{ name: 'home'}">
            <a>
         <!--   <img src="../../../assets/image/logo.png" class="desktop-only">
              <img src="../../../assets/image/logo.png" class="mobile-only q-pt-sm" height="50px">
              -->
              AgroCont
            </a>
          </router-link>
        </q-toolbar-title>

        <!--= FULLSCREEN =-->
        <q-btn flat dense color="secondary"
               class="mobile-only"
               :icon="$q.fullscreen.isActive ? 'fas fa-compress' : 'fas fa-expand'"
               @click="toggleFullscreen()"></q-btn>

        <!--= Search =-->
        <search-component class="mobile-only"></search-component>
      </q-toolbar>

    </q-layout-header>

    <!-- === MENU === -->
    <q-layout-drawer class="mobile-only"
                     v-model="leftDrawerOpen"
                     :content-class="'bg-grey-2'"
    >
      <!-- === MENU MOBILE === -->
      <menu-mobile></menu-mobile>
    </q-layout-drawer>
  </div>
</template>


<script>
  import menuDesktop from 'src/components/master/menu/menu-desktop'
  import menuMobile from 'src/components/master/menu/menu-mobile'
  import informationHeader from 'src/components/master/header/information'
  import searchComponent from 'src/components/master/search'

  export default {
    props: {},
    components: {
      informationHeader,
      searchComponent,
      menuDesktop,
      menuMobile
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {
        leftDrawerOpen: false,
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
