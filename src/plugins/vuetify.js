import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: false,
    themes: {
      test: {
        primary: '#1976d2',
        secondary: '#b0bec5',
        warning: '#fb8c00',
        error: '#ff5252',
        success: '#4caf50'
      }
    }
  }
})
