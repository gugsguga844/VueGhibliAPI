<script setup>
import HeaderMenu from './components/HeaderMenu.vue'
import FilmsView from './views/FilmsView.vue'
</script>

<template>
  <header>
    <HeaderMenu />
  </header>
  <main><FilmsView /></main>
  <footer></footer>
</template>

<style scoped>
header {
  background-image: url(../src/assets/Studio-Ghibli-Logo.webp);
  background-size: cover;
  height: 100vh;
}

main {
  padding: 100px;
}
</style>
