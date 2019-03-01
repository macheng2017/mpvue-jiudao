<template>
  <div @click="onTap($event,book.id)" class="container">
    <img :src="book.image">
    <div class="description">
      <div class="title">{{book.title}}</div>
      <div class="author">{{book.author}}</div>
      <div class="foot">
        <div class="footer">{{book.fav_nums}} 喜欢</div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
    props: ['book'],
    methods: {
        onTap(event, id) {
            // console.log(event, id)
            wx.navigateTo({
                url: `/pages/bookDetail/main?bid=${id}`
            })
        }
    }
}
</script>

<style scoped>
.container {
    margin-top: 30rpx;
    display: flex;
    position: relative;
    box-shadow: 2px 2px 3px #e3e3e3;
    flex-direction: column;
    width: 240rpx;
    height: 360rpx;
}
.container img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
}
.description {
    width: 216rpx;
    position: absolute;
    bottom: 0;
    background-color: #ffffff;
    font-size: 24rpx;
    padding: 5rpx 10rpx 8rpx 15rpx;
    display: flex;
    flex-direction: column;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
}
.title {
    margin-top: 10rpx;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.author {
    font-size: 20rpx;
    color: #999;
    margin-bottom: 10rpx;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.foot {
    font-size: 20rpx;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.footer {
    color: #666;
}
</style>
