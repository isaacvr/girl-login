<template>
  <div class="light1"></div>
  <div class="light2"></div>
  <div class="light3"></div>
  <div class="light4"></div>
  <div class="light5"></div>
  <img class="girl" src="/src/assets/girl.png" alt="">
  <Navbar />
  <LoginForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import LoginForm from './components/LoginForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    LoginForm
  }
})
</script>

<style>
body {
  margin: 0;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: white;
  background: linear-gradient(135deg, #1c1b20, #202e55);
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
}

html {
  font-size: min(1vw, 16px);
}
</style>

<style scoped>
.light1 {
  position: absolute;
  width: 3rem;
  height: 5rem;
  background-color: #a5ecf7;
  filter: blur(3rem);
  top: 0;
  left: -4rem;
}

.light2 {
  position: absolute;
  width: 17rem;
  height: 16rem;
  background-color: #ba1daf;
  top: 46%;
  left: 22%;
  border-radius: 50%;
  filter: blur(11rem);
}

.light3 {
  position: absolute;
  width: 40rem;
  height: 20rem;
  background-image: linear-gradient(to right, #234251, #cd2c9c);
  right: 12%;
  top: 0%;
  z-index: -1;
  border-radius: 50%;
  filter: blur(6rem);
  transform: rotate(12deg);
}

.light4 {
  position: absolute;
  width: 53rem;
  height: 28rem;
  right: 6%;
  bottom: 0;
  background-image: linear-gradient(162deg, #942e66, #012f87);
  filter: blur(14rem);
  z-index: -1;
}

.light5 {
  position: absolute;
  width: 12rem;
  height: 9rem;
  background-color: #2b8764;
  right: 21%;
  top: 54%;
  border-radius: 50%;
  z-index: -1;
  filter: blur(5rem);
}

.girl {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
</style>
