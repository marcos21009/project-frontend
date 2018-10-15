<template>
  <div id="informationHeader" class="q-ma-md bg-grey-3">

    <div class="desktop-only row gutter-xs text-center q-pa-sm" style="display: inherit">
      <div class="infoHeader col-12">
        <h6>Contáctanos en Ibague al:</h6>
        <font><q-icon name="fa fa-phone" />311 559 4775</font>
      </div>
      <div class="infoHeader col-12">
        <h6>Solicita tu visita técnica al whatsapp:</h6>
        <a href="#"><font><q-icon name="fab fa-whatsapp" />311 559 4775</font></a>
      </div>
      <div class="infoHeader col-12 block3">
        <h6>Nuestras redes sociales:</h6>
        <q-icon name="fab fa-facebook"></q-icon>
        <q-icon name="fab fa-twitter"></q-icon>
        <q-icon name="fab fa-instagram"></q-icon>
        <q-icon name="fab fa-youtube"></q-icon>
      </div>
    </div>

    <q-list class="infoMobil mobile-only q-pa-none text-center">
      <q-item class="text-center block3">
        <q-item-main label="Redes Sociales" >
          <q-icon name="fab fa-facebook"></q-icon>
        <q-icon name="fab fa-twitter"></q-icon>
        <q-icon name="fab fa-instagram"></q-icon>
        <q-icon name="fab fa-youtube"></q-icon>
        </q-item-main>
        
      </q-item>
      <q-item class="text-center">
        <q-item-main label="Contáctanos" >
          <div class="row gutter-xs full-width">
          <div class="col-12">
            <a href="tel: 4885219">
              <q-icon name="fa fa-phone" />
              4885219
            </a>
          </div>
          <div class="col-12">
            <a href="whatsapp://send?abid=phonenumber&phone=+573174320413">
              <q-icon name="fab fa-whatsapp" />
              317 432 0413
            </a>
          </div>
        </div>
        </q-item-main>
        
      </q-item>
    </q-list>
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
  #informationHeader
    border 1px solid $grey-5
    border-radius 5px
    .q-item-label
      padding 6px 0px
    display inherit
    .infoHeader
      h6
        font-size 12px
        margin 0px
        color $primary
        font-weight bold
        line-height 1.5
      .q-icon
        color $primary
        margin-right 15px
        font-size 12px
      font
        color $primary
        font-size 12px
        line-height 0
    .block3
      padding-right 0
      .q-icon
        &:last-child
          margin 0

    .infoMobil
      border 0
      .q-item
        a
          text-decoration none
          color $primary
        .q-icon
          color $primary
          margin-right 7px
          font-size 18px
        &:nth-child(1)
          .q-icon
            margin-right 25px
</style>
