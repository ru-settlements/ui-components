<template>
  <div>
    <!-- вот так подставляются переменные во вью, используй этот синтаксис-->
    <!-- e.g.: <label for="">{{ label }}</label>-->

    {{ label }}

    <!-- hint переменная содержит текст подсказки, которая внизу должна быть-->
    {{ hint }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: 'Email'
  },
  hint: {
    type: String,
    default: 'тут подсказка'
  },
  type: {
    type: String,
    default: 'text',
    validator: (value: string) => ['text', 'password'].includes(value)
  }
})
</script>
