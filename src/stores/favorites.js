import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])
  let startValue = ref(0)
  let endValue = ref(4)

  function addFavorite(film) {
    if (!favorites.value.includes(film)) {
      favorites.value = [...favorites.value, film]
      console.log(favorites.value)
    }
  }

  function removeFavorite(film) {
    if (favorites.value.includes(film)) {
      favorites.value = [...favorites.value.splice(film, 1)]
      console.log(favorites.value)
    }
  }

  function prevPage() {
    if (startValue.value > 0) {
      startValue.value -= 4
      endValue.value -= 4
    }
  }

  function nextPage() {
    if (startValue.value < favorites.value.length - 4) {
      startValue.value += 4
      endValue.value += 4
    }
  }

  const filteredFavorites = computed(() => {
    return favorites.value.slice(startValue.value, endValue.value)
  })

  return { favorites, filteredFavorites, addFavorite, removeFavorite, prevPage, nextPage }
})
