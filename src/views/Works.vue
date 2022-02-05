<!-- Esta view será responsável por 
    rendereizar o compnente ListComponent
    onde será exibido os itens buscados em um api -->

<template>
  <div class="content">
    <h1>Conheça nossos trabalhos</h1>

    <list endereço="http://localhost:3000/projetos" /> <!-- COLOQUE O ENDEREÇO DA API na propriedade endereço -->

    <h1>Conheça nossa equipe</h1>

    <h1 v-for="membro of equipe" :key="membro.id"></h1>

    <list endereço="http://localhost:3000/equipe" /> <!-- COLOQUE O ENDEREÇO DA API na propriedade endereço -->
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
