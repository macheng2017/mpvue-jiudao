<template>
  <div class="container">
    <img src="../components/img/like@dis.png" alt="">
    <span>999</span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container{
    display:flex;
    flex-direction:row;
    padding:10rpx;
  }
  .container img {
    width:32rpx;
    height:28rpx;
  }
  .container span{
    font-family: "PingFangSC-Thin";
    font-size: 24rpx;
    position: relative;
    bottom: 10rpx;
    left: 10rpx;
    line-height: 24rpx;
  }

</style>
