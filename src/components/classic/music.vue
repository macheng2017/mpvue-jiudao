<template>
  <div class="container">
    <img :src="img" alt>
    <img :src="palySrc" alt>
    <img src="/static/img/music@tag.png" alt>
    <div>{{content}}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    content: String
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
</style>

