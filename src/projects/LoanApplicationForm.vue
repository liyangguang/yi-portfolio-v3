<template lang="pug">
._content-width
  section._fade-in
    .section-title
      h2 background
      p._title Pre-qualification for student loan
      p Credible is a marketplace for student loans, student loan refinancing, and personal loan. Pre-qualification is an important part of the whole process: By filling one pre-qualification form, users will be able to see a list of qualified lenders and rates.
    img(src="../assets/loan-application-form/overall-process.png")

  section._fade-in
    .section-title
      h2 goal and metrics
      p._title Increase the conversation of pre-qualification form
      p._text Before I started, it’s important to understand the problem and make sure all the stakeholders are aligned on the same goal. So I talked to the product manager, loan operation and client success team and listed out the following design success metrics.
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
      h3 research
      p._title Users don't want to create account
      p._text Conversation data from Google Analytics reveals that there is a large drop off on the last step. We learned from survey that users don't want to create account. But an account is necessary for finalizing loan application. Our hypothesis is that different flow of creating accounts will impact conversion. Here are several options I’ve explored.
  ._bleeding: ._grid.-default-4
    div(v-for="option in ROUND_1_ACCOUNT_OPTIONS")
      p.title {{option.title}}
      p {{option.text}}
      img(:src="option.image")

  section._fade-in
    .section-title
      h3 Design and A/B testing
      p._title Test creating account flow
      p._text One of the challenges we have is that, in order to track different designs impact around the full funnel, the traffic on Credible is not large enough to run multiple ab testing at the same time. So we have to select one direction and run only 2 to 3 testing at the same time to confidently test the hypothesis. We ranked these three directions based on impact and effort. We choose to test the create account flow because we believe it will have the highest impact with relative low implementation efforts.
    template(v-for="option in ROUND_1_CREATE_ACCOUNT_OPTIONS")
      h4 {{option.title}}
      p {{option.text}}
      img(:src="option.image")

  section._fade-in
    .section-title
      h3 Result
      p._title Creating accounts at beginning won
      p._text The experiment has been running for about 1 months to make sure we have enough data and draw the conclusion without bias.
    ._grid.-default-3
      ._card(v-for="item in ROUND_1_RESULT")
        p._large-number {{item.number}}
        p._title {{item.title}}
        p._text {{item.text}}

  section._fade-in
    .section-title
      h3 Learning
      p._title Creating accounts is not the real problem
    ol
      li Even though variation 1 and 2 ’s form conversion are pretty similar, but creating accounts first have a more positive impact later in the process with indicates that our hypothesis is correct. Users who are willing to create accounts first have higher intend and will convert better later in the process.
      li Separating the email address and password field variation performs worst. This indicates that “creating account” itself is not the real problem. There is some reason behind “I don’t want to create account”
  
  .round-title
    h2 Round 2
    p Dig deep into the problem
  
  section._fade-in
    .section-title
      h3 research
      p._title Why don’t users want to create accounts?
    h4 Quantitative
    p The 1st round experiment has set up a good foundation for us. The data reveals that on creating account page, there is a large amount of drop off, but after creating accounts, there are very few users abandon the form. So it’s clear that the biggest opportunity is how can get more low intend users filling the form and checking their rates.
    h4 Qualitative
    p The testing result from the first iteration also reveals that what really bothers users is not creating accounts, we need to dip deeper to learn the reason behind that. So I did more depth interview with users. The real insight comes after I asked several why.
    img(src="@/assets/loan-application-form/round2-research.jpg")
    p The user research reveals the real friction of creating accounts is that we are asking user their personal/private information without offering them any value. Users don’t have any idea of what’s going happen next and what they can get.
  
  section._fade-in
    .section-title
      h3 Hypothesis and Concepts
      p._title Transparency at beginning of the form
      p._text Based on user research the primary problem we are trying to address is to build trust with users through bringing more transparency.
    p Same reason as mentioned above, now we need to choose directions we want to test. Since the improvements are all focusing on create account page, efforts to implement the design are about the same, this time I did internal concept testing. With the testing, I asked participants to rank different concepts based on the helpfulness. Concept 5 and concept 3 get the highest ranking. Below is the summary of this concept evaluation:
  ._bleeding: ._grid.-default-2
    div(v-for="option in ROUND_2_TRANSPARENT")
      h4 {{option.title}}
      img(:src="option.image")
      p {{option.text}}

  section._fade-in
    .section-title
      h3 Design Iterations
      p._title Iterations on rate estimator
      p._text After the internal testing, I decided to move forward with the video walkthrough concept and the rate estimator concept. It’s time to push the details. I did several iterations to make sure users can understand how to use it.
  ._bleeding: ._grid.-default-2
    div(v-for="option in ROUND_2_ITERATIONS")
      h4 {{option.title}}
      img(:src="option.image")
      p {{option.text}}
  
  section._fade-in
    .section-title
      h3 Testing
      p._title Design variations
    template(v-for="option in ROUND_2_FINAL")
      h4 {{option.title}}
      p {{option.text}}
      img(:src="option.image")
  
  section._fade-in
    .section-title
      h3 result
      p._title Video variation won the test
    ._grid.-default-3
      ._card(v-for="item in ROUND_2_RESULT")
        p._large-number {{item.number}}
        p._title {{item.title}}
        p._text {{item.text}}
  
  section._fade-in
    .section-title
      h3 Learning
      p._title Transparency helps to build trust
    ul
      li From the winning variation, we learned that providing users context about the process and what to expect appears to help build trust with users and contribute to higher overall conversion after a user has been prequalified.
      li Even though rates estimator concept performs worse than the video we still want to understand why users are leaving. So I put up an exit survey asking users why they are leaving this page. It turns out that the primary reason is that the rates are too high for them. Even though this variation didn’t perform very well, we still think this is an interesting concept that we could evolve and use in other scenarios in the future.

  .round-title
    h2 Round 3
    p Opportunities on Mobile
  
  section._fade-in
    .section-title
      h3 Research
      p._title Mobile traffic ramped up
    h4 Quantitative
    p Loan application is complex and we don't expect users finish the process on their phone. However, in 2017 Credible’s mobile traffic start to ramp up and exceed desktop traffic but the form conversion rate on mobile is pretty low. So it’s time to put more investment on mobile and improve the experience on mobile.
    h4 Qualitative
    p In order to understand the pain points and frictions on mobile, I did a usability test on the old mobile form. Here are the key insights
    ul
      li Limited information in viewport causes a lot of scrolling back and forth.
      li Users’ initial impression is the form is really long and would take them a while to finish
      li Users had difficulties answering some questions (e.g. income), they need to click tooltips and use the help content. But tooltips on mobile generally doesn't have a good ux.

  section._fade-in
    .section-title
      h3 Hypothesis and Concepts
      p._title More efficient way to fill the form on mobile
      p._text Based on the explorations I did on first round. , here are the approaches we can make form filling more efficient
    ._grid.-default-3
      ._card(v-for="item in ROUND_3_RESEARCH")
        img._icon(:src="item.icon")
        p._title {{item.title}}
        p._text {{item.text}}
    p I came up with 3 options: the chat UI, one question per step and linking to other social network to prefill information. In order to pick the which option we are going to implement, we listed out how each concept would solve the problem and how difficult it is to implement and decide to move forward with one question per page option first.
  ._bleeding
    table.option-compare-table
      tr
        td
        td(v-for="(option, index) in ROUND_3_OPTIONS"): img(:src="option.image")
      tr(v-for="(item, itemI) in ROUND_3_RESEARCH")
        td: b {{item.title}}
        td(v-for="(option, index) in ROUND_3_OPTIONS", :class="{'-check': option.problems[itemI]}")
      tr
        td: b Effort to implement
        td(v-for="(option, index) in ROUND_3_OPTIONS") {{option.effort}}
  
  section._fade-in
    .section-title
      h3 Design Iterations
      p._title Iterations on one question per page
    h4 Iteration 1: Surface helper content
    p Instead of clicking into tooltip to learn helper content, the new design surface the helper content under each question.
    ._grid.-default-2
      img(src="@/assets/loan-application-form/round3-iteration1-1.png")
      img(src="@/assets/loan-application-form/round3-iteration1-2.png")
    h4 Iteration 2: Turn dropdown to multiple selections
    p I tested the prototype above, it successfully reduced the back and forth scrolling. But I still found that all the drop-down fields still requires multiple taps. In order to simplify this part, I changed the drop-down fields to multiple selection fields.
    ._grid.-default-2
      img(src="@/assets/loan-application-form/round3-iteration2-1.png")
      img(src="@/assets/loan-application-form/round3-iteration2-2.png")
    p The challenge here is that if the selection has more than five options, what should we do? The product manager helped me analysis the option selection data. We found out that the first four selected options cover 93.17% of our users. So the solution is to surface the top four selected options and hide other options in “Other”.
    ._grid.-default-2
      img(src="@/assets/loan-application-form/round3-iteration2-3.jpg")
      img(src="@/assets/loan-application-form/round3-iteration2-4.jpg")
    h4 Iteration 3: Add delight to the product
    p The last iteration is to add more delight to the design and make the look and feel more friendly for our users. So I added icons on every page and animations on some key pages.
    ._grid.-default-2
      img(src="@/assets/loan-application-form/round3-iteration3-1.png")
      img(src="@/assets/loan-application-form/round3-iteration3-2.png")

  section._fade-in
    .section-title
      h3 Testing
      p._title Design variations
      p._text We tested the final one question per page design with old design (baseline). Below is the two design’s overall flow.
    ._grid.-default-2
      img(src="@/assets/loan-application-form/round3-variation1.gif")
      img(src="@/assets/loan-application-form/round3-variation2.gif")
  
  section._fade-in
    .section-title
      h3 Result and learning
      p._title One question per page won the test
      p._text Variation 1 has an 18.5% lift on form conversation compared to baseline and an 8.8% lift on closing loan. We decided to call one question per page as the winner and allocate 100% traffic.
    ._grid.-default-3
      ._card(v-for="item in ROUND_3_LEARNING")
        img._icon(:src="item.icon")
        p._title {{item.title}}
        p._text {{item.text}}
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
      ROUND_1_ACCOUNT_OPTIONS: [
        {title: 'Current', text: 'Create account at end of form', image: require('@/assets/loan-application-form/round1-flow0.png')},
        {title: 'Option 1', text: 'Create account at beginning', image: require('@/assets/loan-application-form/round1-flow1.png')},
        {title: 'Option 2', text: 'Create account after result summary', image: require('@/assets/loan-application-form/round1-flow2.png')},
        {title: 'Option 3', text: 'Separate email and password', image: require('@/assets/loan-application-form/round1-flow3.png')},
      ],
      ROUND_1_CREATE_ACCOUNT_OPTIONS: [
        {title: 'Baseline: create accounts at the end of the form', text: 'In the current design, we try to push the difficult part to the end of form so that user will start easily and make through the end with momentum. But we are still seeing a lot of drop-off at the create account step.', image: require('@/assets/loan-application-form/round1-test1.jpg')},
        {title: 'Create account first', text: 'Creating accounts first will definitely cause a lot of drop-off at the very beginning. But on the other hand, by revealing the most sensitive information at the front, this will filter out low intent users and improve the conversion later in the process.', image: require('@/assets/loan-application-form/round1-test2.jpg')},
        {title: 'Create account after user get results', text: 'Give user tease of the result will motivate users to create accounts. For users who receive rates, give users a tease of how many options they have got and overlay the modal on their dashboards. But for users who didn’t receive any rates, we don’t want to mislead them so the main message is “Your result is ready” and it won’t be an overlay of the dashboard.', image: require('@/assets/loan-application-form/round1-test3.jpg')},
        {title: 'Ask email at front and password at the end', text: 'The hypothesis here is that separating email and password will reduce the feeling of creating accounts so that user feel this is less friction.', image: require('@/assets/loan-application-form/round1-test4.jpg')},
      ],
      ROUND_1_RESULT: [
        {title: 'Creating accounts first', text: 'Variation 1 has 1.3% increase on form conversion and 15.7% increase on from starting the form to close a loan.', number: '+15.7%'},
        {title: 'After getting results', text: 'Variation 3 has negative performance compared to baseline. It has a 6.4% decrease on form conversion and 1.9% decrease on close loan.', number: '-6.4%'},
      ],
      ROUND_2_TRANSPARENT: [
        {title: 'Option 1 - Value prompt', text: 'Participants like it\'s straightforward but value prompt is too vague and doesn’t resonate with them', image: require('@/assets/loan-application-form/round2-option1.png')},
        {title: 'Option 2 - Social proof', text: 'Participants think social proof is important but they prefer reviews from the third party. Participant won’t trust testimonials.', image: require('@/assets/loan-application-form/round2-option2.png')},
        {title: 'Option 3 -Process Video', text: 'Participants find it’s very helpful to understand the process, the video makes it easier to understand', image: require('@/assets/loan-application-form/round2-option3.png')},
        {title: 'Option 4 - Sample dashboard', text: 'Participants like that they can know what lenders are on our platform but the information is too generic', image: require('@/assets/loan-application-form/round2-option4.png')},
        {title: 'Option 5 - Estimator', text: 'Participants all feel this is really helpful to get an estimated range before jumping into creating accounts they indicated that if the rates are good they are more likely to sign up.', image: require('@/assets/loan-application-form/round2-option5.png')},
      ],
      ROUND_2_ITERATIONS: [
        {title: 'Iteration 1', text: '(Option 5 from the previous step)', image: require('@/assets/loan-application-form/round2-iteration1.png')},
        {title: 'Iteration 2', text: 'Design with real content and data', image: require('@/assets/loan-application-form/round2-iteration2.png')},
        {title: 'Iteration 3', text: 'Rate chart add too much cognitive load', image: require('@/assets/loan-application-form/round2-iteration3.png')},
        {title: 'Iteration 4', text: '1. Credit score section took too much space. 2. Too much number to process', image: require('@/assets/loan-application-form/round2-iteration4.png')},
        {title: 'Iteration 5', text: 'Use red on poor credit score bad may give user negative feeling', image: require('@/assets/loan-application-form/round2-iteration5.png')},
        {title: 'Iteration 6', text: 'Users indicated they don’t know the slider is interactive', image: require('@/assets/loan-application-form/round2-iteration6.gif')},
      ],
      ROUND_2_FINAL: [
        {title: 'Variation 1: Video to illustrate the process', text: 'This variation features a quick walkthrough video of our process up to a dashboard. The hypothesis was that showing users our simple process would help users know what to expect, and therefore make the process feel known and simple.', image: require('@/assets/loan-application-form/round2-variation1.gif')},
        {title: 'Variation 2: Rate estimator', text: 'This variation aims to see if showing potential rates would, in fact, increase sign-ups and overall conversion. This variation features an interactive slider where users can estimate their credit score (by 10 point increments), and we will display the lowest possible rate across lenders.', image: require('@/assets/loan-application-form/round2-variation2.gif')},
      ],
      ROUND_2_RESULT: [
        {title: 'Video variation', text: 'Video variation has a slightly 1.8% decrease on account creating compared to baseline, but it has a 2.1% lift on form conversion and 6.6% lift on close loan', number: '+6.6%'},
        {title: 'Rate estimator variation', text: 'Rate estimator variation has 12.3% decrease on account creating compared to baseline and 3.6% decrease on close loan.', number: '-3.6%'},
      ],
      ROUND_3_RESEARCH: [
        {title: 'Reduce scroll back and forth', text: '', icon: require('@/assets/loan-application-form/icon-scroll.svg')},
        {title: 'Make the form shorter or make the form feel shorter', text: '', icon: require('@/assets/loan-application-form/icon-short.svg')},
        {title: 'Surface the help content to streamline the process', text: '', icon: require('@/assets/loan-application-form/icon-help.svg')},
        {title: 'Add more humanize factor to the form', text: '', icon: require('@/assets/loan-application-form/icon-human.svg')},
      ],
      ROUND_3_OPTIONS: [
        {problems: [true, true, true, false], effort: 'Easy', image: require('@/assets/loan-application-form/round3-option1.png')},
        {problems: [true, true, false, true], effort: 'Medium', image: require('@/assets/loan-application-form/round3-option2.png')},
        {problems: [false, true, true, false], effort: 'Hard', image: require('@/assets/loan-application-form/round3-option3.png')},
      ],
      ROUND_3_LEARNING: [
        {title: '', text: 'The analysis validated our hypothesis that asking one question at one time streamline the process.', icon: require('@/assets/loan-application-form/icon-one.svg')},
        {title: '', text: 'By surfacing the help content and why we are asking these questions, users have less difficulty answering questions. We see a decreased drop off rate on some “hard” questions.', icon: require('@/assets/loan-application-form/icon-help.svg')},
        {title: '', text: 'In the future, we are planning to test the new design also on the desktop', icon: require('@/assets/loan-application-form/icon-desktop.svg')},
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

.round-title {
  margin: -5em 0;

  h2 {
    text-transform: uppercase;
    opacity: 0.3;
    font-size: 3em;
  }

  p {
    font-size: 2em;
    position: relative;
    bottom: 1em;
  }
}

h4 {
  font-size: 1.2em;
  margin: 1em 0 .5em;
}

.option-compare-table {
  border-collapse: collapse;
  width: 100%;

  td {
    border: 1px solid #777;
    padding: 0.5em;
    text-align: center;

    &.-check {
      background-image: url(../assets/loan-application-form/icon-check.svg);
      background-size: 1.6em;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
}
</style>