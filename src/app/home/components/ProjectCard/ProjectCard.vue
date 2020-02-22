<template>
  <div :class="$style.card" :style="{ 'background-image': 'url(' + image + ')' }" ref="card">
    <div :class="$style.cover" ref="cover">
      <h1 :class="$style.title">{{ title }}</h1>
      <div :class="$style.info">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueImage from '@components/VueImage/VueImage.vue';

export default {
  name: 'ProjectCard',
  components: { VueImage, VueGridItem, VueGridRow, VueGrid },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.card {
  $border-radius: 0.2rem;
  $height: 42rem;
  $width: 50rem;
  $transition: cubic-bezier(0.17, 0.67, 0.5, 1.03);
  $timing: 0.4s 0.15s;

  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: $width;
  height: $height;
  border-radius: $border-radius;
  overflow: hidden;
  display: inline-block;

  margin: 1rem; // remove this when finalizing the webapp

  .cover {
    width: 100%;
    height: 100%;
    background-color: $main-color;
    transform: translateX($width);
    transition: $timing $transition;

    padding: 2rem;
    display: flex;
    flex-direction: column;
    -webkit-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */

    .title {
      opacity: 0;
      transition: $timing $transition;

      margin: 1rem;
    }

    .info {
      margin: 1rem;

      opacity: 0;
      transition: $timing $transition;
      transition-delay: 300ms;
      text-align: justify;
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
</style>
