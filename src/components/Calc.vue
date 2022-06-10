<script setup>
import Button from './Button.vue'
import Calc from '../calc.json'
</script>

<template>
  <section class="calc">
    <section class="calc--header">
      <input type="text" disabled class="visor">
    </section>
    <section class="calc--buttons">
      <Button :label="item.label" :type="item.type" :action="item.action" v-for="(item, index) in Calc" :key="index"></Button>
    </section>
  </section>
</template>

<style scoped>
.calc {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
}
.calc--buttons {
  display: flex;
  flex-wrap: wrap;
  /* position: absolute;
  top: 81vw; */
  justify-content: space-evenly;

  font-size: 16px;
}
</style>