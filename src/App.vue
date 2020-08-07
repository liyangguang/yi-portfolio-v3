<template lang="pug">
#app
  Header
  router-view
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {Header},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

:root {
  --accent-color-1: #8EDD9C;
  --accent-color-2: #5257F6;
  --accent-color-3: #ff9798;

  --z-header: 10;

  --content-width: 1200px;
  --transition: .5s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background: #0D0E12;
  line-height: 1.4;
  font-size: 14px;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

li {
  list-style: none;
}

img {
  max-width: 100%;

  &._full-width {
    width: 100%;
  }
}

._content-width {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 3em;
}

._flex-center {
  display: flex;
  align-items: center;
}

._project {
  section {
    margin: 10em 0;
  }

  .section-title {
    max-width: 450px;

    h2 {
      opacity: 0.7;
      text-transform: uppercase;
      font-size: 0.9em;
      margin-bottom: 1.5em;
    }

    h3 {
      font-size: 1em;
      margin: 3em 0 1.2em;
    }

    ._title {
      font-size: 2em;
      line-height: 1.2;
      margin-bottom: 0.8em;
    }

    ._text {
      margin-bottom: 3em;
    }
  }

  ._bleeding {
    background: #212226;
    margin: 0 -1000px;
    padding: 3em 1000px;
  }

  ._grid {
    display: grid;
    grid-gap: 1.5rem;

    &.-default-2 {grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));}
    &.-default-3 {grid-template-columns: repeat(auto-fit, 300px);}
    &.-default-4 {grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));}
  }

  ._card {
    background: #212226;
    padding: 2.5em 3em;

    ._icon {
      height: 2em;
      margin-bottom: 0.5em;
    }

    ._large-number {
      font-size: 4em;
      font-weight: bold;
      line-height: 1;
    }

    ._title {
      font-size: 1.1em;
      font-weight: bold;
      margin: 0.5em 0;
    }
  }

  ._tag {
    display: inline-block;
    padding: .3em 0.5em;
    color: #01203D;
    font-weight: bold;

    &.-tag-1 {background: var(--accent-color-1);}
    &.-tag-2 {background: var(--accent-color-2);}
    &.-tag-3 {background: var(--accent-color-3); color: white;}
  }
}
</style>
