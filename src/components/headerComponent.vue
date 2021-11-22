<template>
  <div>
    <header>
      <div id="logoImg">
        <img src="" alt="" />
      </div>

      <a href="#" id="sobrenós"> Sobre nós </a>

      <a href="#" id="trabalhos"> trabalhos recentes </a>

      <a href="#" id="contato"> Contato </a>
    </header>
  </div>
</template>



<script>
export default {
  name: "header",
  props: {
    msg: String,
  },
};
</script>







<style scoped>
header {
  position: fixed;
  width: 1345px;
  height: 100px;
  left: 0px;
  top: 0px;

  background-color: white;
}

#sobrenós {
  position: absolute;
  width: 103px;
  height: 31px;
  left: 35px;
  top: 39px;
  text-decoration: none;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 31px;

  color: #000000;
}

#trabalhos {
  position: absolute;
  width: 199px;
  height: 31px;
  left: 223px;
  top: 39px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 31px;

  color: #000000;
  text-decoration: none;
}
#contato {
  position: absolute;
  width: 84px;
  height: 31px;
  left: 507px;
  top: 39px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 31px;

  color: #000000;
  text-decoration: none;
}
</style>