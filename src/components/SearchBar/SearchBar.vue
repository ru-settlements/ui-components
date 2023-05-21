<template>
  <div class="search">
    <form class="search__form">
      <input 
        class="search__input" 
        type="text" 
        placeholder="Введите для поиска..."
      >

      <button 
        class="search__button" 
        type="submit"
      >
        <mdicon
          name="magnify"
          class="search__magnify"
          size="32"
        />
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
  ::-webkit-input-placeholder {
    color: $gray-400;
  }
  .search {
    &__form {
      position: relative;
      inline-size: 451px;
      margin-block-start: 10px;
      margin-inline-start: 10px;
    }

    &__input {
      inline-size: 100%;
      block-size: 50px;
      padding-inline-start: 21px;
      border-radius: 11px;
      outline: none;
      border: none;
      border-bottom: 1px solid $gray-1000;
      font-size: 15px;
      padding-inline-end: 50px;
      box-sizing: border-box;
    }

    &__magnify path {
      fill: $gray-800;
    }


    &__button {
      position: absolute; 
      inset-block-start: 4px;
      inset-inline-end: 15px;
      inline-size: 42px;
      block-size: 42px;
      border: none;
      cursor: pointer;
      background: none;
    }
  }
</style>
