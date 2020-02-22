<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />

    <vue-navigation-progress :is-navigating="isNavigating" />

    <vue-nav-bar :class="$style.navbar">
      <vue-button slot="right" color="primary" @click="buttonOnClickScroll('home')">HOME</vue-button>

      <vue-button slot="right" color="primary" @click="buttonOnClickScroll('about')">ABOUT</vue-button>

      <vue-button slot="right" color="primary" @click="buttonOnClickScroll('vision')">VISION</vue-button>

      <vue-button slot="right" color="primary" @click="buttonOnClickScroll('projects')">PROJECTS</vue-button>

      <vue-button slot="right" color="primary" @click="buttonOnClickScroll('team')">TEAM</vue-button>
    </vue-nav-bar>

    <router-view :class="$style.content" />

    <vue-footer />

    <vue-sidebar :class="$style.sidebar" id="sidebar">
      <vue-sidebar-group title="Navigation">
        <vue-sidebar-group-item to="#home"> <vue-icon-hashtag />Home </vue-sidebar-group-item>

        <vue-sidebar-group-item to="#about"> <vue-icon-hashtag />About </vue-sidebar-group-item>

        <vue-sidebar-group-item to="#vision"> <vue-icon-hashtag />Vision </vue-sidebar-group-item>

        <vue-sidebar-group-item to="#projects"> <vue-icon-hashtag />Projects </vue-sidebar-group-item>

        <vue-sidebar-group-item to="#team"> <vue-icon-hashtag />Team </vue-sidebar-group-item>
      </vue-sidebar-group>
    </vue-sidebar>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { loadLocaleAsync } from '@shared/plugins/i18n/i18n';
import '@shared/designSystem/global.scss';
import VueNavBar from '@components/VueNavBar/VueNavBar.vue';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueFooter from '@components/VueFooter/VueFooter.vue';
import VueNotificationStack from '@components/VueNotificationStack/VueNotificationStack.vue';
import VueCookieConsent from '@components/VueCookieConsent/VueCookieConsent.vue';
import VueNavigationProgress from '@components/VueNavigationProgress/VueNavigationProgress.vue';
import VueSidebar from '@components/VueSidebar/VueSidebar.vue';
import VueSidebarGroup from '@components/VueSidebar/VueSidebarGroup/VueSidebarGroup.vue';
import VueSidebarGroupItem from '@components/VueSidebar/VueSidebarGroupItem/VueSidebarGroupItem.vue';
import VueIconCode from '@components/icons/VueIconCode/VueIconCode.vue';
import VueIconBook from '@components/icons/VueIconBook/VueIconBook.vue';
import VueIconHashtag from '@components/icons/VueIconHashtag/VueIconHashtag.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueIconTwitterSquare from '@components/icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
import VueSelect from '@components/VueSelect/VueSelect.vue';
import VueIconPuzzlePiece from '@components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import VueModal from '@components/VueModal/VueModal.vue';
import { addNotification } from '@components/VueNotificationStack/utils';

export default {
  name: 'App',
  components: {
    VueModal,
    VueButton,
    VueIconPuzzlePiece,
    VueSelect,
    VueIconTwitterSquare,
    VueIconGithub,
    VueIconHashtag,
    VueIconBook,
    VueIconCode,
    VueSidebarGroupItem,
    VueSidebarGroup,
    VueSidebar,
    VueNavigationProgress,
    VueCookieConsent,
    VueNavBar,
    VueGrid,
    VueGridItem,
    VueFooter,
    VueNotificationStack,
  },
  data(): any {
    return {
      isNavigating: false,
      languages: [{ label: 'English', value: 'en' }],
    };
  },
  computed: {
    ...mapGetters('app', ['cookieConsentVersion', 'getLocale']),
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('app', ['changeLocale', 'setCookieConsentVersion']),
    ...mapActions('auth', ['createToken', 'revokeToken']),
    localeSwitch(locale: string) {
      loadLocaleAsync(locale).catch((error: Error) => console.log(error)); // tslint:disable-line

      this.changeLocale(locale);
    },
    initProgressBar() {
      this.$router.beforeEach((to: any, from: any, next: any) => {
        this.isNavigating = true;
        next();
      });
      this.$router.afterEach(() => {
        this.isNavigating = false;
      });
    },
    buttonOnClickScroll(loc: any) {
      var section = document.querySelector(`#${loc}`);
      section.scrollIntoView({ behavior: 'smooth' });
    },
  },
  created() {
    this.initProgressBar();
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';
@import '~@/app/shared/designSystem/reset';
@import '~@/app/shared/designSystem/typo';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

.logo {
  position: relative;
  top: $space-4;
  width: $space-24;
  height: $space-24;
}

.navbar {
  display: inline;
}

.sidebar {
  display: none;
}

@media (max-width: 505px) {
  .navbar {
    display: none;
  }
  .sidebar {
    display: inline;
  }
}

@media (min-width: 506px) {
  .navbar {
    display: inline;
  }
  .sidebar {
    display: none;
  }
}
</style>
