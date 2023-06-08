<template>
  <div class="login">
    <div class="login__get-started">
      <form
        action="#"
        target="_blank"
        class="login__form">

        <button
          class="login__button"
          type="submit">
            Зарегистрироваться
        </button>
      </form>

      <a
        action=""
        class="login__get-in"
        href="#">
        Войти
      </a>
    </div>

    <div class="login__buttons">
      <button
        action=""
        target="_blank"
        class="login__button login__button-tg"
        type="submit" disabled>

        
        <div class="login__button-tg">
          <span class="login__button-span">Войти с Telegram</span>
          <img
            src="./img/telegram.svg"
            class="login__telegram"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
 .login {
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
    }

    &__buttons :disabled {
      background-color: $gray-400;
      border: 1px solid $gray-400;
      box-shadow: none;
      cursor: unset;
    }
    
    &__get-in {
      color: $light-blue-800;
      display: flex;
      justify-content: center;
      padding-block-start: 10px;
    }

    &__button-span {
      padding-inline-start: 51px;
      padding-inline-end: 51px;
    }

    &__button-tg {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
    }

    
 }
</style>