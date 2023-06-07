<template>
  <div class="ui-slider">
    <UISlide />

    <div class="ui-slider__controls">
      <button class="ui-slider__control">
        <mdicon
          class="ui-slider__arrow-center_left"
          name="chevron-left"
        />
      </button>

      <button class="ui-slider__control">
        <mdicon
          name="chevron-right"
          class="ui-slider__arrow-center"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UISlide from './UISlide.vue'
</script>

<style lang="scss">
.ui-slider {
  position: relative;
  width: 100%;
  max-width: 1024px;
  height: 215px;

  &__controls {
    display: flex;
    position: absolute;
    right: 12px;
    bottom: 12px;
  }

  &__control {
    background: $white;
    border-radius: 15%;
    color: $gray-400;
    cursor: pointer;
    font-size: 40px;
    height: 50px;
    width: 50px;
    border: none;
    margin-right: 7px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__arrow-center svg {
    transform: translate(1px, -3px);
  }

  &__arrow-center_left svg {
    transform: translateY(-3px);
  }
}
</style>
