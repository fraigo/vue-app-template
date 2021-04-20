<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <Content msg="Welcome to Your Vue.js App!"/>
    <div>Last access: {{last}} sec.</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/components/Content.vue'

export default {
  name: 'home',
  data: function () {
    return {
      last: 0
    }
  },
  components: {
    Content
  },
  mounted: function () {
    if (this.$store.state.lastDate > 0) {
      this.last = (new Date() - new Date(this.$store.state.lastDate * 1)) / 1000
    }
    this.$store.commit('trackDate')
  },
  computed: {
  }
}
</script>
