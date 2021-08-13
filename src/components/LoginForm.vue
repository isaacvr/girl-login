<template>
  <div class="form">
    <h3>Iniciar sesión</h3>

    <div class="input">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Iconly/Curved/Profile</title>
        <g id="Iconly/Curved/Profile" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <g id="Profile" transform="translate(5.000000, 2.400000)" stroke-width="1.5">
            <path d="M6.84454545,19.261909 C3.15272727,19.261909 -8.52651283e-14,18.6874153 -8.52651283e-14,16.3866334 C-8.52651283e-14,14.0858516 3.13272727,11.961909 6.84454545,11.961909 C10.5363636,11.961909 13.6890909,14.0652671 13.6890909,16.366049 C13.6890909,18.6658952 10.5563636,19.261909 6.84454545,19.261909 Z" id="Stroke-1"></path>
            <path d="M6.83729838,8.77363636 C9.26002565,8.77363636 11.223662,6.81 11.223662,4.38727273 C11.223662,1.96454545 9.26002565,-1.0658141e-14 6.83729838,-1.0658141e-14 C4.41457111,-1.0658141e-14 2.45,1.96454545 2.45,4.38727273 C2.44184383,6.80181818 4.39184383,8.76545455 6.80638929,8.77363636 C6.81729838,8.77363636 6.82729838,8.77363636 6.83729838,8.77363636 Z" id="Stroke-3"></path>
          </g>
        </g>
      </svg>
      <input type="text" v-model="user">
    </div>

    <div class="input">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Iconly/Curved/Lock</title>
        <g id="Iconly/Curved/Lock" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <g id="Lock" transform="translate(3.500000, 2.000000)" stroke-width="1.5">
            <path d="M12.9709,7.4033 L12.9709,5.2543 C12.9399,2.7353 10.8719,0.7193 8.3539,0.7503 C5.8869,0.7813 3.8919,2.7673 3.8499,5.2343 L3.8499,7.4033" id="Stroke-1"></path>
            <line x1="8.4103" y1="12.1562" x2="8.4103" y2="14.3772" id="Stroke-3"></line>
            <path d="M8.4103,6.8242 C2.6653,6.8242 0.7503,8.3922 0.7503,13.0952 C0.7503,17.7992 2.6653,19.3672 8.4103,19.3672 C14.1553,19.3672 16.0713,17.7992 16.0713,13.0952 C16.0713,8.3922 14.1553,6.8242 8.4103,6.8242 Z" id="Stroke-5"></path>
          </g>
        </g>
      </svg>
      <input type="password" v-model="password">
    </div>

    <button>Continuar</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'LoginForm',
    data: function() {
      return {
        user: '',
        password: '',
      }
    },
    mounted: function() {
      this.user = "myuser@gmail.com";
      this.password = "mypassword";
    }
  })
</script>

<style lang="scss" scoped>
.form {
  width: max-content;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 10.3rem;
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 7.2rem;
  padding: 3.5rem 4.5rem 5.5rem 4.5rem;
  border-radius: 3rem;
  position: relative;
  z-index: 10;

  h3 {
    text-align: center;
    margin: 0;
    font-size: 1.7rem;
    letter-spacing: .1rem;
  }

  .input {
    position: relative;
    width: 50ch;
    height: 5.7rem;
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 2.2rem;
    border-bottom: 1px solid currentColor;
    outline: none;

    &::after {
      content: "";
      display: flex;
      position: absolute;
      bottom: -1px;
      width: 0%;
      height: 2px;
      background-image: linear-gradient(to right, #a30ac7, #f04978);
      transition: all 500ms ease;
    }

    &:focus-within::after {
      width: 100%;
    }

    svg {
      width: 1.8rem;
      height: 1.8rem;
      margin-left: 1rem;
      position: absolute;
      stroke: currentColor;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - 5.6rem);
      height: 100%;
      padding-left: 5.6rem;
      background-color: transparent;
      color: currentColor;
      font-size: 1.3rem;
      outline: none;
      border: none;
    }
  }

  button {
    color: currentColor;
    background: linear-gradient(to right, #a30ac7, #f04978);
    border: none;
    border-radius: 1rem;
    padding-block: 1.6rem;
    margin-top: 1.5rem;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);
    transition: all 200ms;

    &:hover {
      box-shadow: 0px .6rem 13px rgba(0, 0, 0, 0.3);
      transform: translateY(-0.3rem);
    }
  }
}
</style>