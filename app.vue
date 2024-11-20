<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
console.log('nuxtApp', nuxtApp)

nuxtApp.provide('hello', (msg:string) => `Hello ${msg}`)
</script>