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
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  word-wrap: break-word;
  overflow-wrap: break-word;
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
