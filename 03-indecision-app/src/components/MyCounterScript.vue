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

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const count = ref(props.value);
    const squareCounter = computed(() => count.value * count.value);

    return {
      count,
      squareCounter,
    };
  },
});
</script>
