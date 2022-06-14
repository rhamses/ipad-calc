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
  --operation:  rgb(240, 163, 72);
  --options: rgb(165, 165, 165);
  --formula: rgb(33, 33, 33);
}

body {
  background-color: #000;
}
</style>
