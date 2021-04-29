<template>
  <div>
    <Layout>
      <div class="tags">
        <ul class="tags-list">
          <span>衣</span>
          <span>食</span>
          <span>住</span>
          <span>行</span>
        </ul>
        <div class="tag-add">新增标签</div>
      </div>
      <div class="note">
        <label class="note-label">
          <span>备注</span>
          <input type="text" placeholder="这里添加备注" />
        </label>
      </div>
      <div class="type">
        <button class="selected">支出</button>
        <button>收入</button>
      </div>
      <div class="pad-wrapper">
        <div class="number">100</div>
        <div class="buttons">
          <button>1</button><button>2</button><button>3</button><button>+</button
          ><button>4</button><button>5</button><button>6</button><button>-</button
          ><button>7</button><button>8</button><button>9</button><button>*</button
          ><button>0</button><button>.</button><button>%</button><button>÷</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>

<style lang="scss" scoped>
</style>