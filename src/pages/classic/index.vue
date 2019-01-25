<template>
  <div>
    <Like :like="classic.like_status" :count="classic.fav_nums" @on-like="onLike"></Like>
    <Movie :img="classic.image" :content="classic.content"></Movie>
  </div>
</template>

<script>
import Like from '@/components/like'
import Movie from '@/components/movie'
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
    Movie
  },
  methods: {
    onLike(event) {
      likeModel.like({
        like: event.like,
        art_id: this.classic.id,
        type: this.classic.type
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
    classicModel.getLatest(res => {
      this.classic = res
    })
  }
}
</script>

<style>
</style>
