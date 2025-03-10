<script setup>
import InformationCard from '@/components/InformationCard.vue'
import PagesButton from '@/components/PagesButton.vue'
import PrevNextButton from '@/components/PrevNextButton.vue'
import { useFilterPeopleStore } from '@/stores/filterPeople'
import { onMounted } from 'vue'

const seeArray = useFilterPeopleStore()

onMounted(() => {
  seeArray.getPeople()
  seeArray.filteredPeopleList
})
</script>
<template>
  <div class="cards">
    <InformationCard
      v-for="people in seeArray.filteredPeopleList"
      :key="people.id"
      :name="people.name"
      :gender="people.gender"
      :age="people.age"
      :eye_color="people.eye_color"
    />
  </div>
  <div class="paginator">
    <PrevNextButton @click="seeArray.prevPage" button-text="Anterior" />
    <PagesButton />
    <PrevNextButton @click="seeArray.nextPage" button-text="Próxima" />
  </div>
</template>
<style></style>
