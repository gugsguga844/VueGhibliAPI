<script setup>
defineProps(['image', 'title'])
</script>

<template>
  <div class="card">
    <div class="card-content">
      <img :src="image" />
    </div>
    <div class="card-footer">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<style>
.card {
  width: 100%;
}

.card-content {
  margin: 0;
  padding: 0;
  display: block;
}

img {
  width: 100%;
  object-fit: cover;
  vertical-align: middle;
}

.card-footer {
  background-color: #1ba0d0;
  padding: 10px;
  color: white;
  text-align: center;
}

span {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
