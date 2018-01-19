import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    city: localStorage.city || ''
  },
  mutations: {
    changeCity (state, city) {
      localStorage.city = city
      state.city = city
    }
  }
})
export default store
