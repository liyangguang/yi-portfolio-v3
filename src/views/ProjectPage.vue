<template lang="pug">
div(ref="projectPage")
  ProjectHeader

  PriceRevamping(v-if="$route.params.projectId === 'pricing-revamping'")
  LoanApplicationForm(v-if="$route.params.projectId === 'loan-application-form'")
  
  SidebarToc(v-if="pageMounted", :pageDom="$refs.projectPage")
</template>

<script>
import ProjectHeader from '@/components/ProjectHeader.vue';
import SidebarToc from '@/components/SidebarToc.vue';
import PriceRevamping from '@/projects/PriceRevamping.vue';
import LoanApplicationForm from '@/projects/LoanApplicationForm.vue';

export default {
  components: {ProjectHeader, SidebarToc, PriceRevamping, LoanApplicationForm},
  data() {
    return {
      pageMounted: false,
    };
  },
  mounted() {
    this.pageMounted = true;
  }
}
</script>

<style lang="scss" scoped>
</style>