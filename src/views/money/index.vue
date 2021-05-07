<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync='record.amount' @submit="saveRecord"/>
    <Types :value.sync='record.type'/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :tag-data.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Watch} from 'vue-property-decorator'
import model from '@/model.ts'

import Notes from '@/views/money/components/Notes.vue';
import NumberPad from '@/views/money/components/NumberPad.vue';
import Tags from '@/views/money/components/Tags.vue';
import Types from '@/views/money/components/Types.vue';

type RecordItem = {
  tags:string[]
  notes:string
  type:string
  amount:number
  createdAt?:Date
}

@Component({components:{NumberPad, Tags, Types, Notes}})
export default class Money extends Vue{
  tags: string[] =['衣','食','住','行'] 
  record: RecordItem = {
    tags:[],notes:'',type:'-',amount:0,
  }
  recordList: RecordItem[] = []
  onUpdateTags(value:string[]) {
    this.record.tags = value
  }
  onUpdateNotes(value:string){
    this.record.notes = value
  }
  saveRecord() {
    const record2:RecordItem = model.clone(this.record)
    record2.createdAt = new Date()
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange() {
    model.save(this.recordList)
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

</style>