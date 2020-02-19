<template>
  <div>
    <stage :disable-particles="disableParticles" />
    <home-section
      image="firmware.svg"
      alternative
    >
      <vue-headline level="2">About Us</vue-headline>
      <br />
      <vue-headline level="3"></vue-headline>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue sodales augue at consectetur. Etiam quis euismod lectus.</p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a congue eros, ac condimentum est. Integer lectus eros, pellentesque ac ante eu, rhoncus vulputate nibh. Fusce sed condimentum felis.
      </p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Proin massa tellus, accumsan at facilisis et, iaculis vel ex. Nunc quis egestas turpis, non congue nisl. Donec eu mi faucibus, lobortis sem eu, placerat nisi.
      </p>
    </home-section>

    <home-section
      image="maker.svg"
      flip
    >
      <vue-headline level="2">Vision</vue-headline>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Maecenas eget maximus justo. Sed quis sollicitudin mi, nec rutrum turpis.
      </p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Nunc tincidunt consectetur neque, at posuere lectus volutpat quis. Fusce auctor ante ligula, at laoreet diam aliquet at. Donec varius nibh ac turpis hendrerit, id porta tellus fringilla.
      </p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae ullamcorper leo, vel mattis enim.
      </p>
    </home-section>

    <home-section
      image="teamwork.svg"
      alternative
    >
      <vue-headline level="2">Projects</vue-headline>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Etiam magna mauris, lobortis sed felis id, facilisis gravida augue. Donec blandit, purus eu gravida maximus, neque dui luctus libero, sit amet maximus nunc tellus vitae lorem.
      </p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Morbi laoreet porttitor dui, a lacinia mauris commodo ut. Phasellus feugiat, metus nec fermentum faucibus, nisi eros sodales nunc, cursus ultricies ipsum ex ut mi.
      </p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Donec sit amet urna ut metus laoreet consectetur at quis mauris. Proin mollis ante non augue efficitur, quis sagittis ante porta.
      </p>
    </home-section>

    <home-section
      image="hangout.svg"
      flip
    >
      <vue-headline level="2">The Team</vue-headline>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Nam ultrices posuere leo, id tincidunt augue vulputate quis. Mauris rutrum eget odio nec interdum. Nulla eget arcu at mauris hendrerit commodo.
      </p>
      <br />
      <vue-headline level="3">Lorem Ipsum</vue-headline>
      <p>
        Sed eu nunc tristique, tempus justo ut, placerat nisi. Ut tempus a diam eget porttitor. Curabitur aliquet pretium mi in sagittis. Donec ac felis turpis. 
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

export default {
  metaInfo: {
    title: 'SUTD Organisation of Autonomous Robotics',
    meta: [
      {
        name: 'description',
        content:
          'sutdsoar - SUTD Organisation of Autonomous Robotics Website',
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
        content:
          'sutdsoar - SUTD Organisation of Autonomous Robotics Website',
      },
      {
        name: 'og:description',
        content:
          'sutdsoar - SUTD Organisation of Autonomous Robotics Website',
      },
      { name: 'og:image:url', content: 'https://sutdsoar.herokuapp.com/logo.svg' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@jamestiotio' },
      {
        name: 'twitter:title',
        content:
          'sutdsoar - SUTD Organisation of Autonomous Robotics Website',
      },
      { name: 'twitter:url', content: 'https://sutdsoar.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://sutdsoar.herokuapp.com/logo.svg' },
      {
        name: 'twitter:description',
        content:
          'sutdsoar - SUTD Organisation of Autonomous Robotics Website',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>
