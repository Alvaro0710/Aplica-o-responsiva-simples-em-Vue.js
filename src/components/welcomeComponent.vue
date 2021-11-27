<template>
  <div id="main">
    <img src="../assets/estrela.jpg" id="star" alt="" />
    <img src="../assets/lua.png" id="lua" alt="" />
    <img src="../assets/montanha.png" id="montanha" alt="" />
  </div>
</template>

<script>
export default {
  name: "welcome",
};
</script>

<style scoped>
#main {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
}
#main img {
  position: absolute;
}
#star {
  bottom: 40px;
  width: 100%;
  height: 100vw;
  object-fit: cover;
  z-index: 9;
  left: 0;
}
#lua {
  position: absolute;
  width: 600px;
  height: 500px;
  z-index: 10;
  left: 368px;
  top: 10px;
}
#montanha {
  position: absolute;
  width: 100%;
  z-index: 11;
  left: 0;
}
</style>
