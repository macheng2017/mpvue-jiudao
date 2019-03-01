import { Http } from '@/utils/http-p.js'
class SearchModel extends Http {
    getHotSearchKeyword() {
        return this.request({ url: '/book/hot_keyword' })
    }
}

export default SearchModel
