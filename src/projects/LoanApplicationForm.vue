<template lang="pug">
._content-width
  section._fade-in
    .section-title
      h2 background
      p._title Pre-qualification for student loan
      p Credible is a marketplace for student loans, student loan refinancing, and personal loan. Pre-qualification is an important part of the whole process: By filling one pre-qualification form, users will be able to see a list of qualified lenders and rates.
    img(src="../assets/loan-application-form/borrowing_process.png")

  section._fade-in
    .section-title
      h2 goal and metrics
      p._title Increase the conversation of pre-qualification form
      p._text  Before I started, it’s important to understand the problem and make sure all the stakeholders are aligned on the same goal. So I talked to the product manager, loan operation and client success team and listed out the following design success metrics.
    h3 Goals
    ._grid.-default-3
      ._card(v-for="item in GOALS")
        img._icon(:src="item.icon")
        p._title {{item.title}}
        p._text {{item.text}}
  
  .round-title
    h2 Round 1
    p Broad explorations

  section._fade-in
    .section-title
      h2 research
      p._title Users don't want to create account
      p._text Conversation data from Google Analytics reveals that there is a large drop off on the last step. We learned from survey that users don't want to create account. But an account is necessary for finalizing loan application. Our hypothesis is that different flow of creating accounts will impact conversion. Here are several options I’ve explored.
   
</template>

<script>
import {fadeInElement} from '@/helpers';

export default {
  data() {
    return {
      GOALS: [
        {title: 'Form conversion', text: 'Increase the conversion rate of pre-qualification form - increase the percentage of user who finished the form compared to the number of users who start the form.', icon: require('@/assets/loan-application-form/icon-form.svg')},
        {title: 'Process completion', text: 'Improve conversion rates through the full funnel: If the design has a positive impact on these aspects, we could consider it as successful.', icon: require('@/assets/loan-application-form/icon-filter.svg')},
        {title: 'User friendly', text: 'Improve the overall experience of the pre-qualification form. Make the form more efficient and friendly to fill out.', icon: require('@/assets/loan-application-form/icon-user-like.svg')},
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

h3 {
  margin: 1em 0 .5em;
}
</style>