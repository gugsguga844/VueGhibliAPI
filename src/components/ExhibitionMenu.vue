<script setup>
import { ref } from 'vue'

const isActive = ref(true)
</script>

<template>
  <nav class="main-nav">
    <ul class="main-nav-ul">
      <RouterLink class="router-options" to="/">
        <li class="main-nav-ul-li" :class="{ selected: isActive }">Filmes</li>
      </RouterLink>
      <RouterLink class="router-options" to="/people">
        <li class="main-nav-ul-li">Pessoas</li>
      </RouterLink>
      <li class="main-nav-ul-li">Locations</li>
      <li class="main-nav-ul-li">Species</li>
      <li class="main-nav-ul-li">Vehicles</li>
    </ul>
  </nav>
</template>

<style>
.main-nav {
  padding: 30px 0px;
}

.main-nav-ul {
  display: flex;
  list-style: none;
  padding: 0;
  width: 100%;
  justify-content: space-evenly;
}

.main-nav-ul-li {
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  padding: 5px;
}

.router-options.router-link-active {
  color: black;
  width: 100%;
  border-bottom: solid 2px;
}

.router-options {
  color: black;
  width: 100%;
}

.router-options:hover {
  background-color: rgb(199, 223, 255);
  width: 100%;
}
</style>
