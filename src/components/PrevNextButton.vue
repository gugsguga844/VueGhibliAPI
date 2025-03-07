<script setup>
defineProps(['buttonText'])
</script>
<template>
  <button class="pagination-button">{{ buttonText }}</button>
</template>

<style>
@import '../assets/main.css';

.pagination-button {
  background-color: var(--main-color);
  border-radius: 10px;
  padding: 15px 100px;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin: 0px 5px;
}
</style>
