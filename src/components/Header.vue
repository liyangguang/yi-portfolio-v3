<template lang="pug">
header
  router-link(to="/"): img.logo(src="@/assets/logo.svg")
  nav
    router-link(to="/") project
    router-link(to="/sidework") sidework
    a(href="/Yi Nie - Product designer - Resume.pdf", target="_blank") resume
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
  padding: 1em 4em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
  background: #0D0E12dd;
  transition: background var(--transition);

  &:hover {
    background: #0D0E12;
  }

  @media screen and (max-width: 500px) {
    padding: 1em;
  }
}

.logo {
  height: 2em;
}

nav {
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1.6px;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }

  a {
    margin: .3em 1em;
  }
}
</style>