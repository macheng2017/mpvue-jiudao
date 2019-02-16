import { config } from '../config.js'

const tips = {
  1: '抱歉,出现了一个错误',
  1005: '授权失败',
  3000: '未知错误'
}
class Http {
  request(url, data = {}, method = 'GET') {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url, resolve, reject, data = {}, method = 'GET') {
    wx.request({
      url: config.base_url + url,
      method: method,
      data: data,
      header: {
        appkey: config.appkey
      },
      success: res => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
          // 这种写法等同于 if(params.success){...}
        } else {
          reject()
          let errorCode = res.data.error_code
          this._showError(errorCode)
        }
      },
      fail: err => {
        reject(err)
        console.log(err)
        this._showError(1)
      }
    })
  }
  _showError(errorCode) {
    if (!errorCode) {
      errorCode = 1
    }
    wx.showToast({
      title: tips[errorCode],
      icon: 'none',
      duration: 2000
    })
  }
}

export { Http }
