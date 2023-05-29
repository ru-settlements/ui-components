<template>
  <nav class="menu">
    <div class="menu__wrapper">
      <div class="menu__mobile-wrapper">
        <img
          src="./img/gora.png"
          alt="наша гора"
        >
        <span class="menu__title">Наша Гора</span>
      </div>

      <ul class="menu__list">
        <li
          v-for="item in props.items"
          :key="item.name"
          class="menu__item"
        >
          <a
            class="menu__link"
            :href="item.link"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>

      <div class="menu__icons">
        <a
          class="menu__link-wrapper"
          href="#"
        >
          <mdicon
            alt="search icon"
            name="Magnify"
            class="menu__search-icon menu__icon menu__icon-mobile "
            size="32"
          />
        </a>

        <a
          href="#"
          class="menu__link-wrapper"
        >
          <mdicon
            alt="profile icon"
            name="AccountCircle"
            class="menu__profile-icon menu__icon "
            size="32"
          />
        </a>

        <a
          href="#"
          class="menu__link-wrapper"
        >
          <mdicon
            alt="burger icon"
            name="Menu"
            class="menu__burger-icon menu__icon menu__icon-mobile "
            size="32"
          />
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
interface MenuItem {
  name: string
  link: string
}

const props = defineProps<{
  items: MenuItem[]
}>()
</script>


<style lang="scss">
  .menu {
    &__wrapper {
      background: $indigo-700;
      inline-size: 100%;
      block-size: 58px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      @include media('<md') {
        justify-content: space-between;
      }
    }

    &__mobile-wrapper {
      display: flex;
      align-items: center;
      padding-inline-start: 12px;

      @include media('>md') {
        display: none;
      }
    }

    &__title {
      font-weight: 600;
      color: $white;
      padding-inline-start: 12px;
    }

    &__list {
      display: flex;

      @include media('<md') {
        display: none;
      }
    }

    &__item {
      list-style-type: none;
      padding-inline-start: 47px;

      &:first-child {
        padding-inline-start: 0;
      }

      &:hover {
        text-decoration: underline;
        color: $white;
      }
    }

    &__link {
      color: $white;
      text-decoration: none;
      font-size: 15px;
    }

    &__link-wrapper {
      padding-inline-end: 22px;
      display: inline-block;

      &:last-child {
        padding-inline-end: 24px;
      }
    }

    &__icon path {
      fill: $white;
      cursor: pointer;
    }

    &__icon-mobile {
      @include media('>md') {
        display: none;
        cursor: unset;
        padding-inline-end: 22px;
      }
    }
  }
</style>