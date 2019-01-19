<template>
  <div @click="onLike" class="container">
    <img :src="heart" alt="">
    <span>{{like?count1:count2}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      like: true,
      count1: 999,
      count2: 111,
      count: 999

    }
  },
  computed: {
    heart () {
      return this.like ? '../../components/img/like.png' : '../../components/img/like@dis.png'
    }
  },
  methods: {
    onLike (event) {
      console.log('object', event)
    }
  }

}
</script>

<style scoped>
  .container{
    display:inline-flex;
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
