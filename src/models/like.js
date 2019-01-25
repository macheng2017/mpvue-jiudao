import { Http } from '@/utils/http.js'
class LikeModel extends Http {
  like(params) {
    this.request({
      url: params.like ? '/like' : '/like/cancel',
      method: 'POST',
      data: {
        art_id: params.art_id,
        type: params.type
      }
    })
  }
}

export default LikeModel
