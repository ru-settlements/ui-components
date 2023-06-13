<template>
  <div class="ui-input">
    <label class="ui-input__label">
      {{ label }}

      <input
        :type="isPassword && passwordIsShowed ? 'text': type"
        class="ui-input__input"
        v-bind="additionalAttributes"
        placeholder=" "
      >

      <mdicon
        v-if="isPassword"
        :name="passwordIsShowed ? 'eye-off': 'eye'"
        class="ui-input__eye-btn"
        size="27"
        @click="togglePassword"
      />
    </label>

    <p
      v-if="$slots.hint"
      class="ui-input__hint"
    >
      <slot name="hint" />
    </p>

    <p 
      class="ui-input__error"
    >
      Пароль должен содержать больше 6 символов
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Email'
  },
  error: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
    validator: (value: string) => ['text', 'password'].includes(value)
  }
})

const passwordIsShowed = ref(false)

const isPassword = computed(() => props.type === 'password')

const additionalAttributes = {
  autocomplete: isPassword.value ? 'off' : null,
  autocapitalize: isPassword.value ? 'off' : null,
  autocorrect: isPassword.value ? 'off' : null
}

const togglePassword = () => {
  passwordIsShowed.value = !passwordIsShowed.value
}
</script>

<style lang="scss">
.ui-input {
  &__label {
    color: $gray-900;
    font-size: 20px;
    transition: color 300ms ease;
    display: flex;
    flex-direction: column;
    position: relative;
    font-weight: 300;
  }

  &__input {
    color: $gray-600;
    margin-inline: 0;
    margin-block: 0.4rem 0.6rem;
    border: 1px solid $blue-300;
    padding-block: 1.2em;
    padding-inline: 1.2em;
    border-radius: 5px;
    transition: box-shadow 300ms ease-out;
    font-size: 1rem;

    &:focus {
      outline: #2bbee7 auto 3px;
    }
  }

  &__eye-btn {
    user-select: none;
    display: inline-block;
    inset-block-start: 45px;
    inset-inline-end: 17px;
    text-align: right;
    position: absolute;

    path {
      fill: $gray-400;
    }
  }

  &__hint {
    margin-block: 0;

    a {
      color: $light-blue-800;
    }
  }

  &__error {
    color: $red-400;
    font-weight: 300;
    font-size: 0.75rem;
  }
}
</style>