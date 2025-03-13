<script setup>
import FilmCardComponent from '@/components/FilmCardComponent.vue'
import PagesButton from '@/components/PagesButton.vue'
import PrevNextButton from '@/components/PrevNextButton.vue'
import { useFavoritesStore } from '@/stores/favorites'
import { computed } from 'vue'

const favList = useFavoritesStore()

const hasFavorites = computed(() => {
  return favList.favorites.length > 4
})
</script>

<template>
  <h1 class="page-title">Seus Filmes Favoritos</h1>

  <div class="cards">
    <FilmCardComponent
      v-for="favorite in favList.filteredFavorites"
      :key="favorite.id"
      :image="favorite.image"
      :title="favorite.title"
    />
  </div>

  <div class="paginator" v-if="hasFavorites">
    <PrevNextButton @click="favList.prevPage" button-text="Anterior" />
    <PagesButton />

    <PagesButton />
    <PrevNextButton @click="favList.nextPage" button-text="Próxima" />
  </div>
</template>

<style>
.page-title {
  text-align: center;
  margin: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.paginator {
  text-align: center;
  display: flex;
  margin-top: 50px;
  justify-content: center;
}
</style>
