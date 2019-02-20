<template>
  <div class="container">
    <div>{{text}}</div>
    <div>+{{count}}</div>
  </div>
</template>

<script scoped>
export default {
  props: ['text', 'count']
}
</script>

<style scoped>
.container {
  padding: 4rpx 12rpx;
  background-color: #f5f5f5;
  color: #666;
  border-radius: 2rpx;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 28rpx;
}
</style>
