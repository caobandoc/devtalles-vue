<template>
  <section>
    <h3>Counter: {{ count }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="count++">+1</button>
      <button @click="count--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

// variables
const count = ref(2);
const squareCounter = computed(() => count.value * count.value);
//functions
//logic
</script>
