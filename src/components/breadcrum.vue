<template>
  <div id="breadcrumComponent">
    <q-breadcrumbs
      active-color="primary"
      color="light"
    >
      <!-- Separator -->
      <q-icon name="fas fa-angle-right" slot="separator" slot-scope="props" />
      <!-- Route Home -->
      <q-breadcrumbs-el label="Inicio" :to="{name:'home'}" icon="home" />
      <!-- Other Routes -->
      <q-breadcrumbs-el v-for="(r,index) in routes" :key="index"
                        :label="r.name" :to="{name:r.name}"  />
    </q-breadcrumbs>
  </div>
</template>
<script>
  export default {
    props: {},
    components: {},
    watch: {
      $route(to, from){
        this.getRoute()
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.getRoute()
      })
    },
    data() {
      return {
        routes : []
      }
    },
    methods: {
      getRoute(){
        this.routes = []
        let routes = this.$route.matched

        if(routes.length >= 3){
          for(var i = 1; i < routes.length; i++){
            this.routes.push({name : routes[i].name})
          }
        }else{
          this.routes = [{name : routes[1].name}]
        }
      }
    }

  }
</script>
<style lang="stylus">
  @import "~variables";
  #breadcrumComponent
    text-transform capitalize !important
    font-size 13px
    width max-content
    display inline-block
    .q-link
      font-weight normal
      .q-icon
        font-size 17px
    .q-breadcrumbs-separator
      font-size 9px
    .q-breadcrumbs-last
      color $primary !important

</style>
