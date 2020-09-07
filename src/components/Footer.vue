<template lang="pug">
footer._content-width
  a.icon-link(v-for="link in LINKS", :href="link.url", target="_blank", rel="noopener", :style="{'background-image': `url(${link.icon})`}")
  .flex-space
  a(href="https://yi-nie.netlify.app", target="_blank", rel="noopener") Find more of my previous work here
</template>

<script>
export default {
  data() {
    return {
      LINKS: [
        {text: 'LinkedIn', url: 'https://www.linkedin.com/in/yinie/', icon: require('@/assets/shared/icon-linkedin.svg')},
        {text: 'Dribbble', url: 'https://dribbble.com/yinie', icon: require('@/assets/shared/icon-dribbble.svg')},
        {text: 'GitHub', url: 'https://github.com/yinie', icon: require('@/assets/shared/icon-github.svg')},
        {text: 'Email', url: 'mailto://yinie-ux@gmail.com', icon: require('@/assets/shared/icon-email.svg')},
      ],
    };
  } ,
}
</script>

<style lang="scss" scoped>
footer {
  padding: 2em 1em;
  margin-top: 5em;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(255,255,255,.7);
}

.icon-link {
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  height: 2em;
  width: 2em;
  margin-right: 1em;
}

.flex-space {
  flex: 1;
}
</style>