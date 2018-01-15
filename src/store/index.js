import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    city: localStorage.city || ''
  },
  getters: {
    doubleCity (state) {
      return state.city + state.city
    }
  },
  actions: {
    changeCityDelayFiveSeconds (context, city) {
      setTimeout(() => {
        context.commit('changeCity', city)
      }, 5000)
    }
  },
  mutations: {
    changeCity (state, city) {
      localStorage.city = city
      state.city = city
    }
  }
})

export default store
