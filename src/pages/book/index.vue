<template>
  <div class="container"></div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  methods: {},
  mounted() {}
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100rpx;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
}
.like {
  margin-top: 10rpx;
}
.episode {
  margin-left: 5rpx;
}
.navi {
  position: absolute;
  bottom: 40rpx;
}
</style>
