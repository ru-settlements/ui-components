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
  .search {
    &__input {
      width: 100%;
      height: 50px;
      padding-left: 21px;
      border-radius: 11px;
      outline: none;
      border: none;
      border-bottom: 1px solid $gray-700;
      font-size: 15px;
    }

    &__button {
      position: absolute; 
      top: 4px;
      right: -15px;
      width: 42px;
      height: 42px;
      border: none;
      cursor: pointer;
    }

    &__form {
      position: relative;
      width: 451px;
      margin: 0 auto;
    }
  }
  .search {background: #A3D0C3;}
  
</style>