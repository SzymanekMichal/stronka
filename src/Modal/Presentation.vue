<script setup>
import { ref } from "vue";

const imageDisplayed = ref(1);

const nextImage = () => {
  if (imageDisplayed.value === 6) {
    imageDisplayed.value = 1;
  } else {
    imageDisplayed.value = imageDisplayed.value + 1;
  }
};

const prevImage = () => {
  if (imageDisplayed.value === 1) {
    imageDisplayed.value = 6;
  } else {
    imageDisplayed.value = imageDisplayed.value - 1;
  }
};
</script>

<template>
  <div class="cover">
    <img src="../images/pres1.jpg" alt="galery-image" v-if="imageDisplayed===1"/>
    <img src="../images/pres2.jpg" alt="galery-image" v-if="imageDisplayed===2"/>
    <img src="../images/pres3.jpg" alt="galery-image" v-if="imageDisplayed===3"/>
    <img src="../images/pres4.jpg" alt="galery-image" v-if="imageDisplayed===4"/>
    <img src="../images/pres5.jpg" alt="galery-image" v-if="imageDisplayed===5"/>
    <img src="../images/pres6.jpg" alt="galery-image" v-if="imageDisplayed===6"/>
    <div class="controls">
      <button @click="prevImage" class="arrows"> < </button>
      <div class="dots">
        <button :class="imageDisplayed===1?'active':''" @click="imageDisplayed=1"></button>
        <button :class="imageDisplayed===2?'active':''" @click="imageDisplayed=2"></button>
        <button :class="imageDisplayed===3?'active':''" @click="imageDisplayed=3"></button>
        <button :class="imageDisplayed===4?'active':''" @click="imageDisplayed=4"></button>
        <button :class="imageDisplayed===5?'active':''" @click="imageDisplayed=5"></button>
        <button :class="imageDisplayed===6?'active':''" @click="imageDisplayed=6"></button>
      </div>
      <button @click="nextImage" class="arrows"> > </button>
    </div>
    <div class="x" @click="$emit('closePresentation')">&times;</div>
  </div>
</template>

<style scoped>
.cover {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  margin-top: -110px;
}

.galery-image {
  position: absolute;
}

.controls {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dots {
  height: 20px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
}

.dots button {
  height: 11px;
  width: 11px;
  border-radius: 50%;
  margin: auto;
  border: none;
}

img {
  height: 80%;
  width: 50%;
  object-fit: contain;
}

.active {
  background: #778da9;
}

.arrows {
  border: none;
  background: transparent;
  color: white;
  font-size: 1.5rem;
}

.arrows:hover {
  opacity: 0.8;
}

.x {
  position: absolute;
  top: 0px;
  right: 20px;
  font-size: 3rem;
}

.x:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
