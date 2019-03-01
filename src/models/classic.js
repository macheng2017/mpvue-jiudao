import { Http } from '@/utils/http.js'

class ClassicModel extends Http {
    getLatest(callBack) {
        this.request({
            url: '/classic/latest',
            method: 'GET',
            success: res => {
                callBack(res)
                this._setLatestIndex(res.index)
                let key = this._getKey(res.index)
                wx.setStorageSync(key, res)
            }
        })
    }
    // 获取当前一期的上一期(默认/初始化显示的是最新一期)
    getClassic(index, previousOrNext, callBack) {
        // 加入缓存
        // 1. 请求数据的时候先去查找缓存
        // 2. 如果缓存不存在则,发送请求到服务器,获取到数据返回并加入缓存
        // 3. 如果缓存存在直接返回即可
        let key =
            previousOrNext === 'next'
                ? this._getKey(index + 1)
                : this._getKey(index - 1)
        let val = wx.getStorageSync(key)
        if (!val) {
            console.log(key)
            this.request({
                url: `/classic/${index}/${previousOrNext}`,
                method: 'GET',
                success: res => {
                    callBack(res)
                    wx.setStorageSync(key, res)
                }
            })
        } else {
            callBack(wx.getStorageSync(key))
        }
    }
    _getKey(index) {
        return 'classic-' + index
    }
    isFirst(index) {
        return index === 2 ? 1 : 0
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
