<!--  

  Este component faz uma busca 
  em uma API HTTP com o Axios
  importado na instancia api
  no serviço  axios e renderiza 
  os itens no componente.
      
  O endereço da API é passado via
  props com o nome endereço.
-->


<template>
  <div id="component-list">
    <div class="item" v-for="item of listas" :key="item.id">
      <h1>{{ item.nome }}</h1>
      <img :src="item.img" alt="" />
      <article>{{ item.descrição }}</article>
    </div>
  </div>
</template>






<script>
import api from "../services/axios"; //importa o axios já configurado na pasta services

export default {
  name: "list", //nomeia o componente como list

  props: {
    endereço: String, //recebe a props com o endereço da api e passa para a instancia api do axios
  },

  data() {
    return {
      listas: [],
    };
  },

  mounted() {
    api.listar(this.endereço).then((resp) => {
      //this.endereço é a prop no parametro de listar para onde irá selecionar a rota da api
      var lista = resp.data;
      this.listas = lista;
      console.log(this.listas);
    });
  },
};
</script>






<style scoped>
#component-list {
  position: relative;
  display: flex;
  flex-direction: row;

  margin: 30px;
  flex-wrap: wrap;
}

.item {
  width: 30%;
  padding: 20px;
  margin: 30px 10px;
  background-color: white;
  border-radius: 10px;
}
.item img {
  width: 90%;
  height: 200px;
  margin: 10px;
}

.item h1,
article {
  color: black;
}
.item h1 {
  font-size: 30px;
}

@media (max-width: 562px) {
  .item {
    width: 90%;
    padding: 5px;
  }
}
</style>