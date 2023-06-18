<template>
  <div
    class="ui-slide"
    :style="{backgroundImage: `url('${slide.imgLink}'`}"
  >
    <p class="ui-slide__title">
      {{ slide.title }}
    </p>

    <p class="ui-slide__text">
      {{ slide.text }}
    </p>

    <a
      class="ui-slide__tag"
      :class="`ui-slide__tag_style_${slide.tag.style}`"
    >
      {{ slide.tag.text }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { UISlide } from '@/components/UISlider/UISlide.types'

defineProps<{ slide: UISlide }>()
</script>

<style lang="scss">
.ui-slide {
  height: 215px;
  width: 100%;
  background-position: center;
  background-size: cover;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;

  &__title {
    width: 100%;
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 24px;
    color: $white;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.33), -1px 0px 2px rgba(255, 255, 255, 0);

    @include media('>xl') { 
      font-size: 2.25rem;
    }

    @include media('>lg') {
      font-size: 	1.87rem;
    }
  }

  &__text {
    margin-top: 0;
    color: $white;
    line-height: 17px;
    max-width: 70%;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-size: 0.9rem;
    margin-bottom: 84px;
    max-height: 28%;

    @include media('>xl') {
      font-size: 1.4rem;
      max-width: 51%;
      -webkit-line-clamp: 2;
      margin-bottom: 68px;
    }

    @include media('>md') { 
      font-size: 1.1rem;
      -webkit-line-clamp: 2;
      max-width: 49%;
      margin-bottom: 82px;
      line-height: 24px;
    }

    
    @include media('>lg') {
      font-size: 1.3rem;
      line-height: 24px;
      max-width: 49%;
      -webkit-line-clamp: 2;
      margin-bottom: 75px;
    }
  }

  &__tag {
    padding: 2px 8px;
    border-radius: 5px;
    font-size: 0.75rem;
    text-decoration: none;
    background: $gray-900;
    color: $white;

    &_style {
      &_black {
        background: $gray-900;
        color: $white;
      }
    }
  }
}
</style>
