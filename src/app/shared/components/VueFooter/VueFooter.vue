<template>
  <div :class="$style.vueFooter">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <small
            >Copyright &copy; {{ year }} - SUTD Organisation of Autonomous Robotics. All rights reserved.<br />Designed
            by <a href="https://github.com/ulaladungdung" target="_blank">Dody</a>, developed by
            <a href="https://github.com/jamestiotio" target="_blank">James</a> and
            <a href="https://github.com/ulaladungdung" target="_blank">Dody</a>. <br />Maintained by
            <a href="https://github.com/iangohy" target="_blank">Ian</a> and
            <a href="https://github.com/Vemrthiss" target="_blank">Joel</a>.
          </small>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '../VueGrid/VueGrid.vue';
import VueGridItem from '../VueGridItem/VueGridItem.vue';
import VueGridRow from '../VueGridRow/VueGridRow.vue';
import VueIconGithubAlt from '../icons/VueIconGithubAlt/VueIconGithubAlt.vue';
import VueIconTwitterSquare from '../icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';

export default {
  name: 'VueFooter',
  components: {
    VueIconTwitterSquare,
    VueIconGithubAlt,
    VueGrid,
    VueGridItem,
    VueGridRow,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueFooter {
  padding: $footer-padding;
  background: $footer-bg;
  color: $footer-color;
  text-align: center;

  i {
    height: $font-size-h1;
    width: $font-size-h1;
    fill: $footer-link-color;
    margin: 0 $space-12;

    &:hover {
      fill: $footer-link-hover-color;
    }
  }

  small {
    display: inline-block;
    margin: $space-12 0;
  }

  a {
    color: $footer-link-color;
    font-weight: $footer-link-font-weight;

    &:hover {
      color: $footer-link-hover-color;
    }
  }
}
</style>
