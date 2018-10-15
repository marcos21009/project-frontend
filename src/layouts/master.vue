<template>
  <q-layout view="lHh Lpr lFf">

    <!--=== HEADER ===-->
    <header-component></header-component>

    <!--=== ROUTER VIEW ===-->
    <q-page-container   content-class="bg-grey-3" >
      <router-view/>
    </q-page-container>

    <!--=== FOOTER ===-->
    <footer-component></footer-component>

    <!--=== BACK TO TOP ===-->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        v-back-to-top.animate="{offset: 500, duration: 200}"
        round
        color="secondary"
        icon="keyboard_arrow_up"
      />
    </q-page-sticky>

  </q-layout>
</template>

<script>
  import headerComponent from 'src/components/master/header/header'
  import footerComponent from 'src/components/master/footer/footer'

  export default {
    components: {
      headerComponent,
      footerComponent
    },
    mounted() {
      this.$nextTick(function () {})
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Arimo')
  @import "~variables";
  body
    font-family: 'Arimo', sans-serif;

</style>
