<template>
  <div class="container">
    <div class="header">
      <div class="episode">
        <Episode :index="classic.index"></Episode>
      </div>
      <div class="like">
        <Like :like="like_status" :count="fav_nums" @on-like="onLike"></Like>
      </div>
    </div>
    <Movie :hidden="classic.type === 100" :img="classic.image" :content="classic.content"></Movie>
    <Music
      :hidden="classic.type === 200"
      :img="classic.image"
      :content="classic.content"
      :src="classic.url"
      @playMus="playMus"
    ></Music>
    <Essay :hidden="classic.type === 300" :img="classic.image" :content="classic.content"></Essay>
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
import Music from '@/components/classic/music'
import Essay from '@/components/classic/essay'
import Episode from '@/components/Episode'
import Navi from '@/components/navi'
import ClassicModel from '@/models/classic'
import LikeModel from '@/models/like'

let classicModel = new ClassicModel()
let likeModel = new LikeModel()
export default {
    data() {
        return {
            classic: {},
            first: false,
            latest: true,
            fav_nums: 1,
            like_status: false
        }
    },
    components: {
        Like,
        Movie,
        Music,
        Essay,
        Episode,
        Navi
    },
    methods: {
        onLike(event) {
            likeModel.like({
                like: event.like, // 用于标注点赞的状态，点赞/取消点赞
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
                this._getUpdateLikeStatus({ type: res.type, art_id: res.id })
            })
        },
        // 为了避免缓存影响单独更新like组件的状态
        _getUpdateLikeStatus(params) {
            likeModel.getClassicLikeStatus(
                {
                    type: params.type,
                    art_id: params.art_id
                },
                res => {
                    this.fav_nums = res.fav_nums
                    this.like_status = res.like_status
                }
            )
        },
        // 获取最新一期期刊
        getLatest() {
            classicModel.getLatest(res => {
                this.classic = res
                this.latestIndex = res.index
                this.fav_nums = res.fav_nums
                this.like_status = res.like_status
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
