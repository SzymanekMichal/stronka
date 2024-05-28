<template>
  <nav>
    <div class="top-nav">
      <h1 @click="$router.push('/')">SZYBKI LOMBARD</h1>
    </div>
    <div class="bottom-nav">
      <a href="/phones"><p>Telefony</p></a>
      <a href="/watches"><p>Zegarki</p></a>
      <a href="/rtv"><p>RTV & AGD</p></a>
      <a href="/antiques"><p>Antyki</p></a>
      <a href="/paintings"><p>Obrazy</p></a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #778da9;
  height: 110px;
  padding: 0;
  color: #1b263b;
  z-index: 100;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

.top-nav {
  text-align: center;
  padding: 2px 200px;
  height: 60px;
  font-family: "Poetsen One", sans-serif;
  font-size: 1.5rem;
  color: #e0e1dd;
  text-shadow: 2px 2px 2px #1b263b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.top-nav h1 {
  cursor: pointer;
}

.logos {
  display: flex;
  align-items: center;
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px 200px;
  height: 50px;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

a {
  text-decoration: none;
  color: #e0e1dd;
  text-shadow: 2px 2px 4px #1b263b;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  text-align: center;
  transition: 0.3s;
}

a:hover {
  background-color: #667992;
  transition: 0.3s;
}
</style>
