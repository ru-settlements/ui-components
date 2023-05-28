<template>
  <div class="arrow">
    <div class="arrow__left">
      <img
        src="./img/long arrow.png" 
        alt="arrow left"
      >
    </div>

    <div>
      <img
        src="./img/long arrow.png" 
        alt="arrow right"
      >
    </div>
  </div>

  <div class="arrow">
    <div class="arrow__left arrow__left-inline">
      <img 
        src="./img/long arrow.png" 
        alt="arrow left" 
        class="arrow__small"
      >
    </div>

    <div>
      <img
        src="./img/long arrow.png" 
        alt="arrow right" 
        class="arrow__small"
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
      transform: scale(-1, 1);
      margin-inline-end: 57px;
    }

    &__left-inline {
      margin-inline-end: 30px;
    }

    &__small {
      inline-size: 32px;
    }
  }
</style>