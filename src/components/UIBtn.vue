<template>
  <button
    class="ui-btn"
    type="button"
    @click="$emit('click')"
    :class="`ui-btn_color_${color}`"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color: 'red' | 'black'
  }>(), {
    color: 'red'
  }
)

defineEmits([
  'click'
])
</script>

<style lang="scss" scoped>
.ui-btn {
  border: none;
  border-radius: 5px;
  color: white;
  &_color {
    &_red {
      background: red;
    }
    &_black {
      background: black;
    }
  }
}
</style>

