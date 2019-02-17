<template>
  <div class="container">
    <div class="book" v-for="(book,index) in books" :key="index">
      <Book :book="book"></Book>
    </div>
  </div>
</template>

<script>
import BookModel from '@/models/book'
import Book from '@/components/book'
const bookModel = new BookModel()
export default {
  data() {
    return {
      books: []
    }
  },
  components: {
    Book
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
    }
  },
  mounted() {
    this._getHotList()
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.book {
  margin: 60rpx;
}
</style>
