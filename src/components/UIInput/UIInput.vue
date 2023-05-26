<template>
  <form
    action="#login"
    class="form"
  >
    <div class="form__fields">
      <input
        id="email"
        type="email"
        class="form__control-input form__control-input-email"
        placeholder=" "
        required
      >

      <label
        for="email"
        class="form__control-label form__control-label-email"
      >
        Логин / Эл. почта
      </label>

      <div
        class="form__control-requirements 
        form__control-requirements-email"
      >
        Адрес электронной почты должен быть действительным
      </div>


      <input
        id="show-password"
        type="checkbox"
        class="form__show-password"
      >

      <label
        for="show-password"
        class="form__control-label 
        form__control-show-password"
      >

        <mdicon
          name="eye"
          class="form__eye"
          size="27"
        />
      </label>

      <input
        id="password"
        type="text"
        placeholder=" "
        autocomplete="off"
        autocapitalize="off"
        autocorrect="off"
        required
        pattern=".{6,}"
        class="form__control-input 
        form__control-input-password"
      >

      <label
        for="password"
        class="form__control-label 
        form__control-label-password"
      >
        Пароль
      </label>

      <div class="form__control-requirements">
        Пароль должен состоять хотя бы из 6 символов
      </div>

      <div class="form__forgot-password">
        <a
          class="form__forgot-link form__blue"
          href="#"
        >
          Забыли пароль?
        </a>
      </div>

      <button
        type="submit"
        class="form__button form__submit"
      >
        Войти
      </button>

      <div class="form__register ">
        <a
          class="form__link-register form__blue"
          href="#"
        >
          Зарегистрироваться
        </a>
      </div>
    </div>
  </form>
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
html {
  box-sizing: border-box;
  block-size: 100%;
}

body {
  background-color: #f1f2f1;
  background-image: linear-gradient(#e7e8e7, #f1f2f1);
  display: flex;
  min-block-size: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.form {
  inline-size: 100%;
  max-inline-size: 400px;
  margin-block: auto;
  margin-inline: auto;

  &__fields {
    border-radius: 15px;
    border: 1px solid #c5c1c0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding-block: 24px 15px;
    padding-inline: 24px 15px;
  }

  &__control-label {
    color: $gray-900;
    font-size: 20px;
    transition: color 300ms ease;
  }

  &__control-requirements {
    background: $pink-200;
    border-top: none;
    margin-block: -14px 15px;
    margin-inline: 0;
    max-block-size: 0;
    padding-block: 0;
    padding-inline: 9px;
    overflow: hidden;
    transition: all 200ms ease;
  }

  &__control-requirements-email,
  &__control-input-email {
    order: -1;
  }

  &__control-label-email {
    order: -2;
  }

  &__input-password {
    order: 0;
    padding-inline-end: 50px;
  }

  &__control-label-password {
    order: -1;
    margin-bottom: -32px;
  }

  &__control-show-password {
    inline-size: 32px;
    position: relative;
    inset-block-start: 54px;
    inset-inline-start: 100%;
    text-align: right;
    margin-inline-start: -44px;
  }

  &__button {
    padding-block-start: 14px;
    padding-block-end: 14px;
    padding-inline-start: 14px;
    padding-inline-end: 14px;
    user-select: none;
    font-size: 20px;
    margin-block-start: 36px;
    box-shadow: 0px 3px 1px rgba(0, 105, 92, 0.28);
  }

  &__eye path {
    fill: $gray-400;
  }

  &__register {
    text-align: center;
  }

  &__blue {
    color: $light-blue-800;
  }
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

  &:nth-child(even) {
    margin-block-end: 7px;
  }

  &:hover {
    box-shadow: 0 1px 3px rgba(#c5c1c0, 40%) inset;
  }

  &:focus {
    outline: #2bbee7 auto 3px;
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    border-color: red;
    border-bottom: none;

    &+.form__control-label {
      color: red;

      &+.form__control-requirements {
        max-block-size: 100px;
        padding-block-start: 9px;
        padding-block-end: 9px;
        padding-inline-start: 9px;
        padding-inline-end: 9px;
        border: 1px solid red;
      }
    }
  }

  &:valid:not(:focus):not(:placeholder-shown) {
    border-color: #5fa550;

    &+.form__control-label {
      color: #5fa550;
    }
  }
}

.form__submit {
  border: 1px solid $light-blue-600;
  background-color: $light-blue-600;
  border-radius: 5px;
  color: #fff;
  display: block;
  inline-size: 100%;
  max-inline-size: 100%;
  pointer-events: none;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 300ms ease-out, max-inline-size 150ms ease-out;
  outline: none;
  position: relative;
  margin-block-start: 36px;
  margin-block-end: 10px;


  .form__control-input-email:valid~.form__control-input-password:valid~& {
    pointer-events: auto;
    opacity: 1;
  }
}

.form__show-password {
  display: none;

  &:checked {
    &~.form__control-input-password {
      -webkit-text-security: disc;
      -moz-text-security: disc;
    }
  }
}
</style>