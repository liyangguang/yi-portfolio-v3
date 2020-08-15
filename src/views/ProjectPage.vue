<template lang="pug">
div
  ProjectHeader

  PriceRevamping(v-if="$route.params.projectId === 'pricing-revamping'")
  LoanApplicationForm(v-if="$route.params.projectId === 'loan-application-form'")
</template>

<script>
import ProjectHeader from '@/components/ProjectHeader.vue';
import PriceRevamping from '@/projects/PriceRevamping.vue';
import LoanApplicationForm from '@/projects/LoanApplicationForm.vue';

export default {
  components: {ProjectHeader, PriceRevamping, LoanApplicationForm},
  data() {
    return {
      
    };
  },
}
</script>

<style lang="scss" scoped>
</style>