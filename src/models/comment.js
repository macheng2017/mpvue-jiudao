import { Http } from '@/utils/http-p.js'

class CommentModel extends Http {
  getHotList(url) {
    return this.request({ url: '/book/hot_list' })
  }
  pushComment(id, text) {
    return this.request({
      url: '/book/add/short_comment',
      method: 'POST',
      data: { book_id: id, content: text }
    })
  }
}

export default CommentModel
