<template>
  <h1>Here is component playground</h1>
  <UIButton label="Button" background-color="red" />
  <Calendar />
</template>

<script setup lang="ts">
import UIButton from "./components/UIButton/UIButton.vue";
import Calendar from "./components/UICalendar/UICalendar.vue";
</script>


<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
