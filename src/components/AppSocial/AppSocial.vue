<template>
  <div class="social">
    <div class="social__wrapper">
      <a 
        class="social__link"
        target="_blank"
        href="#"
        >
        <img 
          class="social__icon"
          src="./img/whatsapp.svg"
          alt="whatsapp"
        >
      </a>

      <a 
        class="social__link"
        target="_blank"
        href="#"
        >
        <img 
          class="social__icon"
          src="./img/vk.svg"
          alt="vkontakte"
          target="_blank"
        >
      </a>

      <a 
        class="social__link"
        target="_blank"
        href="#"
        >
        <img 
          class="social__icon"
          src="./img/ok.svg"
          alt="odnoklassniki"
        >
      </a>

      <a 
        class="social__link"
        target="_blank"
        href="#"
        >
        <img 
          class="social__icon"
          src="./img/tg.svg"
          alt="telegram"
        >
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppSocial'
}
</script>

<style lang="scss">
  .social {
    &__wrapper {
      padding-block-start: 13px;
    }
    &__link {
      padding-inline-start: 16px;
    }
  }
</style>
