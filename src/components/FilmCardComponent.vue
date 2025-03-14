<script setup>
defineProps(['image', 'title', 'isFavorite'])
</script>

<template>
  <div class="card">
    <div class="favorite-icon">
      <i :class="isFavorite ? 'fa-solid fa-star fa-lg' : 'fa-regular fa-star fa-lg'"></i>
    </div>
    <div class="card-content">
      <img :src="image" />
    </div>
    <div class="card-footer">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<style>
@import url(../assets/main.css);
.card {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    4px 4px 8px 0 rgba(0, 0, 0, 0.5),
    4px 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.5s ease;
  position: relative;
}

.favorite-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s ease;
  z-index: 2; /* Garante que fique acima da linha diagonal */
}

.fa-star {
  color: rgb(0, 0, 0);
  font-weight: bold;
}

.card:hover {
  transform: scale(1.06);
  cursor: pointer;
}

.card-content {
  margin: 0;
  padding: 0;
  display: block;
}

img {
  width: 100%;
  object-fit: cover;
  vertical-align: middle;
}

.card-footer {
  background-color: var(--main-color);
  padding: 10px;
  color: white;
  text-align: center;
}

span {
  font-size: 1.2rem;
  font-weight: bold;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 120px; /* Largura da faixa */
  height: 60px; /* Altura da faixa */
  background: rgba(255, 251, 0);
  transform: rotate(45deg) translate(20px, -35px);
  z-index: 1;
}
</style>
