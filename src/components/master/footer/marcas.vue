<template>
  <div id="marcasComponent" :class="$q.platform.is.desktop ? 'desktop' : 'mobile'">
    <div class="q-container full-height">
      <div class="row full-height items-center">
        <div class="col-12">
          <carousel autoplay loop
                    :autoplayTimeout="$q.platform.is.desktop ? 4000 : 2000"
                    :perPage="$q.platform.is.desktop ? 5 : 1"
                    :paginationEnabled="false"
                    :navigationEnabled="$q.platform.is.desktop ? true : false"
                    navigationNextLabel="<i class='fas fa-angle-right'></i>"
                    navigationPrevLabel="<i class='fas fa-angle-left'></i>">
            <slide>
              <img src="/assets/image/marcas/auta.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/cilvoz.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/comelit.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/dahua.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/elvox.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/fermax.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/golmar.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/hikvision.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/intec.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/panasonic.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/sonika.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/urmet.jpg">
            </slide>
            <slide>
              <img src="/assets/image/marcas/zkteco.jpg">
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    props: {},
    components: {
      Carousel,
      Slide
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

  #marcasComponent
    text-align center
    border-top 1px solid $grey-11
    &.desktop
      height 190px
    img
      filter: grayscale(100%);
      &:hover
        filter none
    .VueCarousel-navigation
      padding 20px auto
      .VueCarousel-navigation-button
        font-size 31px

</style>
