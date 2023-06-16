<template>
  <div class="news-template">
    <div class="news-template__item">
      <div class="news-template__img-cover">
        <figure class="news-template__img">
          <img
            class="news-template__img-item"
            :src="img"
            :alt="imgAlt"
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

            <div class="news-template__bookmark-wrap news-template__center">
              <mdicon
                class="news-template__bookmark-icon"
                name="BookmarkOutline"
              />
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
  img: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    required: true
  }
})
</script>


<style lang="scss">
  .news-template {
    &__item {
      inline-size: 482px;
      display: -webkit-inline-box;

      @include media('>md') {
        inline-size: 361px;
        block-size: 102px;
        padding-inline: 5px;
        padding-block: 5px;
        display: flex;
        flex-direction: column;
      }
    }

    &__header {
      @include media('<md') {
        font-size: 1rem;
        margin-block: 0;
        margin-inline: 0;
      }

      @include media('>md') {
        font-size: 1.25rem;
        margin-block: 14px 10px;
      }
    }

    &__img {
      margin-inline: 0;
      margin-block: 0;
    }

    &__img-item {
      max-inline-size: 480px;
      @include media('<md') {
        block-size: 174px;
        object-fit: cover;
        border-radius: 10px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        transform: translate(-38%);
      }

      @include media('<md') {
        inline-size: auto;
        object-position: center top;
        object-fit: contain;
      }
    }
  
    &__img-cover {
      @include media('<md') {
        inline-size: 100px;
        block-size: 100px;
        overflow: hidden;
        border-radius: 10px;
        background-size: cover;
        display: inline-block;
      }
    }

    &__date-tags {
      color: #6a6a6a;
      @include media('<md') {
        font-size: 0.75rem;
      }
    }

    &__date {
      @include media('<md') {
        text-decoration: underline;
      }

      @include media('>xl') {
        text-decoration: none;
      }
    }

    &__center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__bookmark-wrap {
      padding-inline-start: 12px;

      @include media('>md') {
        padding-inline: 9px;
        padding-block: 0;
      }
    }
    
    &__tag {
      padding-inline-end: 9px;

      &:last-child {
        padding-inline-end: 0;
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
      @include media('>md') {
        inline-size: 482px;
      }

      @include media('<md') {
        padding-inline-start: 11px;
      }
    }

    &__news-text {
      @include media('<md') {
        padding-block: 4px 2px;
        max-inline-size: 262px;
        font-size: 0.75rem;
        line-height: 0.93rem;
        margin-block: 0;
        margin-inline: 0;
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
