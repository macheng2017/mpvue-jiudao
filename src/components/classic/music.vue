<template>
  <div v-if="hidden" class="container">
    <img class="music-img" :class="playing?'rotation':''" :src="img">
    <img class="play-img" @click="onPlay" :src="playing ? pauseSrc : playSrc">
    <img class="tag" src="/static/img/music@tag.png">
    <div class="content">{{content}}</div>
  </div>
</template>
<script>
import { mixin } from './classic-mixin.js'
import { mapState, mapMutations } from 'vuex'
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
    computed: {
        ...mapState(['musicState'])
    },
    methods: {
        ...mapMutations(['musicSrcChange']),
        onPlay() {
            // this.playing = this.playing ? 0 : 1
            if (!this.playing) {
                mMgr.src = this.src
                mMgr.title = '测试'
                this.playing = true
                // 将播放状态(src)保存到vuex state中
                this.musicSrcChange({ src: this.src })
            } else {
                this.playing = false
                mMgr.pause()
            }
        },
        _recoverStatus() {
            if (mMgr.src !== undefined) {
                if (this.src === mMgr.src) {
                    this.playing = true
                } else {
                    this.playing = false
                }
            }
            // if (mMgr.pause) {
            //   this.playing = false
            //   return
            // }
            // if (this.src === mMgr.src) {
            //   this.playing = true
            // }
        },
        // 同步小程序音乐的总控开关的播放状态,有些问题,只有stop有用
        _monitorSwitch() {
            mMgr.onPlay(() => {
                this._recoverStatus()
                console.log('play')
            })
            mMgr.onPause(() => {
                this._recoverStatus()
                console.log('pause')
            })
            mMgr.onStop(() => {
                this._recoverStatus()
            })
            mMgr.onEnded(() => {
                this._recoverStatus()
            })
        }
    },
    // 使用侦听函数watch,检测切换音乐
    watch: {
        src(newSrc, oldSrc) {
            console.log('working....')
            this._recoverStatus()
            // this._monitorSwitch()
        }
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
.rotation {
    -webkit-transform: rotate(360deg);
    animation: rotation 12s linear infinite;
    -moz-animation: rotation 12s linear infinite;
    -webkit-animation: rotation 12s linear infinite;
    -o-animation: rotation 12s linear infinite;
}
@-webkit-keyframes rotation {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}
</style>

