<script setup>
import Calc from './components/Calc.vue'
</script>

<template>
  <div class="main">
    <Calc />
  </div>
</template>

<style>
:root {
  --keypad: rgb(51, 51, 51);
  --keypad-hover: #737373;
  --operation:  #F1A33C;
  --operation-hover: #F3C995;
  --options: rgb(165, 165, 165);
  --options-hover: #D9D9D9;
  --formula: rgb(33, 33, 33);
  --formula-hover: #4D4D4D;
}

body {
  background-color: #000;
}
</style>
