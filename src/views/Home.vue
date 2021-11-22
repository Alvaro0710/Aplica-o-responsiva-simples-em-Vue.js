<template>
  <div class="home">
    <header-component />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <footer-component />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HeaderComponent from "../components/headerComponent.vue";
import footerComponent from "../components/FooterComponent.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    HeaderComponent,
    footerComponent,
  },
};
</script>
