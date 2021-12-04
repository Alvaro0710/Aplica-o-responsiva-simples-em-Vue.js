<template>
  <footer>
    <h1 id="email">email:email@gmail.com</h1>
    <h1 id="contato">contato: (77)123456789</h1>
    <h1 id="instagram">instagra: @nome_da_empresa</h1>
    <h1 id="end">Endereço: Rua... ,Bairro... , Cep ...</h1>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
footer {
  position: absolute;
  background-color: white;
  padding: 50px;
  padding-top: 10px;
  width: 100%;
  height: 204px;
  display: flexbox;
  columns: 2;
  justify-content: center;
}

footer h1 {
  position: relative;
  color: #002b33;
  padding: 15px;
  font-size: 30px;
}
</style>
