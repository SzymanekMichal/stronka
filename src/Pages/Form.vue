<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import emailjs from "emailjs-com";

const handleSubmit = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const message = document.getElementById("message").value;
  const option = document.querySelector('input[name="options"]:checked').value;
  const newsletter = document.getElementById("newsletter").checked;
  const agree = document.getElementById("agree").checked;
  const design = document.getElementById("design").value;

  emailjs
    .send(
      "default_service",
      "template_0ntnc3c",
      {
        name: name,
        email: email,
        age: age,
        message: message,
        option: option,
        design: design,
        newsletter: newsletter,
        agree: agree,
      },
      "GymIp0IgFNSqCBqfW"
    )
    .then(
      (response) => {
        alert(
          "Dziękujemy za opinię, weźmiemy ją pod uwagę przy przyszłych zmianach!",
          response.status,
          response.text
        );
      },
      (err) => {
        alert("Wystąpił błąd, spróbuj ponownie", err);
      }
    );
};
</script>

<template>
  <Navbar />
  <h1 class="title">FORMULAŻ</h1>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <input type="text" id="name" placeholder="Imię" />
      <input type="email" id="email" placeholder="Email" />
      <input type="number" id="age" placeholder="Wiek" />
      <textarea
        id="message"
        placeholder="Napisz co można by było poprawić w naszym systemie"
      ></textarea>

      <div class="flex">
        <input type="radio" id="problem" name="options" value="tak" />
        <label for="option1"
          >Napotkałem/am problemy podczas kożystania ze strony</label
        >
      </div>
      <div class="flex">
        <input type="radio" id="no-problem" name="options" value="nie" />
        <label for="option2"
          >Nie napotkałem/am problemów podczas kożystania ze strony</label
        >
      </div>
      <div class="column">
        <input type="range" id="design" value="design" />
        <label for="option3">Jak bardzo podoba się tobie design strony</label>
      </div>
      <div class="flex">
        <input type="checkbox" id="newsletter" />
        <label for="agree">Zapisz się do Newslettera aby być na bierząco</label>
      </div>
      <div class="flex">
        <input type="checkbox" id="agree" />
        <label for="agree"
          >Wyrażam zgodę na przetwarzanie moich danych osobowych przez Szybki
          Lombard w celu prowadzenia rekrutacji na aplikowane przeze mnie
          stanowisko</label
        >
      </div>
      <button type="submit">Wyślij</button>
    </form>
  </div>
  <div class="bottom-text">
    <h1>Powiedz co możemy zrobić lepiej</h1>
    <p>
      Dzięki twojej opinii będziemy mogli ulepszyć naszą stronę, aby była jak najlepiej przystowana do twoich potrzeb.
    </p>
    <h3>Dziękujemy!</h3>
  </div>
  <Footer />
</template>

<style scoped>
* {
  color: #0d1b2a;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e1dd;
  padding: 30px;
}

.title {
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 150px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  gap: 1rem;
  margin-top: 20px;
  color: black;
}

textarea {
  width: 500px;
  height: 100px;
}

label {
  font-size: 1rem;
  margin-left: 10px;
}

.flex {
  text-align: left;
}

button {
  width: 200px;
  text-align: center;
  margin: auto;
  padding: 10px;
  font-size: 1.5rem;
}

.column {
  margin: 0 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.bottom-text {
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
}

.bottom-text p {
  max-width: 500px;
  margin: 20px auto;
}
</style>
