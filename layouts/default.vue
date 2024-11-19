<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-header elevated class="bg-grey-1 text-grey-9">
      <q-toolbar>
        <q-toolbar-title> Image Collection </q-toolbar-title>
        <NuxtLink v-slot="{navigate}" custom to="/">
          <q-btn stretch flat label="Home" no-caps @click="navigate"/>
        </NuxtLink>
        <q-separator gray vertical />
        <NuxtLink v-slot="{navigate}" custom to="/about">
          <q-btn stretch flat label="About" no-caps  to="/about" @click="navigate"/>
        </NuxtLink>  
        <q-separator gray vertical />
        <q-btn stretch flat label="Naver" no-caps @click="moveNaver" />
        <q-separator gray vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn stretch flat label="Admin" no-caps @click="navigate()" />
        </NuxtLink>     
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
        <slot />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: "1080px",
  margin: "0 auto",
}));

const moveNaver = async () => {
  await navigateTo('https://naver.com', {
    external: true,
    open: { target: '_blank' },
  });
};
</script>
