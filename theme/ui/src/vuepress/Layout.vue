<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="main-container">
      <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

      <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
        <template v-slot:top>
          <slot name="sidebar-top" />
        </template>
        <template v-slot:bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>

      <div class="custom-layout" v-if="$page.frontmatter.layout">
        <component :is="$page.frontmatter.layout" />
      </div>

      <Home v-else-if="$page.frontmatter.home" />

      <Page v-else :sidebar-items="sidebarItems">
        <template v-slot:top>
          <slot name="page-top" />
        </template>
        <template v-slot:bottom>
          <slot name="page-bottom" />
        </template>
      </Page>

      <SWUpdatePopup :updateEvent="swUpdateEvent" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import nprogress from 'nprogress';
import Home from './Home.vue';
import Navbar from './Navbar.vue';
import Page from './Page.vue';
import Sidebar from './Sidebar.vue';
import SWUpdatePopup from './SWUpdatePopup.vue';
import eventBus from './eventBus';
import { resolveSidebarItems } from './util';

export default {
  components: { Home, Page, Sidebar, Navbar, SWUpdatePopup },

  data() {
    return {
      isSidebarOpen: false,
      swUpdateEvent: null,
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll);

    // configure progress bar
    nprogress.configure({ showSpinner: false });

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start();
      }
      next();
    });

    this.$router.afterEach(() => {
      nprogress.done();
      this.isSidebarOpen = false;
    });

    eventBus.on('sw-updated', this.onSWUpdated);
  },
  beforeUnmount() {
    eventBus.off('sw-updated', this.onSWUpdated);
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },

    onSWUpdated(e) {
      this.swUpdateEvent = e;
    },
  },
};
</script>

<style lang="css">
.main-container {
  padding-left: 4%;
  padding-right: 4%;
}
</style>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
