<template>
  <div class="ui-slider">
    <UISlide />

    <div class="ui-slider__controls">
      <button class="ui-slider__control">
        <mdicon name="chevron-left" />
      </button>

      <button class="ui-slider__control">
        <mdicon name="chevron-right" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UISlide from '@/components/UISlider/UISlide.vue'
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
}
</style>
