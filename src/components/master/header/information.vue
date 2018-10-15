<template>
  <div id="informationHeader">
    <!--= Desktop
    <div class="desktop-only" style="display: inherit">
      <div class="infoHeader block1">
        <h6>Contáctanos en <br> Ibague al:</h6><br>
        <font><q-icon name="fa fa-phone" />311 559 4775</font>
      </div>
      <div class="infoHeader block2">
        <h6>Solicita tu visita <br> técnica al whatsapp</h6><br>
        <a href="#"><font><q-icon name="fab fa-whatsapp" />311 559 4775</font></a>
      </div>
      <div class="infoHeader block3">
        <h6>Nuestras <br> redes sociales</h6><br>
        <q-icon name="fab fa-facebook"></q-icon>
        <q-icon name="fab fa-twitter"></q-icon>
        <q-icon name="fab fa-instagram"></q-icon>
        <q-icon name="fab fa-youtube"></q-icon>
      </div>
    </div>
    =-->
    <!--= Mobile =-->
    <q-list class="infoMobil mobile-only q-pa-none">
      <q-item class="text-center">
        <q-icon name="fab fa-facebook"></q-icon>
        <q-icon name="fab fa-twitter"></q-icon>
        <q-icon name="fab fa-instagram"></q-icon>
        <q-icon name="fab fa-youtube"></q-icon>
      </q-item>
      <q-item>
        <div class="row full-width">
          <div class="col-6">
            <a href="tel: 4885219">
              <q-icon name="fa fa-phone" />
              4885219
            </a>
          </div>
          <div class="col-6">
            <a href="whatsapp://send?abid=phonenumber&phone=+573174320413">
              <q-icon name="fab fa-whatsapp" />
              317 432 0413
            </a>
          </div>
        </div>
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
    display inherit
    .infoHeader
      padding 20px 48px
      font-weight bold
      h6
        font-size 15px
        margin 0px
        color #868686
        font-weight bold
        line-height 1.5
      .q-icon
        color $secondary
        margin-right 15px
        font-size 18px
      font
        color $secondary
        font-size 24px
        line-height 0
    .block1, .block2
      border-right 1px solid $grey-4
      h6
        margin-left 28px
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
          color $secondary
          margin-right 7px
          font-size 18px
        &:nth-child(1)
          .q-icon
            margin-right 25px
</style>
