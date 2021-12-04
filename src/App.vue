<template>
  <div id="app">
    <header-component id="nav" />

    <router-view />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import headerComponent from "./components/headerComponent.vue";

export default {
  components: { headerComponent, FooterComponent },
  name: "app",
  compnents: {
    headerComponent,
  },
};
</script>

<style>
body {
  background-color: #002b33;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "popins", sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  z-index: 10000;
}

#nav a.router-link-exact-active {
  color: black;
  background-color: white;
  border-radius: 20px;
}
</style>
