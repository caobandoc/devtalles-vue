<template>
  <h1>Mi primera app</h1>
  <hr>

  <MyCounter :value="5" text="hola mundo"/>
  <MyCounterScript :value="5" text="hola mundo"/>
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
</script>
