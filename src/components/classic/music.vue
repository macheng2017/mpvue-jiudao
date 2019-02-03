<template>
  <div class="container">
    <img :src="img" alt>
    <img :src="palySrc" alt>
    <img src="/static/img/music@tag.png" alt>
    <div>{{content}}</div>
  </div>
</template>
<script>
import { mixin } from './classic-mixin.js'
export default {
  mixins: [mixin],
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
</style>

