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
let classic = new ClassicModel()
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
      console.log(event)
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
    classic.getLatest(res => {
      this.classic = res
    })
  }
}
</script>

<style>
</style>
