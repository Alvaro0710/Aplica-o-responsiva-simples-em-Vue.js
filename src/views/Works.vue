<template>
  <div class="content">
    <h1>Conheça nossos trabalhos</h1>
    <list />
    <h1>Conheça nossa equipe</h1>
    <list />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Works",
  components: { list },
};
import list from "../components/ListComponent.vue";
</script>

<style scoped>
h1 {
  color: white;

  font-size: 40px;
}
list {
  margin: 20px;
}
</style>
