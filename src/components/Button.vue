<script setup>
  import { ref, reactive } from 'vue'

  const props = defineProps({
    label: String,
    type: String,
    action: [Number, String]
  })
  console.log(props.action)
  const bgColor = ref(`var(--${props.type})`);
</script>
<template>
  <button class="calc--button" :style="{backgroundColor: bgColor}" :data-value="action">
    <span>{{label}}</span>
  </button>
</template>

<style scoped>
.calc--button {
  /* min-height: 7em;
  min-width: 7em; */
  min-height: 22vw;
  min-width: 22vw;
  margin: 0 0 0.438em 0;
  padding: 0;

  background-color: var(--keypad);
  border-radius: 50%;
  border: none;
}
.calc--button span {
  color: #fff;
  font-size: 2em;
  font-weight: bold;
}

.calc--button[data-value="0"] {
  min-width: 46vw;
  border-radius: 50px;
}
</style>