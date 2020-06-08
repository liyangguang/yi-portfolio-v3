<template lang="pug">
div
  main
    .content-screen
      h1 Hello, I'm Yi Nie
    .content-screen
      h1 I solve complex problems
  HomeBackground(ref="background")
</template>

<script>
import HomeBackground from '@/components/HomeBackground.vue';

export default {
  components: {HomeBackground},
  created() {
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  },
  methods: {
    scrollHandler() {
      if (window.scrollY >= window.innerHeight * .9) {
        this.$refs.background.connectDots();
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content-screen {
  width: 100vw;
  min-height: 100vh;
  max-width: 100%;  // For the scroll bar
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>