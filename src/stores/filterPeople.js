import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllPeople } from '@/services/HttpService'

export const useFilterPeopleStore = defineStore('filterPeople', () => {
  const people = ref({})
  const filteredPeopleList = ref({})
  let startValue = ref(0)
  let endValue = ref(12)

  function prevPage() {
    if (startValue.value > 0 || endValue.value > 4) {
      startValue.value -= 4
      endValue.value -= 4
      filteredPeople()
    }
  }

  function nextPage() {
    if (startValue.value < people.value.length - 4 || endValue.value < people.value.length) {
      startValue.value += 4
      endValue.value += 4
      filteredPeople()
    }
  }

  function filteredPeople() {
    filteredPeopleList.value = people.value.slice(startValue.value, endValue.value)
  }

  async function getPeople() {
    const resultado = await getAllPeople()
    people.value = resultado.data
    filteredPeople()
    console.log(filteredPeople)
  }
  return { people, filteredPeopleList, prevPage, nextPage, filteredPeople, getPeople }
})
