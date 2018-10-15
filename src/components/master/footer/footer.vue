<template>
  <q-layout-footer id="footer" class="no-shadow"  color="primary">

    <!--=== COPYRIGHT ===-->
    <div class="copyright q-py-sm q-px-lg text-grey-8">
      <div class="row">

        <div :class="'col-12 col-md-auto '+($q.platform.is.desktop ? 'text-right': 'text-center') ">
          <label>
            Copyright AGROCONT
            <q-icon name="copyright"/>
            2018  Todos los derechos reservados.
          </label>
        </div>
      </div>
    </div>
  </q-layout-footer>
</template>
<script>
  /*Components
  import informationFooter from 'src/components/master/footer/information'
  */
  export default {
    props: {},
    components: {
     // informationFooter,

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
  #footer
    .copyright
      font-size 12px
      padding 18px
      svg
        fill #DDDDDD

</style>
