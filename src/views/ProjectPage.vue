<template lang="pug">
div
  ProjectHeader(:projectId="$route.params.projectId")
  PriceRevamping(v-if="$route.params.projectId === 'pricing-revamping'")
</template>

<script>
import ProjectHeader from '@/components/ProjectHeader.vue';
import PriceRevamping from '@/projects/PriceRevamping.vue';

export default {
  components: {ProjectHeader, PriceRevamping},
  data() {
    return {
      
    };
  },
}
</script>

<style lang="scss" scoped>
</style>