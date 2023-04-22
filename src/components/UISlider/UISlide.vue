<template>
  <div
    class="ui-slide"
    :style="{backgroundImage: `url('https://shorturl.at/xEM48'`}"
  >
    <p class="ui-slide__title">
      Медведица затопила!
    </p>

    <p class="ui-slide__text">
      Проводятся спасательные мероприятия.
      Администрация выделила пострадавшим миску риса
    </p>

    <a class="ui-slide__tag">
      происшествия
    </a>
  </div>
</template>

<script lang="ts"></script>
<style lang="scss">
.ui-slide {
  height: 215px;
  width: 100%;
  background-position: center;
  background-size: cover;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;

  &__title {
    width: 100%;
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 24px;
    color: $white;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.33), -1px 0px 2px rgba(255, 255, 255, 0);
  }

  &__text {
    margin-top: 0;
    color: $white;
    font-size: 14px;
    line-height: 17px;
    max-width: 70%;
    flex-grow: 1;
  }

  &__tag {
    background: $gray-900;
    padding: 2px 8px;
    border-radius: 5px;
    font-size: 0.75rem;
    color: $white;
    text-decoration: none;
  }
}
</style>
