import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const defaultState = {
  lastDate: ''
}

const storage = localStorage

const prefix = 'app.'
for (const key in defaultState) {
  if (storage.getItem(prefix + key)) {
    defaultState[key] = JSON.parse(storage.getItem(prefix + key))
  }
}

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
        storage.setItem(prefix + key, JSON.stringify(defaultState[key]))
      }
    }
  }
})
