<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync='record.amount'/>
    <Types :value.sync='record.type'/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :tag-data.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

import Notes from './components/Notes.vue';
import NumberPad from './components/NumberPad.vue';
import Tags from './components/Tags.vue';
import Types from './components/Types.vue';

type Record = {
  tags:string[]
  notes:string
  type:string
  amount:number
}

@Component({components:{NumberPad, Tags, Types, Notes}})

export default class Money extends Vue{
  tags:string[] =['衣','食','住','行'] 
  record: Record = {
    tags:[],notes:'',type:'-',amount:0
  }
  onUpdateTags(value:string[]) {
    this.record.tags = value
  }
  onUpdateNotes(value:string){
    this.record.notes = value
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