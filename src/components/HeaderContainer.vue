<template>
  <header class="q-mt-md row items-center justify-center q-pb-md">
    <a href="https://ufg.br">
      <q-img
        src="~assets/ufg-logo.svg"
        class="non-selectable responsive q-my-md"
        style="width: 180px"
    /></a>
    <div class="q-mt-md border" />
    <nav class="full-width non-selectable">
      <h3 class="header-label q-pl-lg">Navegação</h3>

      <ul class="full-width menu-navegacao q-mt-none nowrap">
        <li>
          <router-link to="/" class="q-mt-none">
            <q-icon name="school" class="q-mr-sm" color="white" />Página
            inicial</router-link
          >
        </li>
        <li>
          <router-link to="/report">
            <q-icon name="warning" class="q-mr-sm" color="white" />Relatar um
            problema</router-link
          >
        </li>
        <li>
          <router-link to="/rating">
            <q-icon
              name="star"
              class="q-mr-sm"
              color="white"
            />Avalie-nos</router-link
          >
        </li>
      </ul>

      <h3 class="header-label q-pl-lg">Acessibilidade</h3>

      <ul class="full-width menu-navegacao q-mt-none nowrap">
        <li>
          <a href="…">
            <q-icon name="school" class="q-mr-sm" color="white" />Opção 1</a
          >
        </li>
        <li class="">
          <a href="…">
            <q-icon name="school" class="q-mr-sm" color="white" />Opção 2</a
          >
        </li>
        <li>
          <a href="…">
            <q-icon name="school" class="q-mr-sm" color="white" />Opção 3</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
.header-label {
  font-size: 0.8em;
  font-weight: 800;
  text-transform: uppercase;
  color: white;

  font-family: "Open Sans";
}
h3 {
  margin: 0;
}
nav {
  max-width: 20vmax;
}
nav ul {
  list-style-type: none;
}

nav ul li a:hover,
nav ul li a:hover .q-icon {
  color: #82c9f5;
}
nav ul li a .q-icon {
  font-size: 1.5em;
}
nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.8rem;
}

li:not(:last-child) {
  margin-bottom: 12px;
}
</style>
