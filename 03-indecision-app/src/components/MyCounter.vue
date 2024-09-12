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

// Forma 1 de obtener props
const props = defineProps({
  // value: Number, Si se deja asi el valor puede ser Number o Undefined
  value: {
    type: Number,
    required: true, // de Esta forma se obliga a que el valor sea Number
  },
});

// Forma 2 de obtener props
// interface Props{
//   value: number;
// }
// const props = defineProps<Props>();

//Forma 3 de obtener props
// const props = defineProps<{
//   value: number;
// }>();

// variables reactivas
const count = ref(props.value);
const squareCounter = computed(() => count.value * count.value);
//functions
//logic
</script>
