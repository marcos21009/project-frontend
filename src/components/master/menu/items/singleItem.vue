<template>
  <!-- Single Item -->
  <q-item link :to="item.to" v-if="item"
          :class="$q.platform.is.desktop ? 'q-px-xs' : ''">
    <q-item-side class="mobile-only" v-if="item.icon" :icon="item.icon"/>
    <q-item-main>{{item.title}}</q-item-main>
  </q-item>
</template>
<script>
  export default {
    props: {
      item: {default: false}
    },
  }
</script>
<style lang="stylus">
  @import "~variables";
</style>
