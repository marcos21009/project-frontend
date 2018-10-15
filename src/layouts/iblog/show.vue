<template>
  <div id="iblogShow" :class="this.$q.platform.is.desktop ? 'desktop' : 'mobile'">
    <!--= BANNER =-->
    <banner-component></banner-component>

    <!--= CATEGORIES =-->
    <div class="q-container content">
      <div class="row">

        <div class="col-12">
          <img src="/assets/image/iblog/bg/domotica.jpg" width="100%">

          <hr>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorem eius expedita explicabo, nam perferendis qui sint
            tempore! At, beatae commodi dolores explicabo hic itaque
            odio quam repudiandae rerum veniam voluptates.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Atque deserunt dignissimos explicabo illum laudantium magni
            molestiae necessitatibus, nemo nesciunt pariatur quibusdam,
            quo saepe! Ad ex facilis laborum maiores suscipit voluptatem.
          </p>
        </div>
      </div>
    </div>

    <!--= POST =-->
    <post-component></post-component>
  </div>
</template>
<script>
  /*Component*/
  import bannerComponent from 'src/components/iblog/banner'
  import postComponent from 'src/components/iblog/postSlider'

  export default {
    props: {},
    components: {
      bannerComponent,
      postComponent
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
  #iblogShow
    .content
      padding 70px 85px 40px 85px
      hr
        border-top 1px solid $grey-11
        margin 35px auto
      p
        font-size 16px
        color $grey-8
        line-height 1.4
        text-align justify
    &.mobile
      .content
        padding 15px 20px
</style>
