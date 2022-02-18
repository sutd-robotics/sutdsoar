<template>
  <div :class="$style.learn">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <div :class="$style.learntext">
            <p>
              Guide to installing ROS Noetic on Ubuntu 20.04 (VirtualBox on Windows Machine)
            </p>
            <p :class="$style.learnlink">
              <a href="https://github.com/sutd-robotics/virtualbox-ubuntu-ros">Link to guide</a>
            </p>
          </div>
          <div :class="$style.learntext">
            <p>
              ROS Workshop 2022
            </p>
            <p :class="$style.learnlink">
              <a href="https://github.com/sutd-robotics/ros-ws-2022">Link to materials</a>
            </p>
          </div>
          <div :class="$style.learntext">
            <p>
              Visit our GitHub repo to access more learning resources!
            </p>
            <p :class="$style.learnlink">
              <a href="https://github.com/sutd-robotics/">github.com/sutd-robotics</a>
            </p>
          </div>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { registerModule } from '@/app/store';
import { IPreLoad } from '@/server/isomorphic';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '@/app/shared/components/VueButton/VueButton.vue';
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';

import { LearnModule } from '../module';

export default {
  metaInfo: {
    title: 'Learn',
  },
  components: {
    VueGrid,
    VueBreadcrumb,
    VueGridRow,
    VueGridItem,
    VueButton,
    VueHeadline,
  },
  data: (): any => ({}),
  methods: {},
  computed: {
    breadCrumbItems() {
      return [
        { label: this.$t('common.home' /* Home */), href: '/' },
        { label: this.$t('common.Learn' /* Learn */), href: '/learn' },
      ];
    },
  },
  beforeCreate() {
    registerModule('learn', LearnModule);
  },
  prefetch: (options: IPreLoad) => {
    registerModule('learn', LearnModule);

    /**
     * This is the function where you can load all the data that is needed
     * to render the page on the server and client side
     *
     * This function always returns a promise that means, if you want to
     * call a vuex action you have to return it, here is an example
     *
     * return options.store.dispatch('fetchLearn', '1');
     *
     * If you need to fetch data from multiple source your can also return
     * a Promise chain or a Promise.all()
     */
    return Promise.resolve();
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.learn {
  margin-top: $nav-bar-height;
  min-height: 500px;
  font-size: 1.5em;
  padding-bottom: 3em;
}
.learntext {
  padding-top: 5em;
  text-align: center;
}
.learnlink {
  padding-top: 1em;
  a:link,
  a:visited {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
