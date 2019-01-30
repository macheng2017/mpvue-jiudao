<template>
  <div class="container">
    <div>No.</div>
    <div>{{days}}</div>
    <div>|</div>
    <div>{{month}}</div>
    <div>{{year}}</div>
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
      month: 0
    }
  },
  computed: {
    days() {
      return this.index < 10 ? `0${this.index}` : this.index
    }
  }
}
</script>
<style>
.container {
  display: flex;
  flex-direction: row;
}
</style>
