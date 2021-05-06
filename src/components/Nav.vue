<template>
  <nav class="nav">
    <router-link class="item" active-class="selected" to="/money">
      <Icon name="money" />
      记账
    </router-link>
    <router-link class="item" active-class="selected" to="/labels">
      <Icon name="label" /> 
      标签
    </router-link>
    <router-link class="item" active-class="selected" to="/statistics">
      <Icon name="statistics" /> 
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
.nav {
  @extend %outerShadow;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 0;
    .icon {
      width: 28px;
      height: 28px;
    }
  }
  .selected {
    color: red;
  }
}
</style>
