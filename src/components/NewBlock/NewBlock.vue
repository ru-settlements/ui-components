<template>
  <div class="news-template">

    <div class="news-template__item">
      <div class="news-template__img-cover">
        <figure class="news-template__img" alt="сом и бабка" ></figure>
      </div>

      <div class="news-template__text">
        <div class="news-template__text-wrap">
          <h3 class="news-template__header">Бабка поймала большого сома</h3>
            <p class="news-template__news-text">
              И нет сомнений, что ключевые особенности
              структуры проекта формируют глобальную 
              экономическую сеть и при этом — рассмотрены
              исключительно в разрезе маркетинговых и 
              финансовых предпосылок. 
              <br>
              <br>
              И нет сомнений, что ключевые особенности
              структуры проекта формируют глобальную 
              экономическую сеть и при этом — рассмотрены
              исключительно в разрезе маркетинговых и 
              финансовых предпосылок. 
            </p>
        </div>

        <div class="news-template__date-tags news-template__center">
          <div class="news-template__center">
            <span class="news-template__data">
              20.03.2023
            </span>


            <div class="news-template__like-wrap news-template__center">
              <img class="news-template__like-icon" src="src/assets/icons/heart.svg" alt="like">
              <span>12</span>
            </div>
          </div>

          <div>
            <a href="#" class="news-template__tag news-template__color-blue">#медведица</a>
            <a href="#" class="news-template__tag news-template__color-green">#рыбалка</a>
          </div>
        </div>
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

  .news-template {
    &__item {
      @media screen and (max-width: 2000px) {
        width: 482px;
        padding-left: 20px;
      }

      @media screen and (max-width: 400px) {
        width: 361px;
        height: 102px;
        padding: 5px;
        display: -webkit-inline-box;
      }
    }

    &__header {
      @media screen and (max-width: 2000px) {
        font-size: 1.25rem;
        margin: 14px 0 10px 0;
      }

      @media screen and (max-width: 400px) {
        font-size: 1rem;
        margin: 0;
      }
    }

    &__img-cover {
      background: url("src/assets/pics/babka.png") no-repeat center;
      @media screen and (max-width: 2000px) {
        width: 480px;
        height: 174px;
      }

      @media screen and (max-width: 400px) {
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 10px;
        background-size: cover;
        display: inline-block;
      }
    }

    &__date-tags {
      color: #6a6a6a;
      @media screen and (max-width: 400px) {
        font-size: 0.75rem;
      }
    }

    &__data {
      @media screen and (max-width: 2000px) {
        text-decoration: underline;
      }

      @media screen and (max-width: 400px) {
        text-decoration: none;
      }
    }

    &__center {
      display: flex;
      align-items: center;

      @media screen and (max-width: 2000px) {
        justify-content: space-between;
      }
    }

    &__like-wrap {
      @media screen and (max-width: 2000px) {
        padding-left: 12px ;
      }
      @media screen and (max-width: 400px) {
        padding: 0 9px;
      }
    }

    &__color-blue {
      color: #5367cc;
      padding-right: 9px;
    }

    &__color-green {
      color: #4dc352;
    }

    &__text {
      @media screen and (max-width: 400px) {
        padding-left: 11px;
      }
    }

    &__news-text {
      @media screen and (max-width: 2000px) {
        font-size: 0.88rem;
        margin: 0 0 11px 0;
        width: 91%;
      }

      @media screen and (max-width: 400px) {
        padding: 4px 0 2px;
        max-width: 239px;
        font-size: 0.75rem;
        line-height: 0.93rem;
        margin: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        word-break: break-word;
      }
    }
  }
</style>
