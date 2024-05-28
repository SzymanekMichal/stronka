<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Galery from "../Modal/Galery.vue";
import Presentation from "../Modal/Presentation.vue";
import { ref } from "vue";

const isGaleryOpen = ref(false);
const isPresentationOpen = ref(false);

const openGalery = () => {
  isGaleryOpen.value = true;
};

const openPresentation = () => {
  isPresentationOpen.value = true;
};

</script>

<template>
  <Galery v-if="isGaleryOpen" @closeGalery="isGaleryOpen = false" />
  <Presentation v-if="isPresentationOpen" @closePresentation ="isPresentationOpen = false" />
  <Navbar />
  <header>
    <img src="../images/Logo.svg" alt="logo" class="logo-image" />
    <h1 class="title">SZYBKI LOMBARD</h1>
  </header>
  <div class="offer">
    <h1>Oferta</h1>
    <div class="cards">
      <div class="top-cards">
        <div id="phones" class="card" @click="$router.push('/phones')">
          <img src="../images/phone.svg" />
          <p>Telefony</p>
        </div>
        <div id="watches" class="card" @click="$router.push('/watches')">
          <img src="../images/watch.svg" @click="" />
          <p>Zegarki</p>
        </div>
        <div id="rtv" class="card" @click="$router.push('/rtv')">
          <img src="../images/rtv.svg" @click="" />
          <p>RTV & AGD</p>
        </div>
      </div>
      <div class="bottom-cards">
        <div id="antiques" class="card" @click="$router.push('/antiques')">
          <img src="../images/antique.svg" @click="" />
          <p>Antyki</p>
        </div>
        <div id="paintings" class="card" @click="$router.push('/paintings')">
          <img src="../images/painting.svg" @click="" />
          <p>Obrazy</p>
        </div>
      </div>
    </div>
  </div>
  <div class="description-container">
    <div class="description">
      <h2>Kupuj taniej na szybkilombard.pl</h2>
      <p>
        Sklep online, w którym możliwy jest zakup wszystkich produktów
        dostępnych również w sklepach stacjonarnych. <br />
        Przetestuj nasz sklep, skorzystaj z darmowej dostawy i podziel się
        opinią!
      </p>
    </div>
  </div>
  <div class="opening-hours">
    <img class="lombard-image" src="../images/galery1.jpg" alt="alt" />
    <img
      class="lombard-image animate"
      src="../images/galery2.jpg"
      alt="alt"
      @click="openGalery"
    />
    <div>
      <h1 class="opening-title">Godziny otwarcia:</h1>
      <ul>
        <li>Poniedziałek: 7:00 - 20:00</li>
        <li>Wtorek: 7:00 - 20:00</li>
        <li>Środa: 7:00 - 20:00</li>
        <li>Czwartek: 7:00 - 20:00</li>
        <li>Piątek: 7:00 - 20:00</li>
        <li>Sobota: 10:00 - 18:00</li>
        <li>Niedziela (Handlowa): 10:00 - 16:00</li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="presentation">
    <h1 class="pres-title">Poznaj historię Szybkiego lombardu!</h1>
    <img src="../images/pres2.jpg" alt="prezentacja" class="pres-image" />
    <img
      src="../images/pres1.jpg"
      alt="prezentacja"
      class="pres-image animate"
      @click="openPresentation"
    />
  </div>
  <Footer />
</template>

<style scoped>
header {
  margin-top: 110px;
  background-color: #e0e1dd;
  color: black;
  text-align: center;
  padding: 50px;
  background-image: url("../images/Background.jpg");
  background-size: cover;
}

.lombard-image {
  width: 600px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.3));
  position: absolute;
  transition: 0.3s;
}

.animate:hover {
  transform: rotate(5deg) translateY(-20px) translateX(20px);
  transition: 0.3s;
}

.opening-title {
  margin-left: 800px;
}

ul {
  list-style-type: none;
  padding: 5px;
  font-size: large;
  margin-left: 800px;
}

.title {
  font-size: 4rem;
  text-align: center;
  font-family: "Poetsen One", sans-serif;
  color: #778da9;
  text-shadow: 2px 2px 2px #1b263b;
  margin: 30px auto 70px auto;
}

.description-container {
  background-color: #e0e1dd;
  padding: 100px;
  display: flex;
  align-items: center;
}

.description {
  font-size: 1.5rem;
  max-width: 1000px;
  margin: auto;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #0d1b2a;
  text-align: center;
}

.description h2 {
  font-size: 4rem;
  margin-bottom: 20px;
}

.offer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 100px auto;
  max-width: 1200px;
  width: 100%;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  color: #0d1b2a;
}

.cards {
  margin-top: 50px;
  width: 100%;
}

.top-cards {
  display: flex;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
  width: 100%;
}

.bottom-cards {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  width: 300px;
  height: 300px;
  background-color: #e0e1dd;
  border-radius: 20px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  text-align: center;
  font-weight: bold;
  transition: 0.3s;
}

.card:hover {
  background-color: #bbc5ce;
  transition: 0.3s;
  transform: translateY(-10px);
  cursor: pointer;
}

.card img {
  width: 150px;
  height: 150px;
}

#phones,
#watches,
#rtv {
  width: 33%;
}

#antiques,
#paintings {
  width: 50%;
}

.opening-hours {
  font-family: "Roboto", sans-serif;
  margin: 200px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding-right: 100px;
  color: black;
}

.logo-image {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: block;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}

.presentation {
  margin: 100px;
  margin-bottom: 500px;
  text-align: center;
  color: #0d1b2a;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
}

.pres-title {
  margin-bottom: 50px;
}

.pres-image {
  transition: 0.3s;
  position: absolute;
  right: 35%;
  width: 600px;
  border-radius: 20px;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.3));
}

hr {
  margin: 100px;
  opacity: 0.6;
}
</style>
