<template lang="pug">
div(ref="projectPage")
  ProjectHeader

  template(v-if="!needPassword || passwordCorrect")
    PriceRevamping(v-if="$route.params.projectId === 'pricing-revamping'")
    LoanApplicationForm(v-if="$route.params.projectId === 'loan-application-form'")
  
  .form(v-if="needPassword && !passwordCorrect")
    p This project is password protected. Reach out to <a href="mailto:yinie.ux@gmail.com" target="_blank">me</a> if you are interested.
    input(type="password", v-model="password", placeholder="Password", @keyup.enter="checkPassword")
    button(@click="checkPassword") submit

  SidebarToc(v-if="pageMounted", :pageDom="$refs.projectPage")
</template>

<script>
import ProjectHeader from '@/components/ProjectHeader.vue';
import SidebarToc from '@/components/SidebarToc.vue';
import PriceRevamping from '@/projects/PriceRevamping.vue';
import LoanApplicationForm from '@/projects/LoanApplicationForm.vue';

const PROJECTS_WITH_PASSWORD = ['pricing-revamping'];
const PASSWORD = 'yinie-ux';

export default {
  components: {ProjectHeader, SidebarToc, PriceRevamping, LoanApplicationForm},
  data() {
    return {
      pageMounted: false,
      passwordCorrect: false,
      password: '',
    };
  },
  computed: {
    needPassword() {return PROJECTS_WITH_PASSWORD.includes(this.$route.params.projectId);},
  },
  mounted() {
    this.pageMounted = true;  // TOC needs to be mounted after the page is ready
  },
  methods: {
    checkPassword() {
      this.passwordCorrect = this.password === PASSWORD;
      if (this.passwordCorrect) {
        window.scrollTo(0, 0);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  text-align: center;
  padding: 10em 0;

  p {
    margin-bottom: 2em;
  }

  a {
    background: var(--primary-color);
    font-weight: 700;
  }

  button {
    text-transform: uppercase;
  }
}
</style>