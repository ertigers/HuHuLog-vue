<template>
  <div class="tags">
    <div class="tag-add">
      <button @click='create'>新增标签</button>
    </div>
    <ul class="tags-list">
      <li v-for="tag in tagData" :key="tag" @click="toogle(tag)" :class="selectedTags.indexOf(tag)>=0 && 'selected' ">{{tag}}</li>
    </ul>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
import { Component,Prop } from 'vue-property-decorator'
@Component
export default class Tags extends Vue {
  @Prop() readonly tagData: string[] | undefined
  selectedTags: string[] = []
  toogle(tag:string) {
    const index = this.selectedTags.indexOf(tag)
    if( index >= 0) {
      this.selectedTags.splice(index,1)
    }else {
      this.selectedTags.push(tag)
    }
    this.$emit('update:value',this.selectedTags)
  }
  create() {
    const name = window.prompt("请输入标签名")
    if(name === '') {
      window.alert('标签名为空')
    }else if(name === null){
      return
    }else {
      this.$emit('update:tagData', [...this.tagData!,name])
    }
  }
}


</script>
<style lang='scss' scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  background: white;
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
    .selected {
      background: rgb(255, 159, 159);    
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