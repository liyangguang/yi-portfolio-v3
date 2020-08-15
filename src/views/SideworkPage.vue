<template lang="pug">
main._content-width
  section.sideworks-group
    h1 UI Design
    img(src="@/assets/sidework/ui_admin_blue.png")
    img(src="@/assets/sidework/ui_admin_gold.png")
    img(src="@/assets/sidework/ui_halloween.jpg")
    img(src="@/assets/sidework/ui_invest.png")
    img(src="@/assets/sidework/ui_landing_page.jpg")
    img(src="@/assets/sidework/ui_log_in.jpg")
    img(src="@/assets/sidework/ui_material_design.jpg")
    img(src="@/assets/sidework/ui_sleep.jpg")
    img(src="@/assets/sidework/ui_task.jpg")
    img(src="@/assets/sidework/ui_time_up.jpg")
  section.sideworks-group
    h1 Illustrations
    img(src="@/assets/sidework/illustration_bubble_tea.png")
    img(src="@/assets/sidework/illustration_korean_bbq.png")
    img(src="@/assets/sidework/illustration_milk_tea.png")
    img(src="@/assets/sidework/illustration_mountain.png")
    img(src="@/assets/sidework/illustration_popsicles.png")
    img(src="@/assets/sidework/illustration_survey.jpg")
    img(src="@/assets/sidework/illustration_tamagoyaki.png")

  section.sideworks-group
    h1 Animations and Prototypes
    img(src="@/assets/sidework/prototype_tic-tac-toe.gif")
    img(src="@/assets/sidework/animation_clock.gif")
    img(src="@/assets/sidework/animation_wave.gif")

  section.sideworks-group
    h1 Lettering and Drawings
    img(src="@/assets/sidework/lettering_1.png")
    img(src="@/assets/sidework/lettering_2.png")
    img(src="@/assets/sidework/lettering_3.png")
    img(src="@/assets/sidework/lettering_4.png")
    img(src="@/assets/sidework/lettering_5.png")
    img(src="@/assets/sidework/lettering_6.png")
    img(src="@/assets/sidework/lettering_7.png")
    img(src="@/assets/sidework/lettering_8.png")
    img(src="@/assets/sidework/lettering_9.png")
    img(src="@/assets/sidework/drawing_1.png")
    img(src="@/assets/sidework/drawing_2.png")
    img(src="@/assets/sidework/drawing_3.png")
    img(src="@/assets/sidework/drawing_4.png")
    img(src="@/assets/sidework/drawing_5.png")
    img(src="@/assets/sidework/drawing_6.png")
</template>

<style lang="scss" scoped>
.sideworks-group  {
  padding-top: 10em;
  column-count: 2;
  column-gap: 4em;

  & > * {
    margin-bottom: 4em;
  }
}

.sideworks-title {
  position: relative;
  width: 90%;

  & > .letter {
    position: absolute;
    height: 12em;
    width: auto;
    right: 0;
    top: 0;
    transform: translate(-50%, -30%);
    z-index: -1;
  }
}

.mobile-video {
  text-align: center;

  & > video {
    width: 50%;
  }
}

/***************** mobile ********************/
@media screen and (max-width: 800px) {
  .sideworks-group {
    column-count: 1;
  }
}
</style>