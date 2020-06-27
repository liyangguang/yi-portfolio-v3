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

  --content-width: 1200px;
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
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
}

._content-width {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 1em;
}
</style>
