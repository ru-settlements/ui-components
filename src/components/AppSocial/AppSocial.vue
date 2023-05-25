<template>
  <div class="social">
    <div class="social__wrapper">
      <a class="social__link">
        <img 
          class="social__icons"
          src="./img/whatsapp.svg"
          alt="whatsapp"
        >
      </a>

      <a class="social__link">
        <img 
          class="social__icons"
          src="./img/vk.svg"
          alt="vkontakte"
        >
      </a>

      <a class="social__link">
        <img 
          class="social__icons"
          src="./img/ok.svg"
          alt="odnoklassniki"
        >
      </a>

      <a class="social__link">
        <img 
          class="social__icons"
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
