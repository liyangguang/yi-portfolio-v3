<template lang="pug">
._content-width
  section._fade-in
    .section-title
      h2 problem
      p._title Current pricing service can’t support rapid merchant growth
      p._text Affirm has been growing our merchant network rapidly over the pase years. We’ve developed organic processes and tools to onboard merchants.  However,  there are too many processes, too many hand-offs, and too many tools. To scale we need to revamp the pricing sercive.
    ._grid.-default-3
      ._card(v-for="item in PROBLEMS")
        p._large-number {{item.number}}
        p._title {{item.title}}
        p._text {{item.text}}
  
  section._two-column-section._fade-in
    div
      .section-title
        h2 research
        p._title It takes 5 different Google Sheets to get a program implemented
        p._text To understand our current internal work flow, tools we are using and major pain points for different teams, me and the PM talked to 6 different teams, conducted 3 round of user research. I created a journey map of the pricing workflow. 

      ul
        li._icon-list(v-for="item in RESEARCH")
          img(:src="item.icon")
          | {{item.text}}
    .image-container
      img(src="@/assets/pricing-revamping/research.png")
      p._caption 10 interviews, 2 workshop, 2 days of shadowing
  
  .journey-map._bleeding
    h3 Pricing Journey Map
    img(src="@/assets/pricing-revamping/journey-map.png")
  
  section._fade-in
    .section-title
      h2 project vision
      p._title Streamline the process and expand pricing capacity
      p._text The whole team as well as all the stakeholder gather together and settledown the vision of pricing portal: Streamline the process and expand pricing capacity. 
    ._grid.-default-3
      ._card(v-for="item in PROCESS")
        img._icon(:src="item.icon")
        p._title {{item.title}}
        p._text {{item.text}}
  
  section._fade-in
    .section-title
      h2 New User Flow
      p._title Reduce the steps taken to implement from 15 to 5
      p._text In the old system, team averagly has to go through around 20 steps to get pricing program implemented for 1 merchant. With the new design, we are able to reduce steps to around 10. In addition, the new interface is also able to reduct the time and effort spend in each step.  We expect to see massive efficiency gain after the redesign.
    img(src="@/assets/pricing-revamping/parts.png")

  section
    .section-title
      h2 EXPLORAtion & Iteration
      p._title Every design details could impact user’s efficacy
      p._text As a tool that is used by our internal users daily, every extra click means more fraction is added to their tasks. After we finalize the user flow, I went through several iterations on interfact design. Below are two examples among all the iterations and explorations
    ._card.-container-card._fade-in(v-for="(part, partIndex) in EXPLORATION")
      p: span._tag(:class="{[`-tag-${partIndex + 1}`]: true}") {{part.tag}}
      h3 {{part.title}}
      p {{part.text}}
      ._grid.-default-2
        .option(v-for="(option, optionIndex) in part.options")
          img(:src="option.image", :class="{[`-selected-${partIndex + 1}`]: optionIndex === 0}")
          p.image-title {{option.title}}
          p {{option.text}}
  
  section._fade-in
    .section-title
      h2 final design
      p._title Streamlined workflow and rich data insights
    ._grid.-default-2
      div.final-container(v-for="item in FINAL_DESIGN_1")
        h3.image-title {{item.title}}
        p {{item.text}}
        img(:src="item.image")
    ._grid.-default-1
      div.final-container(v-for="item in FINAL_DESIGN_2")
        h3.image-title {{item.title}}
        p {{item.text}}
        img(:src="item.image")
    ._grid.-default-2
      div.final-container(v-for="item in FINAL_DESIGN_3")
        h3.image-title {{item.title}}
        p {{item.text}}
        img(:src="item.image")
  

  
  section._two-column-section._fade-in
    div
      .section-title
        h2 implementation
        p._title It takes a village to build a good product
        p._text Given the complexity of the project, communications between product, design, engineer and all different stakeholders are critical to ensure the project can move forward smoothly. I worked with product and Eng lead to establish and iterate our collbration process.
        p._text Every Mondy morning, product, engieer and design team (PED) will review backlog and decide on what to work on this week. Every Tuesday and Thursday, product, engineer and design will do a quick standup and then followed by design feedback or Eng demo or discuss small issues we came acorss this week. Bi-weekly stakeholder review is where we get design feedback from our stakeholders. Every other Friday, product, engineer and design will review last Sprint and reflect on what has been done well and what should improve.
    .image-container
      img(src="@/assets/pricing-revamping/Calender.png")
  
  section._fade-in
    .section-title
      h2 impact
      p._title Pricing portal become the central platform for managing pricing programs
      p._text Pricing portal launched in July 2020. Since then, we onboarded 4 teams and it has become the sourch of truth of all Affirm's active pricing program. All team has gained massive operation efficiency from it. 
    ._grid.-default-3
      ._card(v-for="item in IMPACT")
        p._large-number {{item.number}}
        p._title {{item.title}}
        p._text {{item.text}}
</template>

<script>
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
        {tag: 'Exmaple 1', title: 'How to apply pricing program features?', text: 'One challenge I run into while design the financing program flow is how should user mark down the features for a program on the cell level. ', options: [
          {image: require('@/assets/pricing-revamping/explortaion_example_1.png'), title: 'Option A - Toolbar', text: 'Not scalable, doesn’t support flexible configuration '},
          {image: require('@/assets/pricing-revamping/explortaion_example_2.png'), title: 'Option B - Tooltip panel', text: 'Contextual, scalable but list could get really long '},
          {image: require('@/assets/pricing-revamping/explortaion_example_3.png'), title: 'Option C - Modal', text: 'Disruptive, users can’t see  the context, extra click  to  close the modal   '},
          {image: require('@/assets/pricing-revamping/explortaion_example_4.png'), title: 'Option D - Side panel', text: 'Scalable, easy to implement'},
        ]},
        {tag: 'Example 2', title: 'How should user config rules and pricing programs?', text: 'I went through several iterations on how to set up when what condition run which finance program. ', options: [
          {image: require('@/assets/pricing-revamping/rules_engine_option_1.png'), title: '1st pass - big card', text: 'In each card, user will be able to set up criteria and add pricing program '},
          {image: require('@/assets/pricing-revamping/rules_engine_option_2.png'), title: '2nd pass - 2 column layout', text: 'New layout saves more vertical space and make the connection between rules and program much more clear '},
          {image: require('@/assets/pricing-revamping/rules_engine_option_3.png'), title: '3rd pass - ToolbarError-proofing priority', text: 'Using the card’s order as priority prevent the errors that could happen in input field '},
          {image: require('@/assets/pricing-revamping/rules_engine_option_4.png'), title: 'Final - Preset time & explict terms', text: 'Preset time based on most frequent use cases and display the term information '},
        ]},
      ],
      FINAL_DESIGN_1: [
        {title: 'Paste in pricing grid', text: 'The new pricing portal removes all the frictions of running script and mutiple times of copy and pasting', image: require('@/assets/pricing-revamping/Final_create_1.png')},
        {title: 'Apply features to grid', text: 'The system will identify all the cells that has higher pricing to remind users apply features for the extra charge. Multiple cell selection and side panel makes the process efficient.', image: require('@/assets/pricing-revamping/Final_create_2.png')},
      ],
      FINAL_DESIGN_2: [
        {title: 'Merchant homepage', text: 'Merchant homepage provides user basic performance data of a merchant. This is important for pricing team to be more effective on their pricing strategy,', image: require('@/assets/pricing-revamping/Final_merchant.png')},
        {title: 'Pricing package config', text: 'Package allows user to put programs that will be used at same in one group to reduce the effort of managing. This also alllow the system do more robust validation to prevent errors.', image: require('@/assets/pricing-revamping/Final_rule.png')},
      ],
      FINAL_DESIGN_3: [
        {title: 'Package list', text: 'Package list page shows users all the active or on deck pricing package and the performance of each package. ', image: require('@/assets/pricing-revamping/Final_package.png')},
        {title: 'Package schedule', text: 'The schedule tab visualize the pricing package in a timeline. This will provide a quick and clear view all what pricing package is live and what is on deck ', image: require('@/assets/pricing-revamping/Final_schedule.png')},
      ],
      IMPACT: [
        {number: 20, title: 'Seconds', text: 'to create 1 pricing program, which used to be 2 minutes'},
        {number: '200+', title: 'Programs', text: 'Created since pricing portal launched'},
        {number: '1000+', title: 'Merchants', text: 'Planned to be migrated managed in pricing portal since launch'},
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@import 'project.scss';

.image-container {
  margin-top: 3em;
}

.journey-map {
  h3 {
    font-size: 1.5em;
    margin-bottom: 2em;
  }
}

.image-title {
  font-weight: bold;
  margin-left: 0;
  margin-top: 12px;
  margin-bottom: 2px;
}

.final-container{
  margin-bottom: 40px;
}
</style>