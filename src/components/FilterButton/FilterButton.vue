<template>
  <div class="filter">
    <button class="filter__button">
      <img 
        class="filter__calendar" 
        src="src/assets/icons/calendar.svg"
        alt="calendar icon" 
      >
    </button>

    <button class="filter__button">
      <img 
        class="filter__bookmark" 
        src="src/assets/icons/bookmark.svg"
        alt="bookmark icon" 
      >
    </button>

    <span class="filter__sort">
      Показаны новости: с 20.03.23 - 20.06.23
    </span>
  </div>  
</template>

<script setup lang="ts"></script>

<style lang="scss">

  .filter {
    display: flex;
    align-items: center;
    &__button {
      background: #fbfbfb;
      border-radius: 5px;
      filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.13));
      border: none;
      margin-left: 23px;
      cursor: pointer;

      @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
      }

      @media only screen and (min-width: 1200px)  {
        width: 54px;
        height: 54px;

        &:hover {
          transition: 0.5s;
          transform: scale(1.2);
        }
      }
    }

    &__calendar {
      @media only screen and (max-width: 600px) {
        width: 86%;
      }

      @media only screen and (min-width: 1200px)  {
        width: 80%;
      }
    }

    &__bookmark {
      @media only screen and (max-width: 600px) {
        width: 52%;
      }

      @media only screen and (min-width: 1200px)  {
        width: 48%;
      }
    }

    &__sort {
      font-weight: 600;
      margin-left: 23px;
      @media only screen and (max-width: 600px) {
        display: none;
      }
      
      @media only screen and (min-width: 1200px)  {
        font-size: 0.88rem;
      }
    }
  }
</style>