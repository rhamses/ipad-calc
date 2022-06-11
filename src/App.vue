<script setup>
import Calc from './components/Calc.vue'
</script>

<template>
  <div class="main">
    <!-- <p style="color: white; font-family: 'SF Pro'; font-weight: 300;">sf pro test light</p>
    <p style="color: white; font-family: 'SF Pro'; font-weight: normal;">sf pro test regular</p>
    <p style="color: white; font-family: 'SF Pro'; font-weight: bold;">sf pro test bold</p> -->
    <!-- <img class="reference" src="/iphone-vertical.jpg" alt="" srcset=""> -->
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
  /* background-image: url('/iphone-vertical.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; */
}

.reference {
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: .5;
}
</style>
