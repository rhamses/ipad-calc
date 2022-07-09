<script setup>
import Calc from './components/Calc.vue'
</script>

<template>
  <Calc />
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
  --ios-height: 95vh;
  --ios-margin: 2em;
  --visor-font-size: 600%;
}

body {
  background-color: #000;
}

.teste {
  height: 50px;
  width: 50%;
  border-radius: 50%;
  background-color: pink;
}
</style>
