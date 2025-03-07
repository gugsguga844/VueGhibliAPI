<script setup>
import FilmCardComponent from '@/components/FilmCardComponent.vue'
import PagesButton from '@/components/PagesButton.vue'
import PrevNextButton from '@/components/PrevNextButton.vue'
import { useFilterFilmsStore } from '@/stores/filterFilms'
import { onMounted } from 'vue'

const seeArray = useFilterFilmsStore()

onMounted(() => {
  seeArray.getFilms()
  seeArray.filteredFilmsList
})
</script>

<template>
  <div class="cards">
    <FilmCardComponent
      v-for="film in seeArray.filteredFilmsList"
      :key="film.id"
      :image="film.image"
      :title="film.title"
    />
  </div>
  <div class="paginator">
    <PrevNextButton @click="seeArray.prevPage" button-text="Anterior" />
    <PagesButton />
    <PrevNextButton @click="seeArray.nextPage" button-text="Próxima" />
  </div>
</template>

<style>
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
