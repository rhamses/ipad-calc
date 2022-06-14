<script setup>
import Button from './Button.vue'
import Calc from '../calc.json'
import { ref } from 'vue'
// Function that checks device orientation
function checkOrientation() {
  return window.matchMedia("(orientation: portrait)").matches ? false : true;
}
// Initialize variable with checkOrientation value
const landscape = ref(checkOrientation())
// Check the same checkOrientation function every time the orientation changes
window.addEventListener('resize', () => landscape.value = checkOrientation())
</script>

<template>
  <section class="calc">
    <section class="calc--header">
      <input type="text" disabled class="visor" value="0">
    </section>
    <section class="calc--buttons">
      <Button :label="item.label" :type="item.type" :action="item.action" v-for="(item, index) in Calc.standard" :key="index"></Button>
    </section>
    <section v-if="landscape" class="calc--buttons__extra">
      <Button :label="item.label" :type="item.type" :action="item.action" v-for="(item, index) in Calc.advanced" :key="index"></Button>
    </section>
  </section>
</template>

<style scoped>
.calc {
  height: 100vh;
  width: 100vw;
}
.calc--header .visor {
  margin: 0;
  padding: 0.3em 0.35em 0 0;
  width: 100vw;

  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 6rem;
  line-height: 1;
  text-align: right;
}
.calc--buttons,
.calc--buttons__extra {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  font-size: 16px;
}
@media screen and (orientation: landscape) {
  .calc {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .calc--buttons {
    flex-basis: 40%;
    order: 2
  }
  .calc--buttons__extra {
    flex-basis: 60%;
  }
  .calc--buttons,
  .calc--buttons__extra {
    height: 80%;
  }
  .calc--header .visor {
    padding: 0.3em 0.35em 0 0;
    font-size: 3rem;
  }
}
@media screen and (orientation: portrait) {
  .calc {
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: relative;
  }
}
/*
Media Query iPhone 11 Regular
Media Query iPhone 11 Pro Max
*/
@media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) { 
      .calc {
        height: 85vh;
      }
    }
/* Media Query iPhone 11 Pro */
@media only screen 
    and (device-width: 375px) 
    and (device-height: 812px) 
    and (-webkit-device-pixel-ratio: 3) { 
      .calc {
        height: 85vh;
      }
    }
</style>