<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default { 
  name: 'App'
}
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
@import './styles/style.scss';
</style>

