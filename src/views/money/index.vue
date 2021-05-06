<template>
  <Layout class-prefix="layout">
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button><button>2</button><button>3</button><button>+</button><button>删除</button>
        <button>4</button><button>5</button><button>6</button><button>-</button><button>清空</button>
        <button>7</button><button>8</button><button>9</button><button>*</button><button class="ok">OK</button>
        <button>0</button><button>.</button><button>%</button><button>÷</button>
      </div>
    </div>
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div>
      <label class="note">
        <span>备注</span>
        <input type="text" placeholder="这里添加备注" />
      </label>
    </div>
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
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Money",
};
</script>
<style lang="scss">
// .layout-wrapper {
//   border: 1px solid blue;
// }
.layout-content {
  // border: 1px solid red;
  display: flex;
  flex-direction: column-reverse;

}
</style>
<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
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
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
.numberPad {
  .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 20%;
      height: 64px;
      background: transparent;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),&:nth-child(6) {
        background: darken($bg,4%);
      }
      &:nth-child(3),&:nth-child(7),&:nth-child(11) {
        background: darken($bg,4*2%);
      }
      &:nth-child(4),&:nth-child(8),&:nth-child(12),&:nth-child(16) {
        background: darken($bg,4*3%);
      }
      &:nth-child(5),&:nth-child(9),&:nth-child(13),&:nth-child(17) {
        background: darken($bg,4*4%);
      }
      &:nth-child(10),&:nth-child(14),&:nth-child(18) {
        background: darken($bg,4*5%);
      }
      &:nth-child(15) {
        background: rgb(255, 159, 159);
      }
      &:nth-child(19) {
        background: darken($bg,4*6%);
      }
    }
  }
}
</style>