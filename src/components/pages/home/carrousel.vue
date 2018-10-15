<template>
  <div id="carousel">
    <q-carousel class="text-white"
                infinite
                :height="this.$q.platform.is.desktop ? '500px' : '320px'">
      <!--= Slides =-->
      <q-carousel-slide img-src="assets/image/carousel.jpg"
                        v-for="(slide,index) in 3" :key="index">
        <div class="filter-img">
          <div class="q-container row items-center full-height">
            <div class="col-1"></div>
            <div class="col-11 col-md-6">
              <h3 class="q-ma-none q-mb-md">
                Innovación en Tecnología
              </h3>
              <span>
                Contamos con una gran variedad de productos tanto de
                citofonía telefoníca cableado estructurado control
                de acceso...
              </span>
            </div>
          </div>
        </div>
      </q-carousel-slide>

      <!--= Controls =-->
      <q-carousel-control slot="control-nav"
                          class="q-container"
                          slot-scope="carousel"
                          position="center">
        <q-btn
          @click="carousel.previous"
          icon="fas fa-arrow-left"
          class="btnLeft" round flat
        />
        <q-btn
          @click="carousel.next"
          icon="fas fa-arrow-right"
          class="btnRight" flat round
        />
      </q-carousel-control>
    </q-carousel>
  </div>
</template>
<script>
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
  #carousel
    .q-carousel-slide
      padding 0
      .filter-img
        background-image url('/assets/image/filter-carousel.png')
        height 100%
        width 100%

    .q-carousel-control
      margin 0 !important
      padding 0 !important
      .q-btn
        &.btnLeft
          margin-left -34px
        &.btnRight
          float right
          margin-right -34px
</style>
