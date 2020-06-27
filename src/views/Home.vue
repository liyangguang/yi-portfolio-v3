<template lang="pug">
div
  main
    .content-screen: div
      p.title Hello 
      p.title I'm Yi Nie
    .content-screen
      p.subtitle I solve complex problems
    .projects
      HomeProject(v-for="(project, index) in PROJECTS", :project="project", :direction="index % 2")
  HomeBackground
</template>

<script>
import HomeBackground from '@/components/HomeBackground.vue';
import HomeProject from '@/components/HomeProject.vue';

export default {
  components: {HomeBackground, HomeProject},
  data() {
    return {
      PROJECTS,
    };
  },
}

const PROJECTS = [
  {
    title: 'pricing revamping',
    tags: ['Ssytem design', '0 to 1'],
    description: 'Design and launch pricing portal from sratch.  Streamline the Affirm’s pricing workflow and expand pricng capacity.',
    topImage: require('@/assets/pricing-revamping/home-top.png'),
    bottomImage: require('@/assets/pricing-revamping/home-bottom.png'),
  },
  {
    title: 'pricing revamping',
    tags: ['Ssytem design', '0 to 1'],
    description: 'Design and launch pricing portal from sratch.  Streamline the Affirm’s pricing workflow and expand pricng capacity.',
    topImage: require('@/assets/credible-mobile/home-top.png'),
    bottomImage: require('@/assets/credible-mobile/home-bottom.png'),
  },
  {
    title: 'pricing revamping',
    tags: ['Ssytem design', '0 to 1'],
    description: 'Design and launch pricing portal from sratch.  Streamline the Affirm’s pricing workflow and expand pricng capacity.',
    topImage: require('@/assets/pricing-revamping/home-top.png'),
    bottomImage: require('@/assets/pricing-revamping/home-bottom.png'),
  },
  {
    title: 'pricing revamping',
    tags: ['Ssytem design', '0 to 1'],
    description: 'Design and launch pricing portal from sratch.  Streamline the Affirm’s pricing workflow and expand pricng capacity.',
    topImage: require('@/assets/credible-mobile/home-top.png'),
    bottomImage: require('@/assets/credible-mobile/home-bottom.png'),
  },
];
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

.title {
  font-weight: 900;
  line-height: 80px;
  font-size:48px;
  letter-spacing: 20px;
  text-transform: uppercase;
  text-align: center;
}

.subtitle {
  font-weight: 900;
  line-height: 1.6;
  font-size:32px;
  letter-spacing: 12px;
  text-transform: uppercase;
  text-align: center;
}

.projects {
  max-width: 1200px;
  margin: 0 auto;
}
</style>