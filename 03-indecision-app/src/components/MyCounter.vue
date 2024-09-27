<template>
  <section>
    <h3>Counter: {{ count }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <h4>{{ text }}</h4>

    <div>
      <button class="btn" @click="count++">+1</button>
      <button class="btn" @click="count--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  value: number;
  text: string;
}
const props = defineProps<Props>();

// variables reactivas
const count = ref(props.value);
const squareCounter = computed(() => count.value * count.value);
</script>

<style scoped>

.btn{
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}

</style>
