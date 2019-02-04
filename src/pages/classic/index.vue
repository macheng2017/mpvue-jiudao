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
      <Navi
        @onLeft="onNext"
        @onRight="onPrevious"
        :first="first"
        :latest="latest"
        :title="classic.title"
      ></Navi>
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
      latestIndex: 0,
      content: '',
      first: false,
      latest: true
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
      this._getPreviousOrNext('previous')
    },
    onNext(event) {
      this._getPreviousOrNext('next')
    },
    _getPreviousOrNext(previousOrNext) {
      let index = this.classic.index
      this.first = classicModel.isFirst(index)
      this.latest = classicModel.isLatest(index)
      classicModel.getClassic(index, previousOrNext, res => {
        this.classic = res
      })
    },
    // 获取最新一期期刊
    getLatest() {
      classicModel.getLatest(res => {
        this.classic = res
        this.latestIndex = res.index
      })
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
    this.getLatest()
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
