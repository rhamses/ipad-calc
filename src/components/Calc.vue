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
// check to see if PWA is installed on iOS devices. If so, add css class to container
const isInstalled = ref({'pwa-installed': window.navigator.standalone})
// calc variables
let calcResult = ref(0)
function getValue(e) {
  if(Number(e.action)) {
    // Adding the new value
    calcResult.value += String(e.action);
    // Get only the numbers then Transform into a string to break each one
    const numbers = calcResult.value.match(/\d/gmi).reverse();
    const chunk = 3
    const parts = Math.ceil(numbers.length/chunk)
    const newNumber = []
    if(numbers.length > 3) {
      for (let index = 0; index < parts; index++) {
        const sliceBegin = index * chunk;
        const sliceEnd = (index * chunk) + chunk;
        if(index + 1 < parts) {
          newNumber.push(...numbers.slice(sliceBegin, sliceEnd))
          newNumber.push('.')
        } else {
          newNumber.push(...numbers.slice(sliceBegin, numbers.length))
        }
      }
      calcResult.value = newNumber.reverse().join("")
    }
    // Adding the value to the visor
    if(Number(calcResult.value)) {
      calcResult.value = Number(calcResult.value)
    } else {
      calcResult.value = calcResult.value
    }
  }
}
</script>

<template>
  <section class="calc" :class="isInstalled">
    <section class="calc--header">
      <input type="text" readonly class="visor" v-model="calcResult">
    </section>
    <section class="calc--buttons">
      <Button @getValue="getValue" :label="item.label" :type="item.type" :action="item.action" v-for="(item, index) in Calc.standard" :key="index"></Button>
    </section>
    <section v-if="landscape" class="calc--buttons__extra">
      <Button @getValue="getValue" :label="item.label" :type="item.type" :action="item.action" v-for="(item, index) in Calc.advanced" :key="index"></Button>
    </section>
  </section>
</template>

<style scoped>
.calc {
  height: 100%;
  width: 100vw;

  font-size: 16px;
}
.calc--header {
  padding-right: var(--ios-margin);
  width: 100%;
}
.calc--header .visor {
  margin: 0;
  padding: 0;
  width: 100%;

  background-color: transparent;
  border: none;
  color: #fff;
  line-height: 1;
  text-align: right;
}
.calc--buttons,
.calc--buttons__extra {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
@media screen and (orientation: landscape) {
  .calc {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-end;
  }
  .calc--header .visor {
    font-size: 400%;
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
    height: 75%;
    padding-bottom: var(--ios-margin);
  }
}
@media screen and (orientation: portrait) {
  .calc {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
  }
  .calc--header .visor {
    font-size: 600%;
  }
}
/* Media Query iPhone 11 Pro */
@media only screen
    and (device-width: 375px)
    and (device-height: 812px)
    and (orientation: portrait)
    and (-webkit-device-pixel-ratio: 3) {
      .calc.pwa-installed {
        padding-bottom: var(--ios-margin);
      }
    }
/*
Media Query iPhone 11 Regular
Media Query iPhone 11 Pro Max
Portrait / Landscape
*/
@media only screen
    and (device-width: 414px)
    and (device-height: 896px)
    and (orientation: portrait) {
      .calc.pwa-installed {
        padding-bottom: var(--ios-margin);
      }
    }
/* ----------- iPad 1, 2, Mini and Air Landscape ----------- */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape) {
  .calc.pwa-installed {
    padding-bottom: var(--ios-margin);
  }
  .calc--header .visor {
    font-size: 6rem;
  }
}
/* ----------- iPad 1, 2, Mini and Air Portrait ----------- */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait) {
    .calc {
      margin-left: auto;
      margin-right: auto;
      max-width: 70vw;
    }
}

/* ----------- iPad 3, 4 and Pro 9.7" Landscape ----------- */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {
  .calc.pwa-installed {
    padding-bottom: var(--ios-margin);
  }
  .calc--header .visor {
    font-size: 6rem;
  }
  .calc--buttons,
  .calc--buttons__extra {
    padding-bottom: var(--ios-margin);
  }
}
/* ----------- iPad Pro 10.5" ----------- */
@media only screen 
  and (min-device-width: 1112px)
  /* and (max-device-width: 1112px) */
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2) {
  .calc.pwa-installed {
    padding-bottom: var(--ios-margin);
  }
  .calc--header .visor {
    font-size: 6rem;
  }
  .calc--buttons,
  .calc--buttons__extra {
    padding-bottom: var(--ios-margin);
  }
}
</style>