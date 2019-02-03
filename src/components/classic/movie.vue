<template>
  <div class="classic-container">
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
.classic-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.classic-img {
  width: 750rpx;
  height: 500rpx;
}

.tag {
  width: 46rpx;
  height: 142rpx;
  position: relative;
  right: 310rpx;
  bottom: 58rpx;
}

.content {
  font-size: 36rpx;
  max-width: 550rpx;
}
</style>

