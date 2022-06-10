<script setup>
import Button from './Button.vue'
import Calc from '../calc.json'
</script>

<template>
  <section class="calc">
    <Button :label="item.label" :type="item.type" :action="item.action" v-for="(item, index) in Calc" :key="index"></Button>
  </section>
</template>

<style scoped>
.calc {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 81vw;
  justify-content: space-evenly;

  font-size: 16px;
}
</style>