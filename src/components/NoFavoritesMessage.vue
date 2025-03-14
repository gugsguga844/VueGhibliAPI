<script setup></script>

<template>
  <div class="no-favorite-container">
    <i class="fa-solid fa-face-frown no-favorite-icon" style="color: #ff0000"></i>
    <h1>VOCÊ NÃO TEM FILMES FAVORITOS!</h1>
  </div>
</template>

<style>
.no-favorite-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.no-favorite-icon {
  font-size: 200px;
  margin-bottom: 30px;
}
</style>
