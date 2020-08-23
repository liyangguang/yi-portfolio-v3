<template lang="pug">
.project-header
  template(v-if="project")
    .text-container._content-width
      div
        h1 {{project.title}}
        p {{project.description}}
      div
        p.label timeline
        p {{project.timeline}}
        p.label role
        p {{project.role}}
    .image-container(:style="{'background-image': `url(${project.heroImage})`}")
  p(v-else) Project not found
</template>

<script>
import {PROJECTS} from '@/PROJECT_DATA.js';

export default {
  computed: {
    projectId() {return this.$route.params.projectId;},
    project() {return PROJECTS.find((project) => project.id === this.projectId);},
  },
}
</script>

<style lang="scss" scoped>
.project-header {
  margin-top: 5em;
}

.text-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2em;
  padding-top: 2.5em;
  padding-bottom: 4em;

  @media (max-width: 800px) {
    display: block;

    & > div:first-child {
      margin-bottom: 3em;
    }
  }
}

h1 {
  font-family: 'Karla', sans-serif;
  font-size: 4.5em;
  line-height: 1.2;
  position: relative;
  top: -.25em;
}

h1 + p {
  max-width: 30rem;
}

.label {
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.6px;
  margin-bottom: 8px;
}

.label + p {
  margin-bottom: 2em;
}

.image-container {
  height: 40em;
  background: cover;
  background-position: center center;
  background-size: cover;
}
</style>
