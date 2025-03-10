import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])
  function addFavorite(film) {
    favorites.value.push(film)
    console.log(favorites)
  }

  return { favorites, addFavorite }
})
