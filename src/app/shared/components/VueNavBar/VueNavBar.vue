<template>
  <div v-bind:class="[$style.vueNavBar, showNavbar ? $style.solid : $style.black]" ref="nav" id="nav">
    <div>
      <slot name="left" />
    </div>
    <div>
      <slot name="middle" />
    </div>
    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'VueNavBar',
  data(): any {
    return {
      showNavbar: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.showNavbar = false;
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      let element = document.getElementById('about');
      let coordinate = element.offsetTop;

      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }

      if (currentScrollPosition < coordinate) {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueNavBar {
  width: $nav-bar-width;
  min-height: $nav-bar-height;
  color: #171717;
  padding: $nav-bar-padding;
  z-index: $nav-bar-index;
  position: fixed;
  top: 0;
  left: 0;
  background: #171717;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;

  div {
    flex: 0 0 33.333333%;
    align-content: center;
    justify-content: center;
    display: flex;

    &:last-child {
      justify-content: flex-end;
    }
  }
}

.solid {
  color: $nav-bar-color;
  background: $nav-bar-bg;
  transition: background 0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03);
}

.black {
  color: #171717;
  background: #171717;
  transition: background 0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03);
}
</style>
