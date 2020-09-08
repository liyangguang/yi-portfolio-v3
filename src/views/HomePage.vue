<template lang="pug">
div
  main
    .content-screen: div
      p.title Hello 
      p.title I'm Yi Nie
    .content-screen
      p.subtitle I solve complex problems
  ._content-width
    HomeProject(v-for="(project, index) in PROJECTS", :key="project.id", :project="project", :direction="index % 2")
    Contact.contacts
  HomeBackground
</template>

<script>
import HomeBackground from '@/components/HomeBackground.vue';
import HomeProject from '@/components/HomeProject.vue';
import Contact from '@/components/Contact.vue';
import {PROJECTS} from '@/PROJECT_DATA.js';

export default {
  components: {HomeBackground, HomeProject, Contact},
  data() {
    return {
      PROJECTS,
    };
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

.contacts {
  margin-top: 20em;
}

</style>