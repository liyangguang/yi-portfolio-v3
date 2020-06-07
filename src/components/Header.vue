<template lang="pug">
header
  img.logo(src="@/assets/logo.svg")
  nav
    a project
    a side work
    a resume
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
}

.logo {
  height: 2em;
}

nav {
  text-transform: uppercase;
  font-weight: 600;

  a {
    margin: 0 1em;
  }
}
</style>