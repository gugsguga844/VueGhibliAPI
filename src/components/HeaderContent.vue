<script setup></script>

<template>
  <section class="header-content">
    <div class="header-title-section">
      <h1 class="header-title">EXPLORE A MAGIA DO MUNDO GHIBLI</h1>
      <p class="header-description">
        Descubra cenários deslumbrantes, histórias emocionantes e personagens inesquecíveis no
        universo mágico do Studio Ghibli. Cada filme é uma porta para a imaginação, pronta para ser
        explorada.
      </p>
    </div>
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
  font-family: 'Ghibli';
  color: #004b66;
}

.header-description {
  font-size: 1.5rem;
  max-width: 600px;
  color: #313131;
  line-height: 1.6;
  font-family: 'Ghibli';
}

.explore-btn {
  background-color: var(--main-color);
  color: white;
  padding: 20px 40px;
  border: none;
  border-radius: 20px;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.2s ease;
}
.explore-btn:hover {
  background-color: #005dbb;
  transform: scale(1.06);
}
</style>
