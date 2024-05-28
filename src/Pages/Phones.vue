<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";

const activeFilter = ref("");

const PhonesData = [
  {
    image: "redmi-note-12.png",
    title: "Redmi Note 12",
    ourPrice: 699,
    marketPrice: 999,
    date: "23.03.2024",
    condition: "Idealny",
    box: true,
    used: false,
  },
  {
    image: "poco-x5-5g.png",
    title: "Poco X5 5G",
    ourPrice: 599,
    marketPrice: 899,
    date: "11.12.2023",
    condition: "Dobry",
    box: true,
    used: true,
  },
  {
    image: "poco-c65.png",
    title: "Poco C65",
    ourPrice: 199,
    marketPrice: 699,
    date: "17.01.2024",
    condition: "Średni",
    box: false,
    used: true,
  },
  {
    image: "samsung-galaxy-a55.png",
    title: "Samsung Galaxy A55",
    ourPrice: 1499,
    marketPrice: 1799,
    date: "20.02.2024",
    condition: "Idealny",
    box: true,
    used: false,
  },
  {
    image: "samsung-galaxy-a25.png",
    title: "Samsung Galaxy A25 5G",
    ourPrice: 799,
    marketPrice: 1099,
    date: "21.01.2024",
    condition: "Dobry",
    box: true,
    used: true,
  },
];
</script>

<template>
  <Navbar />
  <h1 class="page-title">Telefony</h1>
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
        v-for="phone in PhonesData.filter((phone) =>
          activeFilter === 'used'
            ? phone.used
            : activeFilter === 'new'
            ? !phone.used
            : true
        )"
      >
        <img :src="'/src/images/' + phone.image" class="product-image" />
        <div class="description">
          <h1 class="product-title">{{ phone.title }}</h1>
          <div class="price">
            <div class="our-price">
              <h1>{{ phone.ourPrice }} zł &nbsp;&nbsp;&nbsp;</h1>
              <p>{{ phone.marketPrice }} zł</p>
            </div>
            <div class="buy">
              <button class="buy-btn">
                <img src="../images/cart.svg" alt="" />Kup Teraz
              </button>
            </div>
            <div class="date element">Data dodania: {{ phone.date }}</div>
            <div class="condition element">Stan: {{ phone.condition }}</div>
            <div class="box element">
              Pudełko: {{ phone.box ? "Tak" : "Nie" }}
            </div>
            <div class="used element">
              Używany: {{ phone.used ? "Tak" : "Nie" }}
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
  width: 260px;
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
  font-size: 3rem;
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
