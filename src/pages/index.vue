<template>
  <div>
    <h2>Index Page</h2>
    <div>count: {{ store.counter }}</div>
    <button @click="store.increment">증가버튼</button>
  </div>
</template>
<script lang="ts" setup>
import { useDevStore } from '@/store/dev';
const store = useDevStore();
</script>
