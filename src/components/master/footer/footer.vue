<template>
  <q-layout-footer id="footer" class="no-shadow"  color="primary">

    <!--=== COPYRIGHT ===-->
    <div class="copyright q-py-sm q-px-lg bg-grey-13">
      <div :class="'row '+($q.platform.is.desktop ? 'q-container' : '')">
        <div class="col-4 col-md-auto">

        </div>
        <div class="col-8 col-md-auto q-pl-md">
          <label>
            Copyright
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
    color #DDDDDD !important
    .copyright
      min-height 74px
      font-size 12px
      padding 18px
      svg
        fill #DDDDDD

</style>
