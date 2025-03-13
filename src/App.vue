<script setup>
import HeaderContent from './components/HeaderContent.vue'
import HeaderMenu from './components/HeaderMenu.vue'
</script>

<template>
  <header>
    <HeaderMenu />
    <HeaderContent />
  </header>
  <main><RouterView /></main>
  <footer></footer>
</template>

<style scoped>
header {
  background-image: url(../src/assets/1198914-2560x1440-desktop-hd-studio-ghibli-wallpaper-photo.jpg);
  background-size: cover;
  height: 100vh;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.3);
  background-blend-mode: lighten;
}

main {
  background-color: #dfeeff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 100px;
  height: 100vh;
}
</style>
