<template>
  <div id="main">
    <header>
      <div id="logoImg">
        <img src="" alt="" />
      </div>

      <router-link to="/about" id="sobrenós">sobre nós</router-link>

      <router-link to="/" id="trabalhos">trabalhos</router-link>

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
main {
  width: 100%;
  max-width: 720px;
  margin: 0, auto;
}
header {
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0px;
  top: 0px;

  background-color: white;
}

#sobrenós {
  position: absolute;
  width: 103px;
  height: 31px;
  left: 35px;

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

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 31px;

  color: #000000;
  text-decoration: none;
}
</style>