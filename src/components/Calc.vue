<script setup>
import Button from './Button.vue'
import Calc from '../calc.json'
import { ref, watch } from 'vue'
import { Responsive } from '../functions/responsive.js'
import { VisorClass } from '../functions/visor.js'
/********************************************************
 *
 * INITIALIZATION
 *
********************************************************/
const ResponsiveUtils = new Responsive();
const Visor = new VisorClass({
  chunkSize: 3,
  visorID: "#visor"
});
const teste = ref(Visor.showNumber)
/********************************************************
 *
 * RESPONSIVE PROPERTIES
 *
********************************************************/
const { isInstalled, orientation } = ResponsiveUtils
const landscape = ref(orientation)
/********************************************************
 *
 * FUNCTIONS
 *
********************************************************/
function getValue(e) {
  if(Number(e.action)) {
    Visor.newNumber = e.action;
    Visor.calcNumber()
  }
}
/********************************************************
 *
 * SCREEN FUNCTIONS
 *
********************************************************/
window.addEventListener('keydown', (e) => {
  // console.log(e.key)
  const key = Calc.standard.filter(item => {
    if(item.label === e.key) {
      return item
    }
  })[0]
  if(key) {
    getValue(key)
  }
})
window.addEventListener('resize', () => {
  landscape.value = orientation
})
</script>

<template>
  <section class="calc" :class="isInstalled">
    <section class="calc--header">
      <input id="visor" type="text" readonly class="visor" :style="Visor.fontSize" v-model="Visor.showNumber">
      <div id="fakevisor" class="visor" :style="visorFontSize" style="position:absolute; width: auto; opacity: 0"></div>
    </section>
    <section class="calc--buttons">
      <Button @click="getValue(item)" :label="item.label" :type="item.type" :action="item.action" v-for="(item, index) in Calc.standard" :key="index"></Button>
    </section>
    <section v-if="landscape" class="calc--buttons__extra">
      <Button @click="getValue(item)"  :label="item.label" :type="item.type" :action="item.action" v-for="(item, index) in Calc.advanced" :key="index"></Button>
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
  padding-right: 8.20% ;
  width: 100%;
}
.visor {
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
  .visor {
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
  .visor {
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
  .visor {
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
  .visor {
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
  .visor {
    font-size: 6rem;
  }
  .calc--buttons,
  .calc--buttons__extra {
    padding-bottom: var(--ios-margin);
  }
}
</style>