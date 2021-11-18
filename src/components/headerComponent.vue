<template>
  <div>
    <header>
      <img src="" alt="" />

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
#sobrenós {
  position: absolute;
  width: 103px;
  height: 31px;
  left: 35px;
  top: 39px;

  font-family: Sarabun;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;

  color: #000000;
}

#trabalhos {
  position: absolute;
  width: 199px;
  height: 31px;
  left: 223px;
  top: 39px;

  font-family: Sarabun;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;

  color: #000000;
}
#contato {
  position: absolute;
  width: 84px;
  height: 31px;
  left: 507px;
  top: 39px;

  font-family: Sarabun;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;

  color: #000000;
}

header {
  position: absolute;
  width: 1260px;
  height: 109px;
  left: 0px;
  top: 0px;

  background: #ffffff;
}
</style>