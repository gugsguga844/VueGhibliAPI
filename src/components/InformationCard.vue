<script setup>
defineProps(['name', 'gender', 'age', 'eye_color'])
</script>

<template>
  <div class="info-card">
    <div class="info-card-header">
      <h3>{{ name }}</h3>
    </div>
    <div class="info-card-content">
      <p class="people-content">{{ gender }}</p>
      <p class="people-content">{{ age }}</p>
      <p class="people-content">{{ eye_color }}</p>
    </div>
  </div>
</template>

<style>
.info-card {
  width: 100%;
  border: solid 2px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    4px 4px 8px 0 rgba(0, 0, 0, 0.5),
    4px 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.info-card-header {
  margin: 0;
  padding: 0;
  display: block;
  border-bottom: solid 2px;
  text-align: center;
}

.info-card-content {
  background-color: var(--main-color);
  padding: 10px;
  color: white;
  text-align: center;
  overflow: hidden;
}

.people-content {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
