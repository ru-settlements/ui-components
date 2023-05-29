<template>
  <div class="arrow">
    <div class="arrow__left">
      <img
        class="arrow__mobile"
        src="./img/long-arrow.png" 
        alt="arrow left"
      >
    </div>

    <div>
      <img
        class="arrow__mobile"
        src="./img/long-arrow.png" 
        alt="arrow right"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
  .arrow {
    display: flex;

    &__left {
      transform: rotateY(180deg);
      margin-inline-end: 57px;
    }

    &__mobile {
      @include media('<md') {
        inline-size: 32px;
      }
    }
  }
</style>