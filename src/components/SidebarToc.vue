<template lang="pug">
.sidebar-toc
  p(v-for="(heading, index) in headings")
    span.line(:class="{[`-${heading.tagName}`]: true, '-active': activeIndex === index}")
    a.text(:class="{[`-${heading.tagName}`]: true, '-active': activeIndex === index}", @click="scrollIntoView(heading)") {{heading.textContent}}
</template>

<script>
export default {
  props: ['pageDom'],
  data() {
    return {
      headings: [],
      activeIndex: 0,
      _interval: null,
    };
  },
  mounted() {
    this._findAllHeadings();
    this._interval = setInterval(() => {
      // We need to handle image loading, page height change, throttling, etc. thus just use an interval
      this._highlightScrollPosition();
    }, 300);
  },
  destroyed() {
    clearInterval(this._interval);
  },
  methods: {
    _findAllHeadings() {
      this.headings = Array.from(this.pageDom.querySelectorAll('h2, h3'));
    },
    _highlightScrollPosition() {
      const currentY = window.scrollY;
      for (const heading of this.headings) {
        if (heading.getBoundingClientRect().top + window.innerHeight * .6 > 0) {
          this.activeIndex = this.headings.indexOf(heading);
          return;
        }
      }
    },
    scrollIntoView(element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar-toc {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  text-transform: capitalize;
  padding: .5em 1.5em .5em 0;
  transition: background var(--transition);

  &:hover {
    .text {opacity: .5; transform: none;}
    .line {opacity: 0; transform: translateX(-100%);}
  }

  & .-active {
    opacity: 1 !important;
  }
}

p {
  position: relative;
}

.line {
  display: block;
  height: 2px;
  background: #fff;
  margin: 1.8em 0;
  
  opacity: .5;
  transition: opacity var(--transition), transform var(--transition);

  &.-H2 {width: 2em;}
  &.-H3 {width: 1em;}

  @media screen and (max-width: 500px) {
    &.-H2 {width: 1.5em;}
    &.-H3 {width: .5em;}
  }
}

.text {
  position: absolute;
  top: -0.7em;
  white-space: nowrap;
  opacity: 0;
  padding: 0.2em 1em;
  transform: translateX(-100%);
  background: #0D0E1277;
  backdrop-filter: blur(3px);
  transition: opacity var(--transition), transform var(--transition);

  &.-H2 {padding-left: 1em;}
  &.-H3 {padding-left: 2.5em;}

  &:hover {
    opacity: .8 !important;
  }
}

a {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
