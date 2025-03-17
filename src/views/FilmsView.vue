<script setup>
import FilmCardComponent from '@/components/FilmCardComponent.vue'
import PrevNextButton from '@/components/PrevNextButton.vue'
import { useFavoritesStore } from '@/stores/favorites'
import { useFilterFilmsStore } from '@/stores/filterFilms'
import { onMounted } from 'vue'

const seeArray = useFilterFilmsStore()
const favStore = useFavoritesStore()

function clicked(film) {
  favStore.addOrRemoveFavorite(film)
}

onMounted(() => {
  seeArray.getFilms()
})
</script>

<template>
  <h1 class="films-title">Filmes</h1>

  <div class="cards">
    <FilmCardComponent
      v-for="film in seeArray.filteredFilmsList"
      :key="film.id"
      :image="film.image"
      :title="film.title"
      :isFavorite="favStore.isFavorite(film)"
      @click="clicked(film)"
    />
  </div>
  <div class="paginator">
    <PrevNextButton @click="seeArray.prevPage" button-text="Anterior" />
    <PrevNextButton @click="seeArray.nextPage" button-text="Próxima" />
  </div>
</template>

<style>
.films-title {
  text-align: center;
  margin: 20px;
  background-color: blue;
  color: white;
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
