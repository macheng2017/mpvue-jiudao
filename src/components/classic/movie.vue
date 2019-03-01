<template>
  <div v-if="hidden" class="classic-container">
    <img class="classic-img" :src="img" alt>
    <img class="tag" src="../../../static/img/movie@tag.png" alt>
    <div class="content">{{content}}</div>
  </div>
</template>
<script>
import { mixin } from './classic-mixin.js'
export default {
    mixins: [mixin],
    data() {}
}
</script>
<style scoped>
@import url('./common.css');
</style>

