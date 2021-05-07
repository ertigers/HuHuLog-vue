<template>
  <div>
    <label class="notes">
      <span>备注</span>
      <input type="text" v-model="value" placeholder="这里输入备注" />
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import {Component,Watch} from 'vue-property-decorator'
@Component
export default class Notes extends Vue {
  value = ''
  @Watch('value')
  onValueChanged(value:string,oldValue:string){
    this.$emit('update:value',value)
  }
}
</script>

<style lang='scss' scoped>
.notes {
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