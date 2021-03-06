<template lang="pug">
.project(ref="projectEl", :class="{'-image-left': direction}")
  .text-container
    ul
      li(v-for="tag in project.tags") {{tag}}
    h2: router-link(:to="project.id") {{project.title}}
    p {{project.description}}
    router-link.more-link(:to="project.id") read more
  router-link(:to="project.id").image-container
    img(:class="{'-faded-out': isTopFadeout}", :src="project.homeTopImage")
    img(:class="{'-faded-out': isBottomFadeout}", :src="project.homeBottomImage")
</template>

<script>
const BOTTOM_IMAGE_ANIMATION_RATIO = .7;
const TOP_IMAGE_ANIMATION_RATIO = .9;

export default {
  props: ['project', 'direction'],
  data() {
    return {
      isTopFadeout: true,
      isBottomFadeout: true,
    };
  },
  mounted() {
    this._registerObserver();
  },
  methods: {
    _registerObserver() {
      // Create checking points - .1, .2, .3, ...1
      const threshold = new Array(10).fill().map((_, i) => i / 10);
      let observer = new IntersectionObserver((entries) => {
        const currentRatio = entries[0].intersectionRatio;
        if (currentRatio < BOTTOM_IMAGE_ANIMATION_RATIO) {
          this.isTopFadeout = true;
          this.isBottomFadeout = true;
        } else if (currentRatio >= BOTTOM_IMAGE_ANIMATION_RATIO && currentRatio < TOP_IMAGE_ANIMATION_RATIO) {
          this.isTopFadeout = true;
          this.isBottomFadeout = false;
        } else {
          this.isTopFadeout = false;
          this.isBottomFadeout = false;
        }
      }, {threshold});
      observer.observe(this.$refs.projectEl);
    },
    flyImage(imageIndex, isReverse) {
      console.log(imageIndex, isReverse ? 'out' : 'in');
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3em;
  align-items: center;
  grid-auto-flow: dense;
  margin: 12em 0;

  @media screen and (max-width: 800px) {
    display: block;

    .text-container {
      margin-bottom: 3em;
    }
  }

  .image-container {
    grid-column: 2 / span 2;

  }

  &.-image-left {
    .text-container {
      grid-column: 3;
    }

    .image-container {
      grid-column: 1 / span 2;
    }
  }
}

h2 {
  text-transform: uppercase;
  margin: .5em 0;
  font-size: 2.0em;
  letter-spacing: .25em;
  line-height: 1.2;
  font-weight: 900;
}

ul {
  padding: 0;
}

li {
  list-style: none;
  display: inline-block;
  margin-right: 0.5em;
  background: rgba(255,255,255,.3);
  color: white;
  padding: 4px 12px;
  font-size: 0.9em;
}

.image-container {
  position: relative;

  img:first-child {
    position: absolute;
    z-index: 1;
    transition: opacity .3s ease-out, transform 1.2s ease-out;
  }

  img:last-child {
    position: relative;
    top: 20%;
    transition: opacity .8s ease-out, transform .8s ease-out;
  }
}

.-faded-out {
  opacity: 0;
  transform: translateY(-20%);
}

p {
  line-height: 1.6;
}

.more-link {
  background-image: url(../assets/shared/icon-arrow.svg);
  background-size: 1.2em;
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 1.6em;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 1em;
  letter-spacing: .1em;
  font-weight: 700;
  transition: padding var(--transition);
  position: relative;
  font-size: 1.1em;

  &::after {
    content: '';
    position: absolute;
    background: var(--primary-color);
    height: 0.8em;
    left: 0;
    right: 0;
    bottom: -0.2em;
    z-index: -1;
    opacity: 0.8;
    transition: opacity var(--transition), transform var(--transition);
  }

  &:hover {
    padding-right: 2em;

    &::after {
      opacity: 1;
      transform: scaleY(.4);
    }
  }
}
</style>
