<template>
  <nav class="header-menu-nav">
    <h1>The Studio Ghibli Collection</h1>
    <ul class="nav-ul">
      <li class="header-nav-item">
        <a href="">SHOP</a>
      </li>
      <li class="header-nav-item">
        <a href="">FILMOGRAPHY</a>
      </li>
      <li class="header-nav-item">
        <a href="">IN THEATERS</a>
      </li>
      <li class="header-nav-item">
        <a href="">ABOUT</a>
      </li>
    </ul>
    <ul class="nav-ul">
      <li class="header-nav-item"><a href="">LOG IN</a></li>
      <li class="header-nav-item"><a href="">SEARCH</a></li>
      <li class="header-nav-item"><a href="">LOG IN</a></li>
    </ul>
  </nav>
</template>

<style>
h1 {
  color: white;
}
.header-menu-nav {
  display: flex;
  justify-content: space-between;
  padding: 50px;
}

.nav-ul {
  display: flex;
  list-style: none;
}

.header-nav-item {
  margin: 0px 15px;
}

a {
  text-decoration: none;
  color: white;
}
</style>
