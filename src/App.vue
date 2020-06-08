<template lang="pug">
#app
  Header
  router-view
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {Header},
}
</script>

<style lang="scss">
:root {
  --z-header: 10;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background: #0D0E12;
}
</style>
