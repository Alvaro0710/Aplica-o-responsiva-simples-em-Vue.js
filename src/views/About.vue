<template>
  <div class="about">
    <welcome-component />
    <seta-component />
  </div>
</template>

<script>
import SetaComponent from "../components/setaComponent.vue";
import welcomeComponent from "../components/welcomeComponent.vue";

export default {
  components: { welcomeComponent, SetaComponent },
};
</script>
