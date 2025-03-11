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
@import url(../assets/main.css);
.card {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    4px 4px 8px 0 rgba(0, 0, 0, 0.5),
    4px 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  background-color: var(--main-color);
  padding: 10px;
  color: white;
  text-align: center;
}

span {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
