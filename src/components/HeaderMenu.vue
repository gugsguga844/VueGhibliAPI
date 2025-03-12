<template>
  <nav class="header-menu-nav">
    <h1>The Ghibli Collection</h1>
    <ul class="nav-ul">
      <RouterLink class="header-router" to="/">
        <li class="header-nav-item">
          <i class="fa-solid fa-film"></i>
          <span class="header-menu-span">FILMES</span>
        </li>
      </RouterLink>
      <RouterLink class="header-router" to="/people">
        <li class="header-nav-item">
          <i class="fa-solid fa-person"></i>
          <span class="header-menu-span">PERSONAGENS</span>
        </li>
      </RouterLink>
      <RouterLink class="header-router" to="/locations">
        <li class="header-nav-item">
          <i class="fa-solid fa-location-dot"></i>
          <span class="header-menu-span">LOCALIDADES</span>
        </li>
      </RouterLink>
      <li class="header-nav-item">
        <i class="fa-solid fa-car"></i>
        <span class="header-menu-span">VEÍCULOS</span>
      </li>
    </ul>
    <ul class="nav-ul">
      <RouterLink class="favorites-route" to="/favorites">
        <li id="favorites-button" class="header-nav-item">
          <span class="favorites-span">FAVORITADOS</span>
        </li>
      </RouterLink>
      <li class="header-nav-item">
        <a href=""><i class="fa-regular fa-user fa-xl" style="color: black"></i></a>
      </li>
    </ul>
  </nav>
</template>

<style>
.header-menu-nav h1 {
  color: black;
}
.header-menu-nav {
  width: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  box-sizing: border-box;
  align-items: center;
}

.nav-ul {
  display: flex;
  list-style: none;
  align-items: center;
  padding: 0;
}

.header-nav-item {
  margin: 0px 15px;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 5px;
}

.header-menu-span {
  margin-left: 5px;
}

.header-router.router-link-active {
  color: black;
  width: 100%;
  border-bottom: solid 3px;
}

.header-router {
  color: black;
  width: 100%;
  text-decoration: none;
  padding: 2px;
}

.favorites-route {
  color: black;
  text-decoration: none;
}

.header-router:hover {
  background-color: var(--main-color);
  width: 100%;
  color: white;
  border-radius: 5px;
}

#favorites-button {
  background-color: rgb(241, 225, 0);
  border-radius: 10px;
  padding: 10px 20px;
  border: solid 1px black;
  color: black;
}

#favorites-button:hover {
  background-color: rgb(226, 211, 0);
}
</style>
