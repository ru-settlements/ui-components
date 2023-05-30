<template>
  <NewBlock v-bind="args" />
</template>

<script setup lang="ts">
import NewBlock from '@/components/NewBlock/NewBlock.vue'

const args = {
  title: 'Бабка поймала большого сома',
  description: `
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
            финансовых предпосылок.`,
  date: '20.03.2023',
  imgLink: '/src/assets/images/babka.png',
  tags: [{
    color: 'blue',
    name: 'медведица'
  },
  {
    color: 'green',
    name: 'рыбалка'
  }]
}
</script>
