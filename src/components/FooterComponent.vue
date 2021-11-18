<template>
  <footer id="footer">
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
#footer {
  background-color: black;
  position: relative;
  width: 1268px;
  height: 204px;
  left: -5px;
  top: 820px;
}

#email {
  width: 264px;
  height: 28px;
  left: 75px;
  top: 895px;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
}

#contato {
  width: 259px;
  height: 28px;
  left: 80px;
  top: 950px;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
}

#instagram {
  position: unset;
  width: 344px;
  height: 28px;
  right: 100px;
  left: 468px;
  color: rgb(238, 238, 238);
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
}

#end {
  width: 361px;
  height: 28px;
  left: 468px;
  top: 944px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
}
</style>
