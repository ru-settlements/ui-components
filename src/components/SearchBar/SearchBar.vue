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
      width: 451px;
      margin: 10px;
    }

    &__input {
      width: 100%;
      height: 50px;
      padding-inline-start: 21px;
      border-radius: 11px;
      outline: none;
      border: none;
      border-bottom: 1px solid $gray-700;
      font-size: 15px;
      padding-inline-end: 50px;
      box-sizing: border-box;
    }

    &__magnify path {
      fill: $gray-800;
    }

    &__button {
      position: absolute; 
      top: 4px;
      right: 1%;
      width: 42px;
      height: 42px;
      border: none;
      cursor: pointer;
      background: 0;
      transform: scale(1.4);
    }
  }
</style>
