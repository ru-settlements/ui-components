<template>
  <div class="ui-button">
    <button
      class="ui-button__button"
      v-bind="$attrs"
    >
      <div class="ui-button__icon">
        <slot name="icon">
          <img
            v-if="icon"
            :src="icon"
          >
        </slot>
      </div>

      <slot />
    </button>

    <a
      v-if="subLink && subLinkLabel"
      class="ui-button__sub-link"
      :href="subLink"
    >
      {{ subLinkLabel }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  subLink?: string
  subLinkLabel?: string
  iconPath: string
}>()

const icon = computed(() => props.iconPath ? new URL(props.iconPath, import.meta.url).href : '')
</script>

<style lang="scss">
.ui-button {
  inline-size: 100%;
  max-inline-size: 342px;

  &__button {
    background-color: $light-blue-600;
    color: $white;
    border-radius: 5px;
    box-shadow: 0px 3px 1px rgba(0, 105, 92, 0.28);
    border: 1px solid $light-blue-600;
    inline-size: 100%;
    block-size: 51px;
    font-size: 1.3rem;
    font-weight: 300;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:disabled {
      background-color: $gray-400;
      border: 1px solid $gray-400;
      box-shadow: none;
      cursor: unset;
    }
  }

  &__icon {
    position: absolute;
    inset-inline-start: 13px;
    display: flex;
  }

  &__sub-link {
    color: $light-blue-800;
    display: flex;
    justify-content: center;
    padding-block-start: 10px;
  }
}
</style>