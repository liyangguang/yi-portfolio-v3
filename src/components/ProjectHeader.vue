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
  padding-top: 3em;
  padding-bottom: 3em;

  @media (max-width: 800px) {
    display: block;

    & > div:first-child {
      margin-bottom: 3em;
    }
  }
}

h1 {
  font-size: 3em;
  max-width: 30rem;
  position: relative;
  top: -.25em;
}

h1 + p {
  max-width: 20rem;
  margin-top: 1em;
}

.label {
  text-transform: uppercase;
  font-weight: 600;
}

.label + p {
  margin-bottom: 2em;
}

.image-container {
  height: 30em;
  background: cover;
  background-position: center center;
}
</style>
