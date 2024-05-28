<template>
  <footer>
    <div class="container">
      <a href="/form">Formulaż</a>
      <a href="/stats">Statystyki</a>
      <p>Strona stworzona przez <b>Michała Szymanka</b> &copy;{{ currentYear }}</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  width: 100%;
  background-color: #E0E1DD;
  padding: 20px;
  text-align: center;
  color: black;
  position: fixed;
  bottom: 0;
}

a {
  background-color: white;
  color: black;
  margin: 20px;
  padding: 5px;
  border-radius: 5px;
  transition: 0.2s;
}

a:hover {
  background-color: #778da9;
  color: white;
  transition: 0.2s;
}

p {
  margin-top: 10px;
}
</style>
