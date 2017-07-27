<template>
  <div id="app">
    <!-- 缓存组件 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>

</style>
