<template>
  <div class="container-wrapper">
    <div class="content">
      <slot />
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Nav from '@/components/Nav.vue'
export default {
  components:{ Nav },
  name:'Layout'
}
</script>

<style lang="scss" scoped>
.container-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;

}
.content {
  flex-grow: 1;
  overflow: auto;
}
</style>