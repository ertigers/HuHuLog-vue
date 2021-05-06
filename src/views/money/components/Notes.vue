<template>
  <div>
    <label class="note">
      <span>备注</span>
      <input type="text" placeholder="这里添加备注" />
    </label>
  </div>
</template>
<script lang='ts'>
export default {
name:''
}
</script>
<style lang='scss' scoped>
.note {
  display: flex;
  align-items: center;
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  span {
    padding-right: 16px;
  }
  input {
    flex-grow: 1;
    height: 64px;
    border: none;
    background: transparent;
    padding-right: 16px;
  }
}
</style>