<template>
  <div class="news">
    <div class="news__mobile-wrap">
      <img
        src="src/assets/pics/babka-mobile.png"
        class="news__mobile-pic"
      >
      <div class="news__mobile-tag">
        <span class="news__mobile-tag-text">рыбалка</span>
      </div>

      <div class="news__mobile-news-info">
        <h3 class="news__mobile-header">
          Бабка поймала большого сома
        </h3>
        <p class="news__mobile-paragraph">
          И нет сомнений, что ключевые особенности структуры
          проекта формируют глобальную экономическую сеть 
          и при этом — рассмотрены исключительно 
          в разрезе маркетинговых и финансовых предпосылок.
        </p>

        <div class="news__mobile-data-likes">
          <span class="news__mobile-data">20.03.2023</span>
          <div class="news__mobile-likes-wrap">
            <img
              src="src/assets/icons/heart.svg"
              class="news__mobile-like"
            >
            <span class="news__mobile-like-count">12</span>
          </div>
        </div>
      </div>
    </div>

    <div class="news__block-wrapper">
      <div>
        <img
          src="src/assets/pics/babka.png"
          alt="babka"
          class="news__main-pic"
        >
        <div class="news__img-elements">
          <div class="news__tag">
            <span class="news__tag-text">рыбалка</span>
          </div>

          <div class="news__post-info">
            <span class="news__post-date">20.03.2023</span>
            <div class="news__likes-wrap">
              <img
                src="src/assets/icons/heart.svg"
                alt="like icon"
                class="news__like"
              >
              <span class="news__likes-quantity">12</span>
            </div>
          </div>
        </div>
      </div>

      <div class="news__text-wrap">
        <h3 class="news__header">
          Бабка поймала большого сома
        </h3>
        <p class="news__span">
          И нет сомнений, что ключевые особенности структуры проекта
          формируют глобальную экономическую сеть и при этом — 
          рассмотрены исключительно в разрезе 
          маркетинговых и финансовых предпосылок. 
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>


<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  .news {
    position: relative;

    &__mobile-wrap {
      width: 361px;
      height: 102px;
      position: relative;
      display: flex;
    
      @media screen and (max-width: 2000px) {
        display: none;
      }

      @media screen and (max-width: 520px) {
        display: inline-flex;
      }

      @media screen and (max-width: 320px) {
        display: inline-flex;
      }
    }

    &__mobile-tag {
      width: 90px;
      height: 20px;
      color: #fff;
      text-align: center;
      background: #4DC352;
      border-radius: 5px;
      position: absolute;
      top: 4.4%;
      left: 1.4%;
    }

    &__mobile-tag-text {
      font-size: 10px;
    }

    &__mobile-pic {
      height: 100px;
    }

    &__mobile-news-info {
      padding-left: 10px;
    }

    &__mobile-header {
      margin: 0;
      font-size: 1rem;
    }

    &__mobile-paragraph {
      font-size: 0.75rem;
      margin: 5px 0 0 0;
      line-height: 14.52px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      word-break: break-word;
    }

    &__mobile-data-likes {
      display: flex;
      color: #6a6a6a;
      align-items: center;
      justify-content: space-between;
    }

    &__mobile-data {
      font-size: 0.75rem;
    }

    &__mobile-likes-wrap {
      font-size: 0.63rem;
      display: flex;
      align-items: center;
      padding-right: 2%;
    }

    &__block-wrapper {
      width: 480px;
      height: 174px;
      position: relative;

      @media screen and (max-width: 2000px) {
        display: block;
      }

      @media screen and (max-width: 720px) {
        display: block;
      }

      @media screen and (max-width: 520px) {
        display: none;
      }

      @media screen and (max-width: 320px) {
        display: none;
      }
    }

    &__tag {
      width: 62px;
      height: 21px;
      background: #4DC352;
      border-radius: 5px;
      text-align: center;
      position: absolute;
      top: 4%;
      left: 1%;
    }

    &__tag-text {
      font-size: 0.75rem;
      color: #fff;
    }

    &__post-info {
      width: 133px;
      height: 38px;
      background: #fff;
      border-radius: 10px;
      position: absolute;
      right: 1%;
      bottom: 3.5%;
      display: flex;
      font-size: 0.75rem;
    }

    &__post-date {
      text-decoration: underline;
      padding: 11px;
    }

    &__like {
      top: 19%;
      position: absolute;
    }

    &__likes-quantity {
      position: absolute;
      top: 29%;
      right: 8%;
    }

    &__header {
      font-size: 1.25rem;
      margin: 14px 0 14px 0;
    }

    &__span {
      margin: 0;
      font-size: 0.87rem;
      width: 87%;
    }
  }
</style>
