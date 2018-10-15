<template>
  <div id="page1"
       class="q-layout-page">


  </div>
</template>
<script>
  /*Components*/
  import carrouselComponent from 'src/components/pages/home/carrousel'
  import serviciosComponent from 'src/components/pages/home/servicios'
  import nosotrosComponent from 'src/components/pages/home/nosotros'
  import productosComponent from 'src/components/pages/home/productos'

  export default {
    props: {},
    components: {
      carrouselComponent,
      serviciosComponent,
      nosotrosComponent,
      productosComponent
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {
        btnRight : '(back_tick)<q-icon name="fas fa-arrow-left" />(back_tick)'
      }
    },
    methods: {}

  }
</script>
<style lang="stylus">
  @import "~variables";
  #page1
    //margin-top 150px !important

</style>
