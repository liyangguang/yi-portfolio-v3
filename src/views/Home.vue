<template lang="pug">
div
  main
    .content-screen: div
      h1 Hello 
      h1 I'm Yi Nie
    .content-screen
      h2 I solve complex problems
    ul
      li project 1
      li project 2
      li project 3
  HomeBackground(ref="background")
</template>

<script>
import HomeBackground from '@/components/HomeBackground.vue';

export default {
  components: {HomeBackground},
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

ul {
  max-width: 1200px;
  margin: 0 auto;
}

li {
  height: 30em;
  margin: 1em;
  background: rgba(255,255,255,.5);
}
</style>