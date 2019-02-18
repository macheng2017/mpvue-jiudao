<template>
  <div class="container">
    <div class="head">
      <img :src="book.image" alt>
      <div class="title">{{book.title}}</div>
      <div class="author">{{book.author}}</div>
    </div>
    <div class="sub-container">
      <div class="headline">短评</div>
    </div>
  </div>
</template>

<script>
import BookModel from '@/models/book'
const bookModel = new BookModel()
export default {
  data() {
    return {
      // books: [],
      comments: [],
      book: {},
      likeStatus: false,
      likeCount: 0
    }
  },
  components: {},
  methods: {
    async getBooksData(bid) {
      this.book = await bookModel.getDetail(bid)
      this.comments = await bookModel.getComments(bid)
      const like = await bookModel.getLikeStatus(bid)
      this.likeStatus = like.like_status
      this.likeCount = like.fav_nums
    }
  },
  mounted() {
    const bid = this.$root.$mp.query.bid
    this.getBooksData(bid)
  }
}
</script>

<style>
.container {
  background-color: #f5f5f5;
  width: 100%;
}

.head {
  background-color: #fff;
  padding-top: 40rpx;
  padding-bottom: 40rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  color: #2f2f2f;
  margin-top: 20rpx;
  font-size: 38rpx;
  font-weight: 600;
}
.author {
  font-size: 28rpx;
  color: #999;
}
.head img {
  width: 200rpx;
  height: 300rpx;
  box-shadow: 2px 2px 3px #e3e3e3;
}
.sub-container {
  width: 690rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30rpx;
  background-color: #fff;
  padding: 30rpx;
}
.headline {
  font-size: 30rpx;
  font-weight: 600;
  color: #2f2f2f;
  margin-bottom: 20rpx;
}
</style>
