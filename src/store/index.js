import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@imagina/quser/_store/auth/index'; //Import this file //Import this file


Vue.use(Vuex)

export default function () {
  // IMPORTANT! Instantiate Store inside this function
  const Store = new Vuex.Store({
    modules: {
		auth //Add authStore
    }
  })
  return Store
}
