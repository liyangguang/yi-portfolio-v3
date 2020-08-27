<template lang="pug">
._content-width
  section._fade-in
    .section-title
      h2 problem
      p._title Current pricing service can’t support rapid merchant growth
      p._text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    ._grid.-default-3
      ._card(v-for="item in PROBLEMS")
        p._large-number {{item.number}}
        p._title {{item.title}}
        p._text {{item.text}}
  
  section.research-section._fade-in
    div
      .section-title
        h2 research
        p._title It takes 5 different Google Sheets to get a program implemented
        p._text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      ul
        li.icon-list._flex-center(v-for="item in RESEARCH")
          img(:src="item.icon")
          | {{item.text}}
    .image-container
      img(src="@/assets/pricing-revamping/research.png")
      p.caption 10 interviews, 2 workshop, 2 days of shadowing
  
  .journey-map._bleeding
    h3 Pricing Journey Map
    img(src="@/assets/pricing-revamping/journey-map.png")
  
  section._fade-in
    .section-title
      h2 project vision
      p._title Streamline the process and expand pricing capacity
      p._text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    ._grid.-default-3
      ._card(v-for="item in PROCESS")
        img._icon(:src="item.icon")
        p._title {{item.title}}
        p._text {{item.text}}
  
  section._fade-in
    .section-title
      h2 scoping
      p._title Streamline the process and expand pricing capacity
      p._text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    img(src="@/assets/pricing-revamping/parts.png")
  
  section
    .section-title
      h2 exploration
      p._title Streamline the process and expand pricing capacity
      p._text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    .parts._card._fade-in(v-for="(part, partIndex) in EXPLORATION")
      p: span._tag(:class="{[`-tag-${partIndex + 1}`]: true}") {{part.tag}}
      h3 {{part.title}}
      p {{part.text}}
      ._grid.-default-4
        .option(v-for="(option, optionIndex) in part.options")
          img(:src="option.image", :class="{[`-selected-${partIndex + 1}`]: optionIndex === 0}")
          p.title {{option.title}}
          p {{option.text}}
  
  section._fade-in
    .section-title
      h2 final design
      h3: span._tag.-tag-1 Part 1
      p._title Streamline the process and expand pricing capacity
      p._text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    ._grid.-default-2
      img(v-for="item in FINAL_DESIGN_1", :src="item")
  
  section._fade-in
    .section-title
      h3: span._tag.-tag-2 Part 2
      p._title Streamline the process and expand pricing capacity
      p._text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    img(src="@/assets/pricing-revamping/_placeholder.png")
  
  section._fade-in
    .section-title
      h2 implementation
      p._title Build close relationship with engineer and product
      p._text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  
  section._fade-in
    .section-title
      h2 impact
      p._title Build close relationship with engineer and product
      p._text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    ._grid.-default-3
      ._card(v-for="item in PROCESS")
        img._icon(:src="item.icon")
        p._title {{item.title}}
        p._text {{item.text}}
</template>

<script>
import {fadeInElement} from '@/helpers';

export default {
  data() {
    return {
      PROBLEMS: [
        {number: 6, title: 'Teams', text: 'Involves to create and implement a pricing program'},
        {number: 3.5, title: 'Hours', text: 'Spent to implement one financing program'},
        {number: 80, title: 'Pricing programs', text: 'Created each month, but the team is struggle to catch up'},
      ],
      RESEARCH: [
        {text: 'Duplicated manual process that cause  errors and time consuming', icon: require('@/assets/pricing-revamping/icon-tool.svg')},
        {text: 'With more pricing feature added, them are struggle to build on top of current system', icon: require('@/assets/pricing-revamping/icon-build.svg')},
        {text: 'We don’t have enough data for effective pricing and analysis', icon: require('@/assets/pricing-revamping/icon-no-data.svg')},
      ],
      PROCESS: [
        {title: 'Automation', text: 'Reduce manual operational process to speed up pricing process', icon: require('@/assets/pricing-revamping/icon-loading.svg')},
        {title: 'Scalibility', text: 'Design a scalibiity to add new pricing levers', icon: require('@/assets/pricing-revamping/icon-expand.svg')},
        {title: 'Data Enhancement', text: 'Start to foundation of collecting and displaying data for effective pricing', icon: require('@/assets/pricing-revamping/icon-data.svg')},
      ],
      EXPLORATION: [
        {tag: 'Part 1', title: 'Create pricing program', text: 'Merchant pricing team need to create a pricing program for merchant use in our system', options: [
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
        ]},
        {tag: 'Part 2', title: 'Create pricing program', text: 'Merchant pricing team need to create a pricing program for merchant use in our system', options: [
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
        ]},
        {tag: 'Part 3', title: 'Create pricing program', text: 'Merchant pricing team need to create a pricing program for merchant use in our system', options: [
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
          {image: require('@/assets/pricing-revamping/_placeholder.png'), title: 'Option A', text: 'Not scalable, doesn’t support deeper configuration '},
        ]},
      ],
      FINAL_DESIGN_1: [
        require('@/assets/pricing-revamping/_placeholder.png'),
        require('@/assets/pricing-revamping/_placeholder.png'),
        require('@/assets/pricing-revamping/_placeholder.png'),
        require('@/assets/pricing-revamping/_placeholder.png'),
      ],
      IMPACT: [
        {title: 'Automation', text: 'Reduce manual operational process to speed up pricing process', icon: require('@/assets/pricing-revamping/icon-loading.svg')},
        {title: 'Scalibility', text: 'Design a scalibiity to add new pricing levers', icon: require('@/assets/pricing-revamping/icon-expand.svg')},
        {title: 'Data Enhancement', text: 'Start to foundation of collecting and displaying data for effective pricing', icon: require('@/assets/pricing-revamping/icon-data.svg')},
      ],
    };
  },
  mounted() {
    this.$el.querySelectorAll('._fade-in').forEach((el) => {
      fadeInElement(el);
    });
  },
}
</script>

<style lang="scss" scoped>
@import 'project.scss';

.research-section {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 5em;

  @media (max-width: 800px){
    display: block;
  }
}

.caption {
  text-align: center;
}

.image-container {
  margin-top: 3em;
}

.journey-map {
  h3 {
    font-size: 1.5em;
    margin-bottom: 2em;
  }
}

.icon-list {
  margin: 2em 0;

  img {
    margin-right: .8em;
    width: 1.8em;
  }
}

.parts {
  margin: 2em 0;

  h3 {
    margin: .5em 0;
    font-size: 1.1em;
  }

  h3 + p {
    max-width: 300px;
    margin-bottom: 1.5em;
  }

  .option {
    font-size: 0.9em;

    .-selected-1 {box-shadow: 4px 4px 0 0 var(--accent-color-1);}
    .-selected-2 {box-shadow: 4px 4px 0 0 var(--accent-color-2);}
    .-selected-3 {box-shadow: 4px 4px 0 0 var(--accent-color-3);}

    .title {
      font-weight: bold;
      margin: 0.5em 0;
    }
  }
}

</style>