<template>
  <div id="productosComponent" :class="this.$q.platform.is.desktop ? 'desktop' : 'mobile'">
    <div class="q-container full-height">
      <div class="row full-height">
        <div class="block col-12 col-lg-5 offset-lg-7 self-center">
          <h4 class="q-ma-none">PRODUCTOS</h4>

          <p>
            Avance tecnológico Colombia cuenta con gran variedad
            de pro-ductos tanto de citofonìa telefonía cableado
            estructurado control de acceso.
          </p>

          <q-list>
            <q-item link>
              <q-item-side icon="fas fa-check-circle" color="white"/>
              <q-item-main>Domotíca</q-item-main>
            </q-item>
            <q-item link>
              <q-item-side icon="fas fa-check-circle" color="white"/>
              <q-item-main>Iluminación LED</q-item-main>
            </q-item>
            <q-item link>
              <q-item-side icon="fas fa-check-circle" color="white"/>
              <q-item-main>Camaras de Seguridad</q-item-main>
            </q-item>
            <q-item link>
              <q-item-side icon="fas fa-check-circle" color="white"/>
              <q-item-main>Citofonia</q-item-main>
            </q-item>
            <q-item link>
              <q-item-side icon="fas fa-check-circle" color="white"/>
              <q-item-main>Control de Acceso</q-item-main>
            </q-item>
            <q-item link>
              <q-item-side icon="fas fa-check-circle" color="white"/>
              <q-item-main>Cableado Estructurado</q-item-main>
            </q-item>
            <q-item link>
              <q-item-side icon="fas fa-check-circle" color="white"/>
              <q-item-main>Telefonía</q-item-main>
            </q-item>
          </q-list>

          <q-btn label="Ver más"
                 color="white" rounded
                 icon-right="fas fa-arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {alert} from '@imagina/qhelper/_plugins/alert'

  export default {
    props: {},
    components: {},
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {}
    },
    methods: { }

  }
</script>
<style lang="stylus">
  @import "~variables";
  #productosComponent
    width 100%
    background-image url('/assets/image/home-bloque-productos.jpg')
    background-color $primary
    background-position: left;
    background-repeat: no-repeat;
    background-size 50%
    &.desktop
      height 610px
    &.mobile
      background-size 50% 100%
    @media screen and (max-width: $breakpoint-md)
      background-image none
    .block
      padding 40px 0
      &:first-child
        color white
        p
          margin 20px  0
          text-align justify
          line-height 1.6
          @media screen and (max-width: $breakpoint-lg)
            margin 10px 0
        .q-list
          border 0
          padding-left 25px
          margin-bottom 20px
          .q-item
            padding 5px 16px
            height 35px !important
            min-height auto
            .q-item-side
              .q-icon
                font-size 19px
        .q-btn
          text-transform none
          color $primary !important
          font-weight bold
          .q-focus-helper
            display none !important
          &:hover
            background $secondary !important
            .content
              .img
                background-image none !important
                background-color $secondary !important
                content "TEST"
</style>
