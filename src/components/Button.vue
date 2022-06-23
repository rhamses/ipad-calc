<script setup>
  import { ref } from 'vue'
  const emit = defineEmits(['getValue'])
  const props = defineProps({
    label: String,
    type: String,
    action: [Number, String]
  })
  const bgColor = ref(`var(--${props.type})`);
  let isActive = ref({'active': false});
  function keyUpHandler(){
    isActive.value.active = false;
  }
  function keyDownHandler(){
    isActive.value.active = true;
  }
  function clickHandler(e){
    emit('getValue', e.target.dataset.value)
  }
</script>
<template>
  <button
    class="calc--button"
    @keyup="keyUpHandler"
    @keydown="keyDownHandler"
    @click="clickHandler"
    :class="isActive"
    :data-value="action"
    :data-type="type">
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
.calc--button:hover {
  background-color: var(--keypad-hover);
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
.calc--button[data-type="formula"]{
  background-color: var(--formula);
}
.calc--button[data-type="keypad"] {
  background-color: var(--keypad);
}
.calc--button[data-type="operation"] {
  background-color: var(--operation);
}
.calc--button[data-type="options"] {
  background-color: var(--options);
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
    margin: 1.10%; /* .39em */
    min-height: 14.28%; /* 12vh */
    min-width: 20.58%; /* 15vh */
    border-radius: 50px;
  }
  .calc--button[data-type="formula"] {
    margin: 0.625%; /* .39em */
    min-height: 12.15%; /* 12vh */
    min-width: 14.17%; /* 15vh */
  }
  .calc--button[data-value="0"] {
    min-width: 45.16%; /* 30vh */
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