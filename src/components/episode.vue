<template>
  <div class="container">
    <div class="index-container">
      <div class="plain">No.</div>
      <div class="index">{{days}}</div>
      <div class="line"></div>
    </div>

    <div class="date-container">
      <div class="month">{{month}}</div>
      <div class="year">{{year}}</div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        index: { type: Number, default: 0 }
    },
    data() {
        return {
            year: 0,
            month: 0,
            months: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月',
                '八月',
                '九月',
                '十月',
                '十一月',
                '十二月'
            ]
        }
    },
    computed: {
        days() {
            return this.index < 10 ? `0${this.index}` : this.index
        }
    },
    methods: {
        getDate() {
            let date = new Date()
            this.year = date.getFullYear()
            this.month = this.months[date.getMonth()]
        }
    },
    mounted() {
        this.getDate()
    }
}
</script>
<style scoped>
.container {
    display: inline-flex;
    flex-direction: row;
    height: 60rpx;
}
.index-container {
    display: flex;
    flex-direction: row;
    align-items: baseline;
}
.index {
    font-size: 60rpx;
    line-height: 60rpx;
    font-weight: 800;
    margin-right: 14rpx;
}
.line {
    height: 44rpx;
    margin-right: 14rpx;
    border-left: 1px solid black;
}
.date-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 8rpx;
}
.month {
    font-size: 24rpx;
}
.year {
    font-size: 20rpx;
}
</style>
