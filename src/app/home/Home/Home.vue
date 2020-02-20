<template>
  <div>
    <stage :disable-particles="disableParticles" />

    <home-section image="firmware.svg" alternative>
      <div :class="$style.about" ref="about" id="about">
        <span :class="$style.bigspan">ABOUT US</span>
        <span :class="$style.smallspan">about us</span>
      </div>
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue sodales augue at consectetur. Etiam quis
        euismod lectus.
      </p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a congue
        eros, ac condimentum est. Integer lectus eros, pellentesque ac ante eu, rhoncus vulputate nibh. Fusce sed
        condimentum felis.
      </p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Proin massa tellus, accumsan at facilisis et, iaculis vel ex. Nunc quis egestas turpis, non congue nisl. Donec
        eu mi faucibus, lobortis sem eu, placerat nisi.
      </p>
    </home-section>

    <div :class="$style.vision" ref="vision" id="vision">
      <span :class="$style.bigspan">VISION</span>
      <span :class="$style.smallspan">vision</span>
      <p>
        To Nurture A Committed Robotics Community
        <br />By Building Skills To Take On Industry Projects.
      </p>
    </div>
    <home-section image="maker.svg" flip>
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>Maecenas eget maximus justo. Sed quis sollicitudin mi, nec rutrum turpis.</p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Nunc tincidunt consectetur neque, at posuere lectus volutpat quis. Fusce auctor ante ligula, at laoreet diam
        aliquet at. Donec varius nibh ac turpis hendrerit, id porta tellus fringilla.
      </p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae ullamcorper leo, vel mattis enim.</p>
    </home-section>

    <div :class="$style.title" ref="projects" id="projects">
      <span :class="$style.bigspan">PROJECTS</span>
      <span :class="$style.smallspan">projects</span>
    </div>
    <project-card image="teamwork.svg" title="doggo" info="wow"></project-card>

    <div :class="$style.title" ref="team" id="team">
      <span :class="$style.bigspan">THE TEAM</span>
      <span :class="$style.smallspan">the team</span>
    </div>
    <home-section image="hangout.svg" flip>
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Nam ultrices posuere leo, id tincidunt augue vulputate quis. Mauris rutrum eget odio nec interdum. Nulla eget
        arcu at mauris hendrerit commodo.
      </p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Sed eu nunc tristique, tempus justo ut, placerat nisi. Ut tempus a diam eget porttitor. Curabitur aliquet
        pretium mi in sagittis. Donec ac felis turpis.
      </p>
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import ProjectCard from '@/app/home/components/ProjectCard/ProjectCard.vue';

export default {
  metaInfo: {
    title: 'SUTD Organisation of Autonomous Robotics',
    meta: [
      {
        name: 'description',
        content: 'sutdsoar - SUTD Organisation of Autonomous Robotics Website',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
      },

      { name: 'og:url', content: 'https://sutdsoar.herokuapp.com/' },
      { name: 'og:site_name', content: 'sutdsoar' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content: 'sutdsoar - SUTD Organisation of Autonomous Robotics Website',
      },
      {
        name: 'og:description',
        content: 'sutdsoar - SUTD Organisation of Autonomous Robotics Website',
      },
      { name: 'og:image:url', content: 'https://sutdsoar.herokuapp.com/logo.svg' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@jamestiotio' },
      {
        name: 'twitter:title',
        content: 'sutdsoar - SUTD Organisation of Autonomous Robotics Website',
      },
      { name: 'twitter:url', content: 'https://sutdsoar.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://sutdsoar.herokuapp.com/logo.svg' },
      {
        name: 'twitter:description',
        content: 'sutdsoar - SUTD Organisation of Autonomous Robotics Website',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
    ProjectCard,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';
.vision {
  width: 100%;
  height: 45vh;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1923.617" height="584" viewBox="0 0 1923.617 584"><path id="Path_1160" data-name="Path 1160" d="M0,0S-70.5,3.529,411.016,64.927c458.3,59.788,645.477,12.188,901.414,0s-97.969,101.263,67.376,87.382S1920,0,1920,0V584H0Z" transform="translate(3.617)" fill="%23980031"/></svg>');
  background-size: cover;

  text-align: center;

  padding-top: 14rem;

  display: flex;
  flex-flow: column;
  .bigspan {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    opacity: $header-background-ghost-opacity;
  }
  .smallspan {
    margin-top: -1.5rem;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    z-index: 2;
  }
  p {
    font-size: 3rem;
    margin-top: 3rem;
    line-height: 6rem;
  }
}

.card {
  $border-radius: 0.2rem;
  $height: 30rem;
  $width: 40rem;
  $transition: cubic-bezier(0.17, 0.67, 0.5, 1.03);
  $timing: 0.4s 0.15s;
  background-color: white;
  width: $width;
  height: $height;
  border-radius: $border-radius;
  overflow: hidden;
  margin: 1rem; // remove this when finalizing the webapp
  .cover {
    width: $width;
    height: $height;
    background-color: $main-color;
    transform: translateX($width);
    transition: $timing $transition;
    padding: 2rem;
    .title {
      opacity: 0;
      transition: $timing $transition;
      margin: 1rem;
    }
    .info {
      margin: 1rem;
      opacity: 0;
      transition: $timing $transition;
      transition-delay: 200ms;
    }
  }
  &:hover {
    .title,
    .info {
      opacity: 1;
    }
    .cover {
      transform: translate(0);
    }
  }
}

.about {
  width: 100%;
  height: 20vh;
  background-size: cover;

  text-align: left;

  padding-top: 2rem;

  display: flex;
  flex-flow: column;
  .bigspan {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    opacity: $header-background-ghost-opacity;
  }
  .smallspan {
    margin-top: -1.5rem;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    z-index: 2;
  }
}

.title {
  width: 100%;
  height: 25vh;
  background-size: cover;

  text-align: center;

  padding-top: 8rem;

  display: flex;
  flex-flow: column;
  .bigspan {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    opacity: $header-background-ghost-opacity;
  }
  .smallspan {
    margin-top: -1.5rem;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: $header-background-letter-spacing;
    z-index: 2;
  }
}
</style>
