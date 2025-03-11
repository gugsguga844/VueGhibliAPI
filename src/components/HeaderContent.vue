<script setup></script>

<template>
  <section class="header-content">
    <h1 class="header-title">Um mundo mágico para explorar</h1>
    <button class="explore-btn">Explorar Coleção</button>
  </section>
</template>

<style>
@import url(../assets/main.css);
.header-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.header-title {
  font-size: 3rem;
  font-weight: bold;
  color: black;
}

.explore-btn {
  background-color: var(--main-color);
  color: white;
  padding: 20px 40px;
  border: none;
  border-radius: 20px;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.1s;
}
.explore-btn:hover {
  background-color: #1580a5;
}
</style>
