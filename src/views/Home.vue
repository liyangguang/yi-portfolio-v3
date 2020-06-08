<template lang="pug">
div
  main
    .content-screen: div
      h1 Hello 
      h1 I'm Yi Nie
    .content-screen
      h2 I solve complex problems
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
h1{
  font-weight: 900;
  line-height: 80px;
  font-size:48px;
  letter-spacing: 20px;
  text-transform: uppercase;
  text-align: center;
}
h2{
  font-weight: 900;
  line-height: 1.6;
  font-size:32px;
  letter-spacing: 12px;
  text-transform: uppercase;
  text-align: center;
}
</style>