<script setup>
import ExhibitionMenu from './components/ExhibitionMenu.vue'
import HeaderMenu from './components/HeaderMenu.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <header>
    <HeaderMenu />
  </header>
  <main><ExhibitionMenu /> <RouterView /> <MainFooter /></main>
  <footer></footer>
</template>

<style scoped>
header {
  background-image: url(../src/assets/Studio-Ghibli-Logo.webp);
  background-size: cover;
  height: 100vh;
}

main {
  padding: 0px 100px;
  height: 100vh;
}
</style>
