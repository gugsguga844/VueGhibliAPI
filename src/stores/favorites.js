import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore(
  'favorites',
  () => {
    const favorites = ref([])
    let startValue = ref(0)
    let endValue = ref(4)

    function addOrRemoveFavorite(film) {
      const index = favorites.value.findIndex((f) => f.id === film.id)
      if (index === -1) {
        favorites.value = [...favorites.value, film]
      } else {
        favorites.value.splice(index, 1)
      }
    }

    function isFavorite(film) {
      return favorites.value.some((f) => f.id === film.id)
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

    return {
      favorites,
      filteredFavorites,
      addOrRemoveFavorite,
      isFavorite,
      prevPage,
      nextPage,
    }
  },
  { persist: true },
)
