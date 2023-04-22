<template>
  <div class="carousel">
    <div class="carousel-inner">
      <input 
        class="carousel-open" 
        type="radio" id="carousel-1" 
        name="carousel" 
        aria-hidden="true" 
        hidden=""
        checked="checked"
      >

      <div class="carousel-item">
        <div class="carousel-slide-content">
          <span>Медведица затопила!</span>
          <span class="carousel-slide-text">
            Проводятся спасательные мероприятия.
            Администрация выделила пострадавшим миску риса
          </span>
        </div>

        <div class="carousel-tag">
          <button class="carousel-btn-tag">
            <a href="#" class="carousel-btn-link">происшествия</a>
          </button>
        </div>
        <img src="https://shorturl.at/xEM48">
      </div>

      <input class="carousel-open" 
        type="radio" id="carousel-2" 
        name="carousel" 
        aria-hidden="true" 
        hidden=""
      >

      <div class="carousel-item">

        <div class="carousel-slide-content">
          <span>Placeholder Placeholder!</span>
          <span class="carousel-slide-text">
            Город на юго-востоке европейской части России, 
            административный центр Саратовской области
          </span>
        </div>

        <div class="carousel-tag">
          <button class="carousel-btn-tag">
            <a href="#" class="carousel-btn-link">путешествия</a>
          </button>
        </div>

        <img src="https://shorturl.at/axR03">
      </div>

      <input class="carousel-open" 
        type="radio" id="carousel-3" 
        name="carousel" 
        aria-hidden="true" 
        hidden=""
      >

      <div class="carousel-item">
        <img src="https://shorturl.at/choVX">
      </div>

      <label 
        for="carousel-3" 
        class="carousel-control 
        prev control-1">
        ‹
      </label>

      <label 
        for="carousel-2" 
        class="carousel-control next control-1">
        ›
      </label>

      <label 
        for="carousel-1" 
        class="carousel-control prev control-2">
        ‹
      </label>

      <label 
        for="carousel-3" 
        class="carousel-control next control-2">
        ›
      </label>


      <label 
        for="carousel-2" 
        class="carousel-control prev control-3">
        ‹
      </label>

      <label 
        for="carousel-1" 
        class="carousel-control next control-3">
        ›
      </label>

      <ol class="carousel-indicators">
        <li>
          <label 
            for="carousel-1" 
            class="carousel-bullet">
            •
          </label>
        </li>

        <li>
          <label 
            for="carousel-2" 
            class="carousel-bullet">
            •
          </label>
        </li>

        <li>
          <label 
            for="carousel-3" 
            class="carousel-bullet">
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
  .carousel {
    position: relative;
    margin-top: 26px;
    width: 53.5%;
    height: 18%;
  }

  .carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .carousel-open {
    &:checked+.carousel-item {
      position: static;
      opacity: 100;
    }
  }

  .carousel-item {
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

  .carousel-slide-content {
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

  .carousel-slide-text {
    font-size: 1.25rem;
    font-weight: 400;
  }

  .carousel-control {
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

  .carousel-control.prev {
    right: 7.5%;
  }

  .carousel-control.next {
    right: 2%;
  }

  #carousel-1 {
    &:checked~.control-1 {
      display: block;
    }
    &:checked~.control-1~.carousel-indicators {
      li {
        &:nth-child(1) {
          .carousel-bullet {
            color: $cyan-600;
          }
        }
      }
    }
  }

  #carousel-2 {
    &:checked~.control-2 {
      display: block;
    }
    &:checked~.control-2~.carousel-indicators {
      li {
        &:nth-child(2) {
          .carousel-bullet {
            color: $cyan-600;
          }
        }
      }
    }
  }

  #carousel-3 {
    &:checked~.control-3 {
      display: block;
    }
    &:checked~.control-3~.carousel-indicators {
      li {
        &:nth-child(3) {
          .carousel-bullet {
            color: $cyan-600;
          }
        }
      }
    }
  }

  .carousel-indicators {
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
  
  .carousel-bullet {
    color: $white;
    cursor: pointer;
    display: block;
    font-size: 35px;
    &:hover {
      color: $gray-400;
    }
  }

  .carousel-tag {
    z-index: 21;
    position: absolute;
    bottom: 4%;
    left: 1%;
  }

  .carousel-btn-tag {
    background: $gray-900;
    border-radius: 5px;
  }

  .carousel-btn-link {
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
