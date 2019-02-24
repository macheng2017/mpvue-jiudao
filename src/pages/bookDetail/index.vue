<template>
  <div class="container">
    <div class="head">
      <img :src="book.image" alt>
      <div class="title">{{book.title}}</div>
      <div class="author">{{book.author}}</div>
    </div>
    <div class="sub-container">
      <div class="headline">短评</div>
      <div class="comment-container">
        <div class="tag" v-for="(item, index) in comments" :key="index">
          <Tag :text="item.content" :count="item.nums" :tag-class="ex-tag"></Tag>
        </div>
      </div>
    </div>
    <div class="sub-container">
      <div class="headline">内容</div>
      <div class="content">{{summary}}</div>
    </div>
    <div class="sub-container">
      <div class="headline">书本信息</div>
      <div class="detail-container">
        <div class="vertical description">
          <div>出版社</div>
          <div>出版年</div>
          <div>页数</div>
          <div>定价</div>
          <div>装帧</div>
        </div>
        <div class="vertical">
          <div>{{book.publisher}}</div>
          <div>{{book.pubdate}}</div>
          <div>{{book.pages}}</div>
          <div>{{book.price}}</div>
          <div>{{book.binding}}</div>
        </div>
      </div>
    </div>
    <div class="post-container">
      <div bind:tap="onFakePost" class="post-fake">
        <div>输入短评</div>
      </div>
      <div class="like-container">
        <div class="like">
          <Like :like="likeStatus" :count="likeCount" @on-like="onLike"></Like>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookModel from '@/models/book'
import Tag from '@/components/tag'
import Like from '@/components/like'
import LikeModel from '@/models/like'
let likeModel = new LikeModel()

const bookModel = new BookModel()
export default {
  data() {
    return {
      // books: [],
      comments: [],
      book: {},
      likeStatus: false,
      likeCount: 0,
      summary: ''
    }
  },
  // externalClasses: ['tag-class'],
  components: { Tag, Like },
  methods: {
    async getBooksData(bid) {
      this.book = await bookModel.getDetail(bid)
      this.comments = (await bookModel.getComments(bid)).comments
      const like = await bookModel.getLikeStatus(bid)
      this.likeStatus = like.like_status
      this.likeCount = like.fav_nums
      // this.nums = console.log('comments', this.comments)
      this._formatContent()
      console.log(this.summary)
    },
    _formatContent() {
      console.log('_formatContent')
      let summary = this.book.summary
      const reg = new RegExp('\\\\n', 'g')
      this.summary = summary.replace(reg, '\n')
    },
    onLike(event) {
      likeModel.like({
        like: event.like, // 用于标注点赞的状态，点赞/取消点赞
        art_id: this.book.id,
        type: 400
      })
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
/* .comment-container {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
} */
.tag {
  display: inline-flex;
  flex-direction: row;
  margin-right: 5rpx;
}
.tag:nth-child(1) > div {
  background-color: #fffbdd;
}
.tag:nth-child(2) > div {
  background-color: #eefbff;
}
.content {
  text-indent: 56rpx;
  font-size: 28rpx;
}
.vertical {
  display: flex;
  flex-direction: column;
}

.description {
  color: #999;
  margin-right: 30rpx;
}
.detail-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 100rpx;
  font-size: 28rpx;
  color: #666;
}

.post-container {
  height: 100rpx;
  box-shadow: 1px -1px 1px #e3e3e3;
  position: fixed;
  width: 690rpx;
  background-color: #fff;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 30rpx;
  justify-content: space-between;
}

.post-fake {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60rpx;
  width: 460rpx;
  border: 1px solid #999;
  border-radius: 15px;
  font-size: 22rpx;
  padding-left: 20rpx;
}

.like {
  margin-right: 30rpx;
  margin-top: 10rpx;
}
.like > div {
  background-color: #fff;
}

.like-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
