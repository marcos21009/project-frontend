<template>
  <div id="search" class="float-right">
    <!--= Search Desktop =-->
    <q-btn flat icon="fas fa-search" class="desktop-only">
      <!-- Direct child of target -->
      <q-popover anchor="bottom right"
                 self="top right"
                 @show="$refs.searchDesktop.focus()"
                 class="q-pa-sm">
        <q-search
          ref="searchDesktop"
          v-model="searchData"
          :debounce="600"
          autofocus
          @input="search"
          placeholder="Buscar"
          icon="fas fa-search"
        />
      </q-popover>
    </q-btn>

    <!--= Search Mobile =-->
    <q-btn flat icon="fas fa-search"
           @click="modalSearch = true"
           color="primary"
           class="mobile-only btnMobile" />

    <q-modal v-model="modalSearch"
             @show="$refs.searchMobile.focus()"
             position="top">
      <div class="q-pa-sm">
        <q-search
          ref="searchMobile"
          v-model="searchData"
          :debounce="600"
          @input="search"
          @enter="search"
          placeholder="Buscar"
          icon="fas fa-search"
        />
      </div>
    </q-modal>
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
      return {
        modalSearch : false,
        searchData: ''
      }
    },
    methods: {
      search(){
        console.log(this.searchData)
      },

      test(){
        /*this.$refs.searchMobile.focus()
        console.log(this.$refs.searchMobile)*/
      }
    }

  }
</script>
<style lang="stylus">
  @import "~variables";
  #search
    position relative
    .q-btn
      height 26px !important
      border-left 1px solid $secondary !important
      border-right 1px solid $secondary !important
      border-radius 0
    .btnMobile
      border none !important
</style>
