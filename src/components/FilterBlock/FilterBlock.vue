<template>
  <div class="filter-block">
    <button class="filter-block__button">
      <img 
        class="filter-block__calendar"
        src="./img/calendar.svg"
        alt="calendar icon" 
      >
    </button>

    <button class="filter-block__button">
      <img 
        class="filter-block__bookmark"
        src="./img/bookmark.svg"
        alt="bookmark icon" 
      >
    </button>

    <div class="filter-block__date-filter-state">
      Показаны новости: <span class="filter-block__date-filter-dates">с {{ dateFrom }} - {{ dateTo }}</span>
    </div>
  </div>  
</template>

<script setup lang="ts">
defineProps({
  dateFrom: {
    type: String,
    required: true
  },
  dateTo: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
  .filter-block {
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

    &__date-filter-state {
      margin-left: 23px;
      @media only screen and (max-width: 600px) {
        display: none;
      }
      
      @media only screen and (min-width: 1200px)  {
        font-size: 0.88rem;
      }
    }

    &__date-filter-dates {
      font-weight: 600;
    }
  }
</style>
