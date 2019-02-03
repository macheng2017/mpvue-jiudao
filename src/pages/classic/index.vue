<template>
  <div class="container">
    <div class="header">
      <div class="episode">
        <Episode :index="classic.index"></Episode>
      </div>
      <div class="like">
        <Like :like="classic.like_status" :count="classic.fav_nums" @on-like="onLike"></Like>
      </div>
    </div>
    <Movie :img="classic.image" :content="classic.content"></Movie>
    <div class="navi">
      <Navi @onLeft="onPrevious" @onRight="onNext" :title="classic.title"></Navi>
    </div>
  </div>
</template>

<script>
import Like from '@/components/like'
import Movie from '@/components/classic/movie'
import Episode from '@/components/Episode'
import Navi from '@/components/navi'
import ClassicModel from '@/models/classic.js'
import LikeModel from '@/models/like.js'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()
export default {
  data() {
    return {
      classic: {},
      content: ''
    }
  },
  components: {
    Like,
    Movie,
    Episode,
    Navi
  },
  methods: {
    onLike(event) {
      likeModel.like({
        like: event.like,
        art_id: this.classic.id,
        type: this.classic.type
      })
    },
    onPrevious(event) {
      console.log('previous')
    },
    onNext(event) {
      console.log('next')
    }
  },
  mounted() {
    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   header: { appkey: 'L1jx1MUHo615XJGx' }
    // })
    // http.request({
    //   url: '/classic/latest',
    //   method: 'GET',
    //   success: res => {
    //     console.log(res)
    //   }
    // })
    classicModel.getLatest(res => {
      this.classic = res
    })
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100rpx;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
}
.like {
  margin-top: 10rpx;
}
.episode {
  margin-left: 5rpx;
}
.navi {
  position: absolute;
  bottom: 40rpx;
}
</style>
