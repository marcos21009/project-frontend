<template>
  <div id="bannerIblog" :class="this.$q.platform.is.desktop ? 'desktop' : 'mobile'">
    <div class="q-container text-right full-height">
      <div class="row items-center full-height">
        <div class="col-12 text-right">
          <!--BreadCrum-->
          <breadcrum-component></breadcrum-component>
          <!--Title-->
          <h5 class="q-ma-none q-mt-lg text-secondary text-center">
            PRODUCTOS
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /*Components*/
  import breadcrumComponent from 'src/components/breadcrum'

  export default {
    props: {},
    components: {
      breadcrumComponent
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
  #bannerIblog
    background-image url("/assets/image/iblog/bg-banner.png")
    background-size cover
    background-position center
    padding-top 60px
    h5
      font-weight bold !important
    &.desktop
      height 245px
    &.mobile
      padding 10px 0 15px 0
      h5
        margin-top 10px !important

</style>
