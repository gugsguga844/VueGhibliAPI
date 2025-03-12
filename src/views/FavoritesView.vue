<script setup>
import FilmCardComponent from '@/components/FilmCardComponent.vue'
import { useFavoritesStore } from '@/stores/favorites'
import { onMounted } from 'vue'

const favList = useFavoritesStore()

onMounted(() => {
  favList.favorites
})
</script>

<template>
  <div class="cards">
    <FilmCardComponent
      v-for="favorite in favList.favorites"
      :key="favorite.id"
      :image="favorite.image"
      :title="favorite.title"
    />
  </div>
</template>

<style></style>
