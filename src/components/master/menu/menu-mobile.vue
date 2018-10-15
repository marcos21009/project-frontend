<template>
  <div id="menuMobile" view="hHh Lpr lFf">
    <q-layout container style="height: 100vh;">
      <q-layout-header class="no-shadow text-center q-py-md bg-white">
        <!-- === LOGO === -->
        <router-link :to="{ name: 'home'}">
          <a>
            AgroCont
           <!--<img src="../../../assets/image/logo.png" width="60%">-->
          </a>
        </router-link>
      </q-layout-header>

      <!--= Content Menu =-->
      <q-page-container>
        <!--= MENU =-->
        <q-list id="list_menu" separator class="q-py-none">
          <!--Level 1 Single-->
          <singleItem v-for="(lv1,key1) in sidebar"
                      :item="lv1" :key="key1"
                      v-if="!lv1.children || !lv1.children.length">
          </singleItem>

          <!--Level 1 Dropdown-->
          <dropdownItem v-else-if="lv1.children && lv1.can"
                        :item="lv1">
            <!--Level 2 Single-->
            <singleItem v-for="(lv2,key2) in lv1.children"
                        :item="lv2" :key="key2"
                        v-if="!lv2.children || !lv1.children.length"></singleItem>

            <!--Level 2 Dropdown-->
            <dropdownItem v-else-if="lv2.children"
                          :item="lv2">
              <singleItem v-for="(lv3,key3) in lv2.children"
                          :item="lv3" :key="key3"></singleItem>
            </dropdownItem>
          </dropdownItem>
        </q-list>
      </q-page-container>

      <q-layout-footer id="footer" class="no-shadow bg-white">
        <!--= Information =-->
        <information-component></information-component>
      </q-layout-footer>
    </q-layout>
  </div>
</template>
<script>
  /*Components*/
  import singleItem from 'src/components/master/menu/items/singleItem'
  import dropdownItem from 'src/components/master/menu/items/dropdownItem'
  import informationComponent from 'src/components/master/header/information'

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
      informationComponent
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
  #menuMobile
    .q-layout-header
      min-height auto
      height auto
</style>
