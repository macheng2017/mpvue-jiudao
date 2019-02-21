<template>
  <div class="container tag-class">
    <div class="text">{{text}}</div>
    <div>+{{count}}</div>
  </div>
</template>

<script>
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
.text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 250rpx;
}
</style>
