import { Http } from '@/utils/http.js'

class ClassicModel extends Http {
  getLatest(callBack) {
    this.request({
      url: '/classic/latest',
      method: 'GET',
      success: res => {
        callBack(res)
        this._setLatestIndex(res.index)
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
  isFirst(index) {
    return index === 1 ? 1 : 0
  }
  isLatest(index) {
    return index === this._getLatestIndex() - 1 ? 1 : 0
  }
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }
  _getLatestIndex() {
    return wx.getStorageSync('latest')
  }
}

export default ClassicModel
