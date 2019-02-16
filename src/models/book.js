import { Http } from '@/utils/http-p.js'

class BookModel extends Http {
  getHotList(url) {
    return this.request({ url: '/book1/hot_list' })
  }
}

export default BookModel
