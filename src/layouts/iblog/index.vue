<template>
  <div id="iblogIndex" :class="this.$q.platform.is.desktop ? 'desktop' : 'mobile'">
    <!--= BANNER =-->
    <banner-component></banner-component>

    <!--= CATEGORIES =-->
    <div class="q-container content">
      <div class="row gutter-md">

        <div class="col-12 col-md-6 col-lg-4">
          <div class="block"
               style="background-image: url('/assets/image/iblog/bg/domotica.jpg')">
            <div class="row overlay full-height text-center">
              <div class="col-12 self-center">Domotica</div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="block"
               style="background-image: url('/assets/image/iblog/bg/iluminacion-led.jpg')">
            <div class="row overlay full-height text-center">
              <div class="col-12 self-center">Iluminación LED</div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="block"
               style="background-image: url('/assets/image/iblog/bg/camaras-seguridad.jpg')">
            <div class="row overlay full-height text-center">
              <div class="col-12 self-center">Camaras de Seguridad</div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="block"
               style="background-image: url('/assets/image/iblog/bg/citofonia.jpg')">
            <div class="row overlay full-height text-center">
              <div class="col-12 self-center">Citofonia</div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="block"
               style="background-image: url('/assets/image/iblog/bg/control-acceso.jpg')">
            <div class="row overlay full-height text-center">
              <div class="col-12 self-center">Control de Acceso</div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="block"
               style="background-image: url('/assets/image/iblog/bg/cableado-estructurado.jpg')">
            <div class="row overlay full-height text-center">
              <div class="col-12 self-center">Cableado Estructurado</div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="block"
               style="background-image: url('/assets/image/iblog/bg/telefonia.jpg')">
            <div class="row overlay full-height text-center">
              <div class="col-12 self-center">Telefonía</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /*Component*/
  import bannerComponent from 'src/components/iblog/banner'

  export default {
    props: {},
    components: {
      bannerComponent
    },
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
  #iblogIndex
    .content
      padding-top 70px
      padding-bottom 40px
      .block
        position relative
        height 355px
        font-size 35px
        color white
        background-position center
        background-repeat no-repeat
        background-size cover
        text-shadow 2px 2px 2px #464646
        .overlay
          position absolute
          top 0
          left 0
          height 100%
          width 100%
          background-color #23336670
    &.mobile
      .content
        padding 0
      .block
        height 200px
      .gutter-md
        @media screen and (max-width: $breakpoint-xs)
          div
            padding-top 2px
          &:first-child
            padding-top 32px
</style>
