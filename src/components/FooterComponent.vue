<template>
  <footer>
    <h1>Empresa</h1>
    <h1 id="email">Email:email@gmail.com</h1>
    <h1 id="contato">Contato: (77)123456789</h1>
    <h1 id="instagram">Instagra: @nome_da_empresa</h1>
    <h1 id="end">Endereço: Rua... ,Bairro... , Cep ...</h1>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "popins", sans-serif;
}

footer {
  position: relative;
  background-color: white;
  padding: 50px;
  padding-top: 10px;
  width: 100%;
  columns: 2;
  justify-content: center;
}

footer h1 {
  color: black;
  white-space: pre-wrap;
  padding: 15px;
  font-size: 30px;
}
@media (max-width: 562px) {
  footer {
    display: flex;
    flex-direction: column;
    justify-items: initial;
  }
  footer h1 {
    font-size: 18px;
    padding: 10px;
    white-space: nowrap;
  }
}
</style>
