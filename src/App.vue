<template>
  <div id="app">
    <header-component />
    <h1>,</h1>
    <footer-component />
  </div>
</template>

<script>
import headerComponent from "./components/headerComponent.vue";
import footerComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    headerComponent,
    footerComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
