<template>
  <div class="news-template">
    <div class="news-template__item">
      <div class="news-template__img-cover">
        <figure class="news-template__img">
          <img
            :src="img"
            alt="babka"
          >
        </figure>
      </div>

      <div class="news-template__text">
        <div class="news-template__text-wrap">
          <h3 class="news-template__header">
            {{ title }}
          </h3>
          <p
            class="news-template__news-text"
            v-html="description"
          />
        </div>

        <div class="news-template__date-tags news-template__center">
          <div class="news-template__center">
            <span class="news-template__date">
              {{ date }}
            </span>

            <div class="news-template__like-wrap news-template__center">
              <img
                class="news-template__like-icon"
                src="./img/heart.svg"
                alt="like"
              >
              <span>12</span>
            </div>
          </div>

          <div>
            <a
              v-for="tag of tags"
              :key="tag.name"
              href="#"
              :class="`news-template__tag news-template__tag_color_${tag.color}`"
            >
              #{{ tag.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array as PropType<{ color: string; name: string }[]>,
    default: () => []
  },
  imgLink: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const img = String(new URL(props.imgLink, import.meta.url))
</script>


<style lang="scss">
  .news-template {
    &__item {
      @media screen and (max-width: 2000px) {
        width: 482px;
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

    &__img {
      margin-inline: 0;
      margin-block: 0;

      img {
        width: 100%;
        @media screen and (max-width: 401px) {
          width: auto;
          height: 100%;
          object-position: center top;
          object-fit: contain;
        }
      }

    }

    &__img-cover {
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

    &__date {
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

    &__tag {
      padding-right: 9px;
      &:last-child {
        padding-right: 0;
      }

      &_color {
        &_blue {
          color: #5367cc;
        }

        &_green {
          color: #4dc352;
        }
      }
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
