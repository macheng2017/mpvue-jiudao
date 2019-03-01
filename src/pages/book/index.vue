<template>
  <div class="container">
    <div class="header" @click="onSearch" v-if="!searching">
      <div class="box">
        <img src="/static/img/icon/search.png">
        <div>搜索数据</div>
      </div>
    </div>

    <!-- <Mask v-if="searching"></Mask> -->
    <div class="sub-container" v-if="!searching">
      <img src="/static/img/book/quality.png" class="head-img">
      <div class="book-container">
        <div class="book" v-for="(book,index) in books" :key="index">
          <Book :book="book"></Book>
        </div>
      </div>
    </div>
    <Search v-if="searching" @onCancel="onCancel"></Search>
  </div>
</template>

<script>
import BookModel from '@/models/book'
import Book from '@/components/book'
import Search from '@/components/search'
// import Mask from '@/components/mask'
const bookModel = new BookModel()
export default {
    data() {
        return {
            books: [],
            searching: false
        }
    },
    components: {
        Book,
        Search
        // Mask
    },
    methods: {
        _getHotList() {
            const hotList = bookModel.getHotList()
            hotList
                .then(res => {
                    this.books = res
                })
                .catch(err => {
                    console.log(err, '错误')
                })
        },
        onSearch() {
            this.searching = true
        },
        onCancel() {
            this.searching = false
        }
    },
    mounted() {
        this._getHotList()
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.sub-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    margin-top: 100rpx;
    /* z-index: -1; */
}
.header {
    position: fixed;
    background-color: #fff;
    height: 100rpx;
    width: 100%;
    border-top: 1px solid #f5f5f5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 3px 0 #e3e3e3;
    z-index: 99;
}
.box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: #f5f5f5;
    height: 68rpx;
    width: 700rpx;
    color: #999;
}
.head-img {
    width: 106rpx;
    height: 34rpx;
    margin-top: 40rpx;
}
.box img {
    margin-right: 10px;
    width: 14px;
    height: 14px;
    margin-bottom: -2px;
}
.book-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 90rpx 0 90rpx;
}
.book {
    margin-bottom: 10rpx;
}
</style>
