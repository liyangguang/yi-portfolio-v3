<template lang="pug">
div(ref="projectPage")
  ProjectHeader

  template(v-if="!isPasswordProtected || passwordCorrect")
    PriceRevamping(v-if="projectId === 'pricing-revamping'")
    LoanApplicationForm(v-if="projectId === 'loan-application-form'")
    InvestorAnalytics(v-if="projectId === 'investor-analytics-dashboard'")
  
  form(v-else, @submit="checkPassword")
    p This project is password protected. Reach out to <a href="mailto:yinie.ux@gmail.com" target="_blank">me</a> if you are interested.
    input(type="password", autocomplete="new-password", v-model="password", placeholder="Password", @keyup.enter="checkPassword")
    button(@click="checkPassword") submit
    p {{passwordMessage}}

  SidebarToc(v-if="pageMounted", :pageDom="$refs.projectPage")
</template>

<script>
import ProjectHeader from '@/components/ProjectHeader.vue';
import SidebarToc from '@/components/SidebarToc.vue';
import PriceRevamping from '@/projects/PriceRevamping.vue';
import LoanApplicationForm from '@/projects/LoanApplicationForm.vue';
import InvestorAnalytics from '@/projects/InvestorAnalytics.vue';
import {PROJECTS} from '@/PROJECT_DATA.js';
import {fadeInElement} from '@/helpers';

const PASSWORD = 'yinie-ux';

export default {
  components: {ProjectHeader, SidebarToc, PriceRevamping, InvestorAnalytics, LoanApplicationForm},
  data() {
    return {
      pageMounted: false,
      passwordCorrect: false,
      password: '',
      passwordMessage: '',
    };
  },
  computed: {
    projectId() {return this.$route.params.projectId;},
    project() {return PROJECTS.find((project) => project.id === this.projectId);},
    isPasswordProtected() {
      // Skip the password for local devserver
      if (location.host.includes('localhost')) return false;
      return this.project.isPasswordProtected;
    },
  },
  mounted() {
    this.pageMounted = true;  // TOC needs to be mounted after the page is ready
    this.$el.querySelectorAll('._fade-in').forEach((el) => {
      fadeInElement(el);
    });
  },
  methods: {
    checkPassword(e) {
      if (e) {
        e.preventDefault();
      }
      this.passwordCorrect = this.password === PASSWORD;
      if (this.passwordCorrect) {
        this.passwordMessage = '';
        window.scrollTo(0, 0);
      } else {
        this.passwordMessage = 'Eh-oh, wrong password... Feel free to ping me for the password!'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
form {
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