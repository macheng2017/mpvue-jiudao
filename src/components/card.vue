<template>
  <div>
    <p class="card">{{text}}</p>
  </div>
</template>

<script scoped>
export default {
    props: ['text']
}
</script>

<style scoped>
.card {
    padding: 10px;
}
</style>
