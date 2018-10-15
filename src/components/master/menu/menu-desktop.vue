<template>
  <div id="menuDesktop" class="q-container">
    <div class="content bg-primary bg-primary">
      <!--Menu-->
      <q-btn-group flat>
        <!--Level 1 Single-->
        <q-btn flat :label="lv1.title" :key="key1"
               v-for="(lv1,key1) in sidebar"
               :class="$route.name == lv1.to ? 'active' : ''"
               :to="lv1.to"
               v-if="!lv1.children || !lv1.children.length"/>

        <!--Level 1 Dropdown-->
        <q-btn-dropdown flat :label="lv1.title"
                        split :to="{name : lv1.to}"
                        :class="'btnDropdown ' + ($route.name == lv1.to ? 'active' : '')"
                        :key="key1" v-else>
          <q-list id="list_menu" separator class="q-py-none">
            <!--Level 2 Single-->
            <singleItem v-for="(lv2,key2) in lv1.children"
                        :item="lv2" :key="key2"
                        v-if="!lv2.children || !lv2.children.length"></singleItem>

            <!--Level 2 Dropdown-->
            <dropdownItem v-else-if="lv2.children"
                          :item="lv2">
              <singleItem v-for="(lv3,key3) in lv2.children"
                          :item="lv3" :key="key3"
                          v-if="lv3.can"></singleItem>
            </dropdownItem>
          </q-list>
        </q-btn-dropdown>
      </q-btn-group>

      <!--== Search ==-->
      <search-component></search-component>
    </div>
  </div>
</template>
<script>
  /*Components*/
  import singleItem from 'src/components/master/menu/items/singleItem'
  import dropdownItem from 'src/components/master/menu/items/dropdownItem'
  import searchComponent from 'src/components/master/search'

  /*Config*/
  import Config from 'src/config/index'
  import _cloneDeep from 'lodash.clonedeep'

  /*Services*/
  import menuService from 'src/services/menu'

  export default {
    props: {},
    components: {
      singleItem,
      dropdownItem,
      searchComponent
    },
    watch: {},
    mounted() {
      this.$nextTick(function () {
        this.getData()
      })
    },
    data() {
      return {
        sidebar: [],
      }
    },
    methods: {
      /*Request Menu*/
      getData(){
        menuService.index().then((menu) => {
          this.renderMenu(menu.data)
        })
      },
      /*Chech if hasacces item menu*/
      async renderMenu(dataMenu) {
        //Function recursive for validate permissions
        let hasAccess = async (data) => {
          for (var item in data) {
            let itemAccess = data[item]

            itemAccess.can = true
            if (itemAccess.children) {
              itemAccess.children = await hasAccess(itemAccess.children)
            }
          }
          return data//Return all data
        }

        this.sidebar = await hasAccess(dataMenu)
      },
    }

  }
</script>
<style lang="stylus">
  @import "~variables";

  #menuDesktop
    position relative
    .content
      height 60px
      width 100%
      position absolute
      left 0
      bottom -60px
      padding 0 15px
    .q-btn
      margin-top 16px
      font-size 15px
      color white
      min-height 25px !important
      height 25px !important
      border-right 1px solid $secondary
      .q-btn-inner
        font-size 15px
      &:last-child
        border 0
      &:hover, &:focus
        color $secondary
        .q-focus-helper
          display none
    .active
      color $secondary
      .q-btn
        color $secondary !important
    .btnDropdown
      .q-btn
        border 0
      button
        border-right 1px solid $secondary !important
</style>
