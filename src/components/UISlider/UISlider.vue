<template>
  <div class="ui-slider">
    <div class="ui-slider-inner">
      <input 
        id="ui-slider-1"
        class="ui-slider-open"
        type="radio" 
        name="ui-slider"
        aria-hidden="true" 
        hidden=""
        checked="checked"
      >

      <div class="ui-slider-item">
        <div class="ui-slider-slide-content">
          <span>Медведица затопила!</span>
          <span class="ui-slider-slide-text">
            Проводятся спасательные мероприятия.
            Администрация выделила пострадавшим миску риса
          </span>
        </div>

        <div class="ui-slider-tag">
          <button class="ui-slider-btn-tag">
            <a
              href="#"
              class="ui-slider-btn-link"
            >происшествия</a>
          </button>
        </div>
        <img src="https://shorturl.at/xEM48">
      </div>

      <input
        id="ui-slider-2"
        class="ui-slider-open"
        type="radio" 
        name="ui-slider"
        aria-hidden="true" 
        hidden=""
      >

      <div class="ui-slider-item">
        <div class="ui-slider-slide-content">
          <span>Placeholder Placeholder!</span>
          <span class="ui-slider-slide-text">
            Город на юго-востоке европейской части России, 
            административный центр Саратовской области
          </span>
        </div>

        <div class="ui-slider-tag">
          <button class="ui-slider-btn-tag">
            <a
              href="#"
              class="ui-slider-btn-link"
            >путешествия</a>
          </button>
        </div>

        <img src="https://shorturl.at/axR03">
      </div>

      <input
        id="ui-slider-3"
        class="ui-slider-open"
        type="radio" 
        name="ui-slider"
        aria-hidden="true" 
        hidden=""
      >

      <div class="ui-slider-item">
        <img src="https://shorturl.at/choVX">
      </div>

      <label 
        for="ui-slider-3"
        class="ui-slider-control
        prev control-1"
      >
        ‹
      </label>

      <label 
        for="ui-slider-2"
        class="ui-slider-control next control-1"
      >
        ›
      </label>

      <label 
        for="ui-slider-1"
        class="ui-slider-control prev control-2"
      >
        ‹
      </label>

      <label 
        for="ui-slider-3"
        class="ui-slider-control next control-2"
      >
        ›
      </label>


      <label 
        for="ui-slider-2"
        class="ui-slider-control prev control-3"
      >
        ‹
      </label>

      <label 
        for="ui-slider-1"
        class="ui-slider-control next control-3"
      >
        ›
      </label>

      <ol class="ui-slider-indicators">
        <li>
          <label 
            for="ui-slider-1"
            class="ui-slider-bullet"
          >
            •
          </label>
        </li>

        <li>
          <label 
            for="ui-slider-2"
            class="ui-slider-bullet"
          >
            •
          </label>
        </li>

        <li>
          <label 
            for="ui-slider-3"
            class="ui-slider-bullet"
          >
            •
          </label>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
  .ui-slider {
    position: relative;
    margin-top: 26px;
    width: 53.5%;
    height: 18%;
  }

  .ui-slider-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .ui-slider-open {
    &:checked+.ui-slider-item {
      position: static;
      opacity: 100;
    }
  }

  .ui-slider-item {
    height: 215px;
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
    img {
      display: block;
      height: auto;
      max-width: 100%;
      position: absolute;
      top: -50%;
    }
  }

  .ui-slider-slide-content {
    position: absolute;
    z-index: 9;
    font-size: 2.25rem;
    font-weight: 600;
    max-width: 487px;
    color: $white;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.5rem;
    top: 7%;
    left: 1%;
  }

  .ui-slider-slide-text {
    font-size: 1.25rem;
    font-weight: 400;
  }

  .ui-slider-control {
    background: $white;
    border-radius: 15%;
    color: $gray-400;
    cursor: pointer;
    display: none;
    font-size: 40px;
    height: 50px;
    width: 50px;
    line-height: 43px;
    position: absolute;
    bottom: -7%;
    -webkit-transform: translate(0, -50%);
    cursor: pointer;
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-align: center;
    z-index: 10;
    &:hover {
      background: rgba(0, 0, 0, 0.8);
      color: $gray-900;
    }
  }

  .ui-slider-control.prev {
    right: 7.5%;
  }

  .ui-slider-control.next {
    right: 2%;
  }

  #ui-slider-1 {
    &:checked~.control-1 {
      display: block;
    }
    &:checked~.control-1~.ui-slider-indicators {
      li {
        &:nth-child(1) {
          .ui-slider-bullet {
            color: $cyan-600;
          }
        }
      }
    }
  }

  #ui-slider-2 {
    &:checked~.control-2 {
      display: block;
    }
    &:checked~.control-2~.ui-slider-indicators {
      li {
        &:nth-child(2) {
          .ui-slider-bullet {
            color: $cyan-600;
          }
        }
      }
    }
  }

  #ui-slider-3 {
    &:checked~.control-3 {
      display: block;
    }
    &:checked~.control-3~.ui-slider-indicators {
      li {
        &:nth-child(3) {
          .ui-slider-bullet {
            color: $cyan-600;
          }
        }
      }
    }
  }

  .ui-slider-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: -3%;
    left: 0;
    right: 0;
    text-align: center;
    li {
      display: inline-block;
      margin: 0 5px;
    }
  }
  
  .ui-slider-bullet {
    color: $white;
    cursor: pointer;
    display: block;
    font-size: 35px;
    &:hover {
      color: $gray-400;
    }
  }

  .ui-slider-tag {
    z-index: 21;
    position: absolute;
    bottom: 4%;
    left: 1%;
  }

  .ui-slider-btn-tag {
    background: $gray-900;
    border-radius: 5px;
  }

  .ui-slider-btn-link {
    font-size: 0.75rem;
    color: $white;
    text-decoration: none;
  }

  #title {
    width: 100%;
    position: absolute;
    padding: 0px;
    margin: 0px auto;
    text-align: center;
    font-size: 27px;
    color: rgba(255, 255, 255, 1);
    z-index: 9999;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33), -1px 0px 2px rgba(255, 255, 255, 0);
  }
</style>
