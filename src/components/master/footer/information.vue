<template>
  <div id="informationFooter" class="bg-grey-12 q-py-xl">
    <div class="row q-container full-height">
      <!--= Logo =-->
      <div class="col-12 col-md-4">
        <div class="text-center desktop-only" style="margin-bottom: 45px">
         <!-- <img src="../../../assets/image/logo-white.png">-->
        </div>
        <p class="q-mb-none">
          Avance Tecnológico Colombia es una empresa en
          la logística en tecnologías de la información
          prestando sus servicios con técnicos profesionalmente
          capacitados a la vanguardia de la tecnología.
        </p>
      </div>

      <div class="col-12 col-md-2"></div>

      <!--= Menu =-->
      <div class="col-12 col-md-2 desktop-only">
        <span class="text-weight-bold" style="font-size: 18px">Menú</span>
        <q-list no-border link inset-delimiter class="q-pa-none q-pt-sm">
          <q-item link :to="{name : item.to}" :key="index"
                  v-for="(item, index) in sidebar">
            <q-item-side icon="fas fa-angle-right"/>
            <q-item-main>{{item.title}}</q-item-main>
          </q-item>
        </q-list>
      </div>

      <div class="col-12 col-md-1"></div>

      <!--= Contacto =-->
      <div class="contacto col-12 col-md-3">
        <span class="text-weight-bold desktop-only"
              style="font-size: 18px">
          Contacto
        </span>

        <div class="block">
          <q-icon name="fas fa-home"></q-icon>
          Calle 151 # 115-28
          <div>Bogotá - Colombia</div>
        </div>

        <div class="block">
          <q-icon name="fas fa-phone"></q-icon>
          4885219 <span class="mobile-only">-</span>
          <div>314 339 5731 - 317 432 0413</div>
        </div>

        <div class="block">
          <q-icon name="fas fa-envelope"></q-icon>
          atcolombiahb@gmail.com
        </div>

        <!-- Redes Sociales -->
        <div class="block">
          <q-icon name="fab fa-facebook"></q-icon>
          <q-icon name="fab fa-twitter"></q-icon>
          <q-icon name="fab fa-instagram"></q-icon>
          <q-icon name="fab fa-youtube"></q-icon>
          <q-icon name="fab fa-whatsapp"></q-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /*Config*/
  import Config from 'src/config/index'
  import _cloneDeep from 'lodash.clonedeep'

  export default {
    props: {},
    components: {},
    watch: {},
    mounted() {
      this.$nextTick(function () {
        let dataMenu = _cloneDeep(Config('sidebar'))
        this.renderMenu(dataMenu)
      })
    },
    data() {
      return {
        sidebar: [],
      }
    },
    methods: {
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
  #informationFooter
    color #DDDDDD
    min-height 365px
    p
      text-align justify
      line-height 1.4
    .q-item
      padding 0
      .q-item-side
        min-width auto
      .q-item-main
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      &:hover
        .q-item-side
          color $grey-12
      &:first-child
        display none
    .router-link-active
      .q-item-side
        color $grey-12
        padding-left 15px

    .contacto
      .q-icon
        margin-right 10px
      .block
        margin-top 28px
        div
          margin 6px 0 0 33px
          @media screen and (max-width: $breakpoint-md)
            margin 0
            display inline-block
        &:first-of-type
          margin-top 35px !important
        &:last-of-type
          .q-icon
            margin-right 30px
        @media screen and (max-width: $breakpoint-md)
          margin-top 10px !important
    @media screen and (max-width: $breakpoint-md)
      min-height auto
      padding 20px 0
</style>
