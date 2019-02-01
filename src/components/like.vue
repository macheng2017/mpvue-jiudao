<template>
  <div @click="onLike" class="container">
    <img :src="heart">
    <span>{{count}}</span>
  </div>
</template>

<script>
export default {
  props: {
    like: { type: Boolean },
    count: { type: Number, default: 0 }
  },
  data() {
    return {}
  },
  computed: {
    heart() {
      return this.like ? '/static/img/like.png' : '/static/img/like@dis.png'
    }
  },

  methods: {
    onLike(event) {
      // console.log('object', event)
      // if (this.like) {
      //   this.count--
      //   this.like = false
      // } else {
      //   this.count++
      //   this.like = true
      // }
      this.count = this.like ? this.count - 1 : this.count + 1
      this.like = !this.like
      // 子组件向父组件传递信息
      this.$emit('on-like', { like: this.like })
    }
  }
}
</script>

<style scoped>
.container {
  display: inline-flex;
  flex-direction: row;
  padding: 10rpx;
  width: 90rpx;
  height: 40rpx;
}
.container img {
  width: 32rpx;
  height: 28rpx;
}
.container span {
  font-family: 'PingFangSC-Thin';
  font-size: 24rpx;
  position: relative;
  bottom: 10rpx;
  left: 10rpx;
  line-height: 24rpx;
}
</style>
