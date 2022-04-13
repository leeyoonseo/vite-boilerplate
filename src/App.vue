<template>
  <component :is="asyncLayoutComponent">
    <router-view />
  </component>
</template>
<script setup lang="ts">
const router = useRouter();

const asyncLayoutComponent = defineAsyncComponent(() => {
  const defaultLayout = 'default';
  const { layout } = router.currentRoute._value.meta;
  console.log('layout', router.currentRoute.value);

  return import(`./layouts/${layout || defaultLayout}.vue`);
});
</script>
<style>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
}
</style>
