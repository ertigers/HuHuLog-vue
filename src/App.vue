<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
@import '~@/assets/styles/reset.scss';  
@import '~@/assets/styles/helper.scss'; 

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
  background: #f5f5f5;
}
</style>
