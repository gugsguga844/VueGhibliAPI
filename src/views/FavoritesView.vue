<script setup>
import FilmCardComponent from '@/components/FilmCardComponent.vue'
import NoFavoritesMessage from '@/components/NoFavoritesMessage.vue'
import PagesButton from '@/components/PagesButton.vue'
import PrevNextButton from '@/components/PrevNextButton.vue'
import { useFavoritesStore } from '@/stores/favorites'
import { computed } from 'vue'

const favList = useFavoritesStore()

const hasFavorites = computed(() => {
  return favList.favorites.length > 0
})
</script>

<template>
  <div class="if-wrapper" v-if="hasFavorites">
    <h1 class="page-title">Seus Filmes Favoritos</h1>

    <div class="cards">
      <FilmCardComponent
        v-for="favorite in favList.filteredFavorites"
        :key="favorite.id"
        :image="favorite.image"
        :title="favorite.title"
        :isFavorite="favList.isFavorite(favorite)"
        @click="favList.addOrRemoveFavorite(favorite)"
      />
    </div>

    <div class="paginator" v-if="hasFavorites">
      <PrevNextButton @click="favList.prevPage" button-text="Anterior" />
      <PagesButton />

      <PagesButton />
      <PrevNextButton @click="favList.nextPage" button-text="Próxima" />
    </div>
  </div>
  <div class="if-wrapper" v-else>
    <NoFavoritesMessage />
  </div>
</template>

<style>
.page-title {
  text-align: center;
  margin: 20px;
  background-color: yellow;
  color: black;
  border-radius: 20px;
  padding: 10px;
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
