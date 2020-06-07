<template lang="pug">
div
  main
    .content-screen
      h1 Hello, I'm Yi Nie
  HomeBackground
</template>

<script>
import HomeBackground from '@/components/HomeBackground.vue';

export default {
  components: {HomeBackground},
}
</script>

<style lang="scss" scoped>
main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>