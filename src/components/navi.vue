<template>
  <div class="container">
    <img @click="onLeft" class="icon" :src="latest?disLeftSrc:leftSrc" alt>
    <div class="title">{{title}}</div>
    <img @click="onRight" class="icon" :src="first?disRightSrc:rightSrc" alt>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        first: Boolean,
        latest: Boolean
    },
    data() {
        return {
            disLeftSrc: '/static/img/triangle.dis@left.png',
            leftSrc: '/static/img/triangle@left.png',
            disRightSrc: '/static/img/triangle.dis@right.png',
            rightSrc: '/static/img/triangle@right.png'
        }
    },
    methods: {
        onLeft() {
            if (!this.latest) {
                this.$emit('onLeft')
            }
        },
        onRight() {
            if (!this.first) {
                this.$emit('onRight')
            }
        }
    }
}
</script>


<style scoped>
.container {
    width: 600rpx;
    height: 80rpx;
    background-color: #f7f7f7;
    border-radius: 2px;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.icon {
    height: 80rpx;
    width: 80rpx;
}
.title {
    font-size: 28rpx;
}
</style>
