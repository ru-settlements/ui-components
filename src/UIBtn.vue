<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  name: 'UIBtn',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
