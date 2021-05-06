<template>
  <div class="tags">
    <div class="tag-add">
      <button>新增标签</button>
    </div>
    <ul class="tags-list">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>
<script lang='ts'>
export default {
name:'Tags'
}
</script>
<style lang='scss' scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  > .tags-list {
    display: flex;
    flex-wrap: wrap;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 12px;
      margin-right: 12px;
      margin-top: 8px;
    }
  }
  > .tag-add {
    padding-top: 16px;
    button {
      background: transparent;
      color: #d9d9d9;
      border: none;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>