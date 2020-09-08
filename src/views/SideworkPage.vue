<template lang="pug">
main._content-width
  section.sideworks-group
    h1 Coding
    .hoverable(v-for="item in CODING")
      img(:src="item.image")
      p {{item.text}}

  section.sideworks-group
    h1 Illustrations
    img(v-for="item in ILLUSTRATIONS", :src="item")

  section.sideworks-group
    h1 UI Design
    img(v-for="item in UI", :src="item")

  section.sideworks-group
    h1 Lettering
    img(v-for="item in ARTS", :src="item")
  Footer
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {Footer},
  data() {
    return {
      CODING: [
        {text: 'Figma plugin. Generate loan term data', image: require('@/assets/sidework/coding_plugin.gif')},
        {text: 'React app. Playable Tic-Tac-Toe', image: require('@/assets/sidework/prototype_tic-tac-toe.gif')},
        {text: 'CSS transform animation', image: require('@/assets/sidework/animation_wave.gif')},
        {text: 'SVG + JavaScript animation', image: require('@/assets/sidework/coming-soon.gif')},
        {text: 'JavsScript TODO app', image: require('@/assets/sidework/todo-app.gif')},
      ],
      UI: [
        require('@/assets/sidework/ui_admin_blue.png'),
        require('@/assets/sidework/ui_admin_gold.png'),
        require('@/assets/sidework/ui_halloween.jpg'),
        require('@/assets/sidework/ui_invest.png'),
        require('@/assets/sidework/ui_landing_page.jpg'),
        require('@/assets/sidework/ui_log_in.jpg'),
        require('@/assets/sidework/ui_material_design.jpg'),
        require('@/assets/sidework/ui_sleep.jpg'),
        require('@/assets/sidework/ui_task.jpg'),
        require('@/assets/sidework/ui_time_up.jpg'),
      ],
      ILLUSTRATIONS: [
        require('@/assets/sidework/illustration_bubble_tea.png'),
        require('@/assets/sidework/illustration_korean_bbq.png'),
        require('@/assets/sidework/illustration_milk_tea.png'),
        require('@/assets/sidework/illustration_mountain.png'),
        require('@/assets/sidework/illustration_popsicles.png'),
        require('@/assets/sidework/illustration_ramen.png'),
        require('@/assets/sidework/illustration_tamagoyaki.png'),
        require('@/assets/sidework/illustration_icecream.png'),

      ],

      ARTS: [
        require('@/assets/sidework/lettering_1.png'),
        require('@/assets/sidework/lettering_2.png'),
        require('@/assets/sidework/lettering_3.png'),
        require('@/assets/sidework/lettering_4.png'),
        require('@/assets/sidework/lettering_5.png'),
        require('@/assets/sidework/lettering_6.png'),
        require('@/assets/sidework/lettering_7.png'),
        require('@/assets/sidework/lettering_8.png'),
        require('@/assets/sidework/lettering_9.png'),
        
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
.sideworks-group  {
  padding-top: 10em;
  column-width: 460px;
  column-gap: 2em;

  & > * {
    margin-bottom: 2em;
  }
}

.hoverable {
  position: relative;

  p {
    position: absolute;
    bottom: 0;left: 0;right: 0;
    background: rgba(0,0,0,.5);
    padding: 1em;
    transition: transform var(--transition), opacity var(--transition), color  var(--transition);
    opacity: 0;
    color: transparent;
    transform: translateY(100%);
  }

  &:hover p {
    transform: none;
    opacity: 1;
    color: inherit;
  }
}
</style>