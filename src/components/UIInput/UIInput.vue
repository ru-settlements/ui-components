<template>
  <input
    id="email"
    type="email"
    class="form__control-input"
    placeholder=" "
    autocomplete="off"
    autocapitalize="off"
    autocorrect="off"
    pattern=".{6,}"
  >

  <label
    for="email"
    class="form__control-label"
  >
    Логин / Эл. почта
  </label>

  <label class="form__control-label form__control-eye">
    <mdicon
      name="eye"
      class="form__eye"
      size="27"
    />
  </label>

  <input
    id="password"
    type="text"
    class="form__control-input form__control-input-password"
  >

  <label
    for="password"
    class="form__control-label form__control-label-password"
  >
    Пароль
  </label>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: 'Email'
  },
  hint: {
    type: String,
    default: 'тут подсказка'
  },
  type: {
    type: String,
    default: 'text',
    validator: (value: string) => ['text', 'password'].includes(value)
  }
})
</script>

<style lang="scss">
.form {
  &__input-password {
    order: 0;
    padding-inline-end: 50px;
  }

  &__control-eye {
    inline-size: 32px;
    position: relative;
    inset-block-start: 54px;
    inset-inline-start: 100%;
    text-align: right;
    margin-inline-start: -44px;
  }

  &__eye path {
    fill: $gray-400;
  }
}

.form__control-label {
  color: $gray-900;
  font-size: 20px;
  transition: color 300ms ease;
}

.form__control-input {
  color: $gray-600;
  margin-inline: 0;
  margin-block: 0.8em;
  border: 1px solid $blue-300;
  padding-block: 1.2em;
  padding-inline: 1.2em;
  border-radius: 5px;
  transition: box-shadow 300ms ease-out;
  font-size: 16px;

  &:hover {
    box-shadow: 0 1px 3px rgba(#c5c1c0, 40%) inset;
  }

  &:focus {
    outline: #2bbee7 auto 3px;
  }
}
</style>