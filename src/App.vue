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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,700;1,400&display=swap');

:root {
  --accent-color-1: #8EDD9C;
  --accent-color-2: #5257F6;
  --accent-color-3: #ff9798;

  --primary-color: #5257F6;

  --z-header: 10;

  --content-width: 1200px;
  --text-max-width: 500px;

  --transition: .5s ease-in-out;
}

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background: #0D0E12;
  line-height: 1.4;
  font-size: 15px;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  padding-left: 1em;
}

img {
  width: 100%;
}

._content-width {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 3em;
}

._flex-center {
  display: flex;
  align-items: center;
}

._fade-in {
  opacity: 0;
  transform: translateY(-3rem);
  transition: opacity var(--transition), transform var(--transition);

  &.-active {
    opacity: 1;
    transform: none;
  }
}
</style>
