<template>
  <div>
    <like></like>
    <div>123</div>
  </div>
</template>

<script>
import like from '@/components/like'
export default {
  data() {
    return {}
  },
  components: {
    like
  },
  async mounted() {
    wx.request({
      url: 'http://bl.7yue.pro/v1/classic/latest',
      header: {appkey: 'L1jx1MUHo615XJGx'}
    })
  }
}
</script>

<style>
</style>
