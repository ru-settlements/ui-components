<template>
  <div class="search">
    <form class="search__form">
      <input type="text" placeholder="Введите для поиска...">
      <button type="submit"></button>
    </form>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
  .search__form {
    position: relative;
    width: 451px;
    margin: 0 auto;
  }

  .search {background: #A3D0C3;}
  .search input {
    width: 100%;
    height: 50px;
    padding-left: 21px;
    border-radius: 11px;
    outline: none;
    color: #9E9C9C;
    border: none;
    border-bottom: 1px solid $gray-700;
    font-size: 15px;
    
  }

  .search button {
    position: absolute; 
    top: 0;
    right: 0px;
    width: 42px;
    height: 42px;
    border: none;
    background: #7BA7AB;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  .search button:before {
    content: "\f002";
    font-family: FontAwesome;
    font-size: 16px;
    color: #F9F0DA;
  }
</style>