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
    margin-bottom: 8px;
    font-size: 24px;
    color: $white;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.33), -1px 0px 2px rgba(255, 255, 255, 0);

    @media (min-width: 1200px) {
      font-size: 2.28rem;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 2.25rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 	1.87rem;
    }
  }

  &__text {
    margin-top: 0;
    color: $white;
    line-height: 24.2px;
    max-width: 70%;
    max-height: 29%;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    @media (max-width: 767px) {
      margin-bottom: 82px;
      -webkit-line-clamp: 2;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: 71px;
      max-height: 77%;
    }

    @media (max-width: 320px) {
      font-size: 0.9rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.4rem;
      max-width: 51%;
      -webkit-line-clamp: 2;
      margin-bottom: 68px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 1.3rem;
      max-width: 51%;
      -webkit-line-clamp: 2;
      margin-bottom: 68px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 1.1rem;
      -webkit-line-clamp: 2;
      max-width: 49%;
      margin-bottom: 76px;
    }
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
