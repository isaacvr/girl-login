<template>
  <ul>
    <li
      v-bind:class="{ active: item.active }"
      v-for="item in list"
      :key="item.text"
      @click="() => selectItem(item)">{{item.text}}</li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Navbar",
    data: function() {
      return {
        list: [
          {
            text: 'Inicio',
            active: false
          },
          {
            text: 'Portafolio',
            active: false
          },
          {
            text: 'Soporte',
            active: false
          },
          {
            text: 'Registro',
            active: true
          }
        ]
      }
    },
    methods: {
      selectItem: function(item: any) {
        this.list.forEach(l => l.active = false);
        item.active = true;
      }
    }
  })
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 2.9rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: auto;
  width: 47%;
  margin-right: 14.6rem;
  justify-content: space-between;

  li {
    color: inherit;
    position: relative;
    cursor: pointer;
    transition: color 300ms;

    &:hover {
      color: #e35dff;
      text-shadow: 0px 0px 1px black;
    }

    &.active:after {
      content: "";
      position: absolute;
      background-color: currentColor;
      width: 1.3rem;
      height: .3rem;
      display: flex;
      left: 0;
      right: 0;
      margin: .6rem auto;
      border-radius: 1rem;
    }
  }
}
</style>