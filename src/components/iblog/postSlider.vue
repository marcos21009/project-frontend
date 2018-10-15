<template>
  <div id="postComponent" :class="$q.platform.is.desktop ? 'desktop' : 'mobile'">
    <div class="q-container full-height">
      <div class="row full-height items-center">
        <div class="col-12">
          <carousel autoplay loop
                    :autoplayTimeout="$q.platform.is.desktop ? 4000 : 2000"
                    :perPage="$q.platform.is.desktop ? 4 : 1"
                    :paginationEnabled="false"
                    :navigationEnabled="$q.platform.is.desktop ? true : false"
                    navigationNextLabel="<i class='fas fa-angle-right'></i>"
                    navigationPrevLabel="<i class='fas fa-angle-left'></i>">
            <slide>
              <div class="img"
                   style="background-image: url('/assets/image/iblog/post/video-citofonia.png')">
              </div>
              <q-btn label="Video-citofonia"
                     icon="fas fa-check-circle"
                     flat color="secondary"></q-btn>
            </slide>
            <slide>
              <div class="img"
                   style="background-image: url('/assets/image/iblog/post/consolas-citofonia.png')">
              </div>
              <q-btn label="Consolas de citofonia"
                     icon="fas fa-check-circle"
                     flat color="secondary"></q-btn>
            </slide>
            <slide>
              <div class="img"
                   style="background-image: url('/assets/image/iblog/post/parlantes.png')">
              </div>
              <q-btn label="Parlantes"
                     icon="fas fa-check-circle"
                     flat color="secondary"></q-btn>
            </slide>
            <slide>
              <div class="img"
                   style="background-image: url('/assets/image/iblog/post/citofonos.png')">
              </div>
              <q-btn label="Citofonos"
                     icon="fas fa-check-circle"
                     flat color="secondary"></q-btn>
            </slide>
            <slide>
              <div class="img"
                   style="background-image: url('/assets/image/iblog/post/consolas-citofonia.png')">
              </div>
              <q-btn label="Consolas de citofonia"
                     icon="fas fa-check-circle"
                     flat color="secondary"></q-btn>
            </slide>
            <slide>
              <div class="img"
                   style="background-image: url('/assets/image/iblog/post/citofonos.png')">
              </div>
              <q-btn label="Citofonos"
                     icon="fas fa-check-circle"
                     flat color="secondary"></q-btn>
            </slide>
            <slide>
              <div class="img"
                   style="background-image: url('/assets/image/iblog/post/consolas-citofonia.png')">
              </div>
              <q-btn label="Consolas de citofonia"
                     icon="fas fa-check-circle"
                     flat color="secondary"></q-btn>
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

  #postComponent
    text-align center
    .img
      height 192px
      width 100%
      background-position center
      background-size cover
      background-repeat: no-repeat;
      border 1px solid $grey-3
    .VueCarousel
      margin-bottom 60px
      @media screen and (max-width: $breakpoint-md)
        margin-bottom 40px
      .VueCarousel-slide
        padding 0 15px
        @media screen and (max-width: $breakpoint-md)
          padding 0 60px !important
      .VueCarousel-navigation
        padding 20px auto
        .VueCarousel-navigation-button
          font-size 31px
          color $secondary

</style>
