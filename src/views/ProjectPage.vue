<template lang="pug">
div(ref="projectPage")
  ProjectHeader

  template(v-if="!isPasswordProtected || passwordCorrect")
    PriceRevamping(v-if="projectId === 'pricing-revamping'")
    LoanApplicationForm(v-if="projectId === 'loan-application-form'")
    InvestorAnalytics(v-if="projectId === 'investor-analytics-dashboard'")
    SidebarToc(v-if="projectMounted", :pageDom="$refs.projectPage")
  
  form(v-else, @submit="checkPassword")
    p This project is password protected. Reach out to <a href="mailto:yinie.ux@gmail.com" target="_blank">me</a> if you are interested.
    input(type="password", autocomplete="current-password", v-model="password", placeholder="Password", @keyup.enter="checkPassword")
    button(@click="checkPassword") submit
    p {{passwordMessage}}

  Footer
</template>

<script>
import ProjectHeader from '@/components/ProjectHeader.vue';
import SidebarToc from '@/components/SidebarToc.vue';
import PriceRevamping from '@/projects/PriceRevamping.vue';
import LoanApplicationForm from '@/projects/LoanApplicationForm.vue';
import InvestorAnalytics from '@/projects/InvestorAnalytics.vue';
import Footer from '@/components/Footer.vue';
import {PROJECTS} from '@/PROJECT_DATA.js';
import {fadeInElement} from '@/helpers';

const PASSWORD = 'yinie-ux';

export default {
  components: {ProjectHeader, SidebarToc, PriceRevamping, InvestorAnalytics, LoanApplicationForm, Footer},
  data() {
    return {
      projectMounted: false,  // For TOC. The page ref is passed into ToC, thus ToC must render after the page is mounted
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
      // if (location.host.includes('localhost')) return false;
      return this.project.isPasswordProtected;
    },
  },
  mounted() {
    this._initProjectFeatures();
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
        this._initProjectFeatures();
      } else {
        this.passwordMessage = 'Eh-oh, wrong password... Feel free to ping me for the password!'
      }
    },
    _initProjectFeatures() {
      if (this.isPasswordProtected && !this.passwordCorrect) {
        return;
      }

      setTimeout(() => {
        this.projectMounted = true;
        this.$el.querySelectorAll('._fade-in').forEach((el) => {
          fadeInElement(el);
        });
      });
    }
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
    font-size: 12px;
    letter-spacing: 1px;
    color: #ffffff;
    background-color: #5257F6;
    margin-left: 8px;
    padding: 3px 12px;
    border: 1px solid #5257F6 ;
    

    
  }
}
</style>