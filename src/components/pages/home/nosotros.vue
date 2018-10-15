<template>
  <div id="nosotrosComponent" :class="this.$q.platform.is.desktop ? 'desktop' : 'mobile'">
    <div class="q-container full-height">
      <div class="row full-height">
        <div class="block col-12 col-lg-5 self-center">
          <h4 class="q-ma-none">NOSOTROS</h4>

          <p>
            Somos una empresa dedicada al diseño y gestión de soluciones integrales
            en telecomunicaciones, cableado estructurado sistemas de seguridad y
            telefonía digital. Es nuestro compromiso que al acercase a nosotros
            encuentre una alternativa de servicio adecuada a sus necesidades de
            tecnología soporte y a la medida de su presupuesto.
          </p>

          <q-btn label="Ver más"
                 color="secondary" rounded
                 icon-right="fas fa-arrow-right" />
        </div>
        <div class="block col-12 col-lg-4 offset-lg-3">
          <div class="row full-height">
            <div class="col-12 self-center">
              <q-icon name="fas fa-angle-double-down"></q-icon>
              <br>
              <q-btn label="SOLICITA AQUÍ TU COTIZACIÓN"
                     size="xl" outline />
              <br>
              <q-icon name="fas fa-angle-double-up"></q-icon>
            </div>
          </div>
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
    methods: {}

  }
</script>
<style lang="stylus">
  @import "~variables";
  #nosotrosComponent
    width 100%
    background-image url('/assets/image/home-bloque-nosotros.jpg')
    background-position: right;
    background-repeat: no-repeat;
    background-size 50%
    &.desktop
      height 510px
    &.mobile
      background-size 50% 100%
    @media screen and (max-width: $breakpoint-md)
      background-image none
    .block
      &:first-child
        color $grey-8
        padding 40px 0
        p
          margin 45px 0 75px 0
          text-align justify
          line-height 1.6
          @media screen and (max-width: $breakpoint-lg)
            margin 25px 0 35px 0
        .q-btn
          text-transform none
          .q-focus-helper
            display none !important
          &:hover
            background $primary !important
            .content
              .img
                background-image none !important
                background-color $secondary !important
                content "TEST"
        @media screen and (max-width: $breakpoint-md)
          padding 40px 0 10px 0
      &:last-child
        background-color #0078f0ba
        text-align center
        color white
        padding-bottom 40px !important
        .q-icon
          font-size 40px
          margin 35px 0
        .q-btn
          width 240px
          padding 15px
          border-radius 20px
          border-width 2px
        @media screen and (max-width: $breakpoint-md)
          padding 0 0 14px 0
          background-color transparent
          .q-icon
            display none
          .q-btn
            border-color $secondary
            color $secondary
            margin 0
            font-size 18px !important

</style>
