<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const usersMonth = [
  { name: "Rafał R.", transactions: 13 },
  { name: "Beata K.", transactions: 8 },
  { name: "Monika L.", transactions: 8 },
  { name: "Robert L.", transactions: 7 },
  { name: "Basia K.", transactions: 6 },
  { name: "Andrzej Z.", transactions: 6 },
  { name: "Michał S.", transactions: 5 },
  { name: "Konrad L.", transactions: 4 },
  { name: "Dariusz K.", transactions: 4 },
  { name: "Wojciech T.", transactions: 3 },
];

const usersYear = [
  { name: "Rafał R.", transactions: 34 },
  { name: "Beata K.", transactions: 27 },
  { name: "Monika L.", transactions: 22 },
  { name: "Robert L.", transactions: 21 },
  { name: "Basia K.", transactions: 18 },
  { name: "Bartosz J.", transactions: 17 },
  { name: "Monika Ś.", transactions: 15 },
  { name: "Zosia A.", transactions: 15 },
  { name: "Dariusz K.", transactions: 13 },
  { name: "Adam J.", transactions: 11 },
];

const usersSingleTransaction = [
  { name: "Rafał R.", transactions: 12000 },
  { name: "Basia K.", transactions: 7200 },
  { name: "Monika L.", transactions: 6999 },
  { name: "Krzysztof L.", transactions: 6049 },
  { name: "Bartosz J.", transactions: 5500 },
  { name: "Natalia Ł.", transactions: 5499 },
  { name: "Genowefa H.", transactions: 4999 },
  { name: "Zenon A.", transactions: 4799 },
  { name: "Janina U.", transactions: 4500 },
  { name: "Cezary P.", transactions: 4300 },
];
</script>

<template>
    <Navbar />
    <h1 class="title">TABELE REKORDÓW</h1>
    <div class="tables">
    <table>
      <thead>
        <tr>
          <th class="description" colspan="3">Najczęści klienci w maju 2024</th>
        </tr>
        <tr>
          <th>Miejsce</th>
          <th>Liczba transakcji</th>
          <th>Imię i nazwisko</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in usersMonth" :key="index">
          <td
            :class="
              index === 0
                ? 'first'
                : index === 1
                ? 'second'
                : index === 2
                ? 'third'
                : ''
            "
          >
            {{ index + 1 }}
          </td>
          <td
            :class="
              index === 0
                ? 'first'
                : index === 1
                ? 'second'
                : index === 2
                ? 'third'
                : ''
            "
          >
            {{ user.transactions }}
          </td>
          <td
            :class="
              index === 0
                ? 'first'
                : index === 1
                ? 'second'
                : index === 2
                ? 'third'
                : ''
            "
          >
            {{ user.name }}
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th class="description" colspan="3">Najczęśći klienci w 2024</th>
        </tr>
        <tr>
          <th>Miejsce</th>
          <th>Liczba transakcji</th>
          <th>Imię i nazwisko</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in usersYear" :key="index">
          <td
            :class="
              index === 0
                ? 'first'
                : index === 1
                ? 'second'
                : index === 2
                ? 'third'
                : ''
            "
          >
            {{ index + 1 }}
          </td>
          <td
            :class="
              index === 0
                ? 'first'
                : index === 1
                ? 'second'
                : index === 2
                ? 'third'
                : ''
            "
          >
            {{ user.transactions }}
          </td>
          <td
            :class="
              index === 0
                ? 'first'
                : index === 1
                ? 'second'
                : index === 2
                ? 'third'
                : ''
            "
          >
            {{ user.name }}
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th class="description" colspan="3">Największe tranzakcje w 2024</th>
        </tr>
        <tr>
          <th>Miejsce</th>
          <th>Liczba transakcji</th>
          <th>Imię i nazwisko</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in usersSingleTransaction" :key="index">
          <td
            :class="
              index === 0
                ? 'first'
                : index === 1
                ? 'second'
                : index === 2
                ? 'third'
                : ''
            "
          >
            {{ index + 1 }}
          </td>
          <td
            :class="
              index === 0
                ? 'first'
                : index === 1
                ? 'second'
                : index === 2
                ? 'third'
                : ''
            "
          >
            {{ user.transactions }} zł
          </td>
          <td
            :class="
              index === 0
                ? 'first'
                : index === 1
                ? 'second'
                : index === 2
                ? 'third'
                : ''
            "
          >
            {{ user.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="bottom-text">
    <h1>Oto nasi najwierniejsi klienci</h1>
    <p>Wszyscy pracownicy oraz cały zarząd jest niesamowicie wdzięczny za wsparcie, które okazujecie nam wszystkim.</p>
    <h3>Dziękujemy!</h3>
  </div>
    <Footer />
</template>

<style scoped>
* {
  color: #0d1b2a;
}

.title {
    font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
    margin-top: 150px;
}

.description {
  font-size: 18px;
  font-weight: bold;
}

th {
  background-color: #778da9;
  color: white;
  padding: 10px;
}

.first {
    background-color: rgba(249, 168, 38, 0.6);
}

.second {
    background-color: rgba(150, 143, 143, 0.6);
}

.third {
    background-color: rgba(205, 127, 50, 0.6);
}

td {
    padding: 2px;
    text-align: center;
    background-color: #e0e1dd;
}

.tables {
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 50px;
}

.bottom-text {
    text-align: center;
    padding: 50px;
    background-color: #e0e1dd;
    font-size: 1.5rem;
}

.bottom-text p {
    max-width: 500px;
    margin: 20px auto;
}
</style>
