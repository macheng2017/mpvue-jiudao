import { Http } from '@/utils/http-p.js'

class BookModel extends Http {
    getHotList(url) {
        return this.request({ url: '/book/hot_list' })
    }
    getDetail(bid) {
        return this.request({
            url: `/book/${bid}/detail`
        })
    }
    getComments(bid) {
        return this.request({
            url: `/book/${bid}/short_comment`
        })
    }
    getLikeStatus(bid) {
        return this.request({
            url: `/book/${bid}/favor`
        })
    }
    search(start = 0, q) {
        return this.request({
            url: `/book/search`,
            data: {
                start,
                q
            }
        })
    }
}

export default BookModel
