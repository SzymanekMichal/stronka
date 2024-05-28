<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";

const activeFilter = ref("");

const RtvData = [
{
    image: "stolik-francja.jpg",
    title: "Stolik, ok. 1890 rok",
    ourPrice: 5000,
    marketPrice: 5500,
    date: "15.03.2023",
    condition: "XIX",
    location: "Francja",
    used: false,
},
{
    image: "fotel-gabinetowy.jpg",
    title: "Fotel gabinetowy, ok. 1940 rok",
    ourPrice: 5000,
    marketPrice: 5500,
    date: "23.07.2023",
    condition: "XX",
    location: "Europa Zachodnia",
    used: true,
},
{
    image: "fotel-vintage.jpg",
    title: "Fotel vintage, lata 60",
    ourPrice: 2000,
    marketPrice: 2500,
    date: "21.01.2023",
    condition: "XX",
    location: "Polska",
    used: true,
},
{
    image: "barokowa-skrzynia.jpg",
    title: "Barokowa skrzynia z 1781 roku",
    ourPrice: 7000,
    marketPrice: 7500,
    date: "21.03.2024",
    condition: "XVIII",
    location: "Nieznana",
    used: false,
},
{
    image: "stolik-europa-polnocna.jpg",
    title: "Stolik, rok około 1920",
    ourPrice: 1000,
    marketPrice: 1500,
    date: "12.09.2023",
    condition: "XX",
    location: "Europa Północna",
    used: true,
},
];

</script>

<template>
  <Navbar />
  <h1 class="page-title">Antyki</h1>
  <div class="content">
    <div class="filters">
      <h2>Filtry</h2>
      <div
        class="filter new"
        @click="activeFilter = 'new'"
        :class="activeFilter === 'new' ? 'active' : ''"
      >
        Nowe
      </div>
      <div
        class="filter used"
        @click="activeFilter = 'used'"
        :class="activeFilter === 'used' ? 'active' : ''"
      >
        Używane
      </div>
      <button class="clear-btn" @click="activeFilter = ''">
        Wyczyść filtry
      </button>
    </div>
    <div class="product-list">
      <div
        class="container"
        v-for="rtv in RtvData.filter((rtv) =>
          activeFilter === 'used'
            ? rtv.used
            : activeFilter === 'new'
            ? !rtv.used
            : true
        )"
      >
        <img :src="'/src/images/' + rtv.image" class="product-image" />
        <div class="description">
          <h1 class="product-title">{{ rtv.title }}</h1>
          <div class="price">
            <div class="our-price">
              <h1>{{ rtv.ourPrice }} zł &nbsp;</h1>
              <p>{{ rtv.marketPrice }} zł</p>
            </div>
            <div class="buy">
              <button class="buy-btn">
                <img src="../images/cart.svg" alt="" />Kup Teraz
              </button>
            </div>
            <div class="date element">Data dodania: {{ rtv.date }}</div>
            <div class="condition element">Wiek: {{ rtv.condition }}</div>
            <div class="box element">
              Lokacja: {{ rtv.location }}
            </div>
            <div class="used element">
              Używany: {{ rtv.used ? "Tak" : "Nie" }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.filters {
  width: 20%;
  height: 100%;
  border-radius: 5px;
  background-color: #e0e1dd;
  color: #1b263b;
  padding: 20px;
  text-align: center;
}

.page-title {
  margin: 130px 0 0 70px;
  font-size: 3rem;
  color: #1b263b;
  font-family: "Roboto", sans-serif;
}

.content {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 30px 0 0 70px;
  color: #1b263b;
  font-family: "Roboto", sans-serif;
}

.product-list {
  width: 70%;
}

.container {
  display: flex;
  gap: 20px;
  border-radius: 5px;
  background-color: #e0e1dd;
  padding: 20px;
  color: #1b263b;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  transition: 0.3s;
}

.container:hover {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #e0e1ddc2;
  transform: scale(1.01);
  transition: 0.3s;
}

.product-image {
  width: 330px;
  object-fit: cover;
  border-radius: 5px;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.3));
}

.description {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
}

.product-title {
  margin-top: 20px;
  font-size: 2.5rem;
}

.price {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  height: 50%;
  gap: 5px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.element {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #778da9;
  text-shadow: 2px 2px 4px #1b263b;
  color: #e0e1dd;
  border-radius: 10px;
  font-size: large;
}

.buy-btn {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: #fca311;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: x-large;
  font-weight: bold;
  transition: 0.2s;
}

.buy-btn:hover {
  background-color: #ffb339;
  transition: 0.2s;
}

.buy img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.our-price {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fca311;
  color: #1b263b;
  border-radius: 10px;
  font-size: large;
  font-weight: bolder;
}

.our-price p {
  font-size: medium;
  text-decoration: line-through;
}

.filter {
  text-align: center;
  width: 100%;
  background-color: #c2c2c2;
  cursor: pointer;
  height: 40px;
  width: 200px;
  line-height: 40px;
  border-radius: 5px;
  margin: 5px auto;
  transition: 0.3s;
}

.active {
  background-color: #778da9;
  color: #e0e1dd;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
}

.clear-btn {
  width: 150px;
  background-color: #fca311;
  color: #1b263b;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.clear-btn:hover {
  background-color: #ffb339;
  transition: 0.2s;
}
</style>
