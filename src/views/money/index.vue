<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Notes from './components/Notes.vue';
import NumberPad from './components/NumberPad.vue';
import Tags from './components/Tags.vue';
import Types from './components/Types.vue';
export default {
  name: "Money",
  components:{ NumberPad, Tags, Types, Notes }
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

</style>