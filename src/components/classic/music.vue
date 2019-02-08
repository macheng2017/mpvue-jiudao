<template>
  <div v-if="hidden" class="container">
    <img class="music-img" :src="img">
    <img class="play-img" @click="onPlay" :src="playing?pauseSrc:playSrc">
    <img class="tag" src="/static/img/music@tag.png">
    <div class="content">{{content}}</div>
  </div>
</template>
<script>
import { mixin } from './classic-mixin.js'
let mMgr = wx.getBackgroundAudioManager()
export default {
  mixins: [mixin],
  props: {
    src: String
  },
  data() {
    return {
      playSrc: '/static/img/player@play.png',
      pauseSrc: '/static/img/player@pause.png',
      playing: false
    }
  },
  methods: {
    onPlay() {
      console.log('onPlay')
      this.playing = this.playing ? 0 : 1
      if (this.playing) {
        mMgr.src = this.src
        mMgr.title = '测试'
      } else {
        mMgr.pause()
      }
    }
  },
  created() {
    console.log('object')
  },
  attached() {
    console.log('attached')
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.music-img {
  width: 422rpx;
  height: 422rpx;
  margin-top: 60rpx;
  border-radius: 50%;
}
.play-img {
  width: 120rpx;
  height: 120rpx;
  position: relative;
  border-radius: 50%;
  bottom: 270rpx;
}
.tag {
  width: 44rpx;
  height: 128rpx;
  position: relative;
  bottom: 160rpx;
  right: 310rpx;
}
</style>

