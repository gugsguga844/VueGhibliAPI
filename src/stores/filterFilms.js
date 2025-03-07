import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllFilms } from '@/services/HttpService'

export const useFilterFilmsStore = defineStore('filterFilms', () => {
  const films = ref({})
  const filteredFilmsList = ref({})
  let startValue = ref(0)
  let endValue = ref(4)

  function prevPage() {
    if (startValue.value >= 0 || endValue.value >= 4) {
      startValue.value -= 4
      endValue.value -= 4
      filteredFilms()
    }
  }

  function nextPage() {
    startValue.value += 4
    endValue.value += 4
    filteredFilms()
  }

  function filteredFilms() {
    filteredFilmsList.value = films.value.slice(startValue.value, endValue.value)
  }

  async function getFilms() {
    const resultado = await getAllFilms()
    films.value = resultado.data
    filteredFilms()
    console.log(filteredFilms)
  }
  return { films, filteredFilmsList, prevPage, nextPage, filteredFilms, getFilms }
})
