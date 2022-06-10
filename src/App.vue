<script setup>
import Calc from './components/Calc.vue'
</script>

<template>
  <div class="main">
    <img class="reference" src="/iphone-vertical.jpg" alt="" srcset="">
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



.reference {
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: .5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;

}
</style>
