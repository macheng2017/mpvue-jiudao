import { config } from '../config.js'

class HTTP {
  request(params) {
    wx.request({
      url: config.base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        appkey: config.appkey
      },
      success: res => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
        } else {
        }
      },
      fail: err => {}
    })
  }
  _errorCode(code) {}
}

export { HTTP }
