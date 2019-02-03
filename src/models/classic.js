import { Http } from '@/utils/http.js'

class ClassicModel extends Http {
  getLatest(callBack) {
    this.request({
      url: '/classic/latest',
      method: 'GET',
      success: res => {
        callBack(res)
      }
    })
  }
  // 获取当前一期的上一期(默认/初始化显示的是最新一期)
  getPrevious(index, callBack) {
    this.request({
      url: `/classic/${index}/previous`,
      method: 'GET',
      success: res => {
        callBack(res)
      }
    })
  }

  getNext(index, callBack) {
    this.request({
      url: `/classic/${index}/next`,
      method: 'GET',
      success: res => {
        callBack(res)
      }
    })
  }
}

export default ClassicModel
