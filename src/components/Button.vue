<script setup>
  import { ref, reactive } from 'vue'

  const props = defineProps({
    label: String,
    type: String,
    action: [Number, String]
  })
   
  const bgColor = ref(`var(--${props.type})`);
</script>
<template>
  <button class="calc--button" :style="{backgroundColor: bgColor}" :data-value="action">
    <span>{{label}}</span>
  </button>
</template>

<style scoped>
.calc--button {
  margin: 0 0 0.938em 0;
  padding: 0;

  background-color: var(--keypad);
  border: none;
}
.calc--button span {
  color: #fff;
  font-family: 'SF Pro';
  font-size: 2em;
  font-weight: bold;
}
.calc--button[data-value="0"] {
  min-width: 46vw;
  border-radius: 50px;
}
@media screen and (orientation: portrait) {
  .calc--button {
    min-height: 22vw;
    min-width: 22vw;
    border-radius: 50%;
  }
}
@media screen and (orientation: landscape) {
  .calc--button {
    margin: .39em;
    min-height: 12vh;
    min-width: 15vh;
    border-radius: 50px;
  }
  .calc--button[data-value="0"] {
    min-width: 30vh;
  }
  .calc--button span {
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 1281px) {
  .calc--button {
    min-height: 85px;
    min-width: 85px;
  }
  .calc--button[data-value="0"] {
    min-width: 170px;
  }
}
</style>