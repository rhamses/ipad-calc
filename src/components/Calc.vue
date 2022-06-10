<script setup>
import Button from './Button.vue'
import Calc from '../calc.json'
</script>

<template>
  <section class="calc">
    <section class="calc--header">
      <input type="text" disabled class="visor" value="0">
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
  justify-content: start;
  height: 100vh;
  width: 100vw;
}
.calc--header {
  /* margin-bottom: 3em; */
}
.calc--header .visor {
  padding: 0.3em 0.35em 0 0;
  margin: 0;
  width: 100vw;

  /* outline: solid 1px white; */
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 6rem;
  line-height: 1;
  text-align: right;
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