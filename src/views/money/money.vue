<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync='record.amount' @submit="saveRecord"/>
    <Types :value.sync='record.type'/>
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
    </div>
    <Tags @update:value="record.tags = $event" />
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

import FormItem from '@/components/FormItem.vue';
import NumberPad from '@/views/money/components/NumberPad.vue';
import Tags from '@/views/money/components/Tags.vue';
import Types from '@/views/money/components/Types.vue';

// vscode代码检测有问题，已经在全局声明了type，代码检测过不去
type RecordItem = {
  tags:string[]
  notes:string
  type:string
  amount:number
  createdAt?:Date
}

@Component({
  components:{NumberPad, Tags, Types, FormItem},
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList
  }
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };
  created() {
   this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit('createRecord',this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
  .notes {
    padding: 12px 0;
  }
</style>