<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/form">Form example</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/scss/fonts.scss'
import '@/assets/scss/app.scss'
export default {
}
</script>

<style lang="scss">
</style>
