import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const defaultState = {
  lastDate: ''
}

const ls = localStorage
const prefix = 'app.'
for (const key in defaultState) {
  if (ls.getItem(prefix + key)) {
    defaultState[key] = ls.getItem(prefix + key)
  }
}
console.log(defaultState)

export default new Vuex.Store({
  state: defaultState,
  mutations: {
    trackDate: function (state) {
      state.lastDate = (new Date()).getTime()
      this.dispatch('store')
    }
  },
  actions: {
    store: function () {
      for (const key in defaultState) {
        ls.setItem(prefix + key, defaultState[key])
      }
    }
  }
})
