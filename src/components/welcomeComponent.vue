<template>
  <div id="main">
    <img src="../assets/estrela.jpg" id="star" alt="" />
    <img src="../assets/lua.png" id="lua" alt="" />
    <img src="../assets/montanha.png" id="montanha" alt="" />
    <h2 id="text">Montanha</h2>
    <a href="" id="btn">Explore</a>
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
  z-index: 12;
  left: 0;
  object-fit: cover;
  padding: 0px, 30px, 100px;
}
#text {
  position: relative;
  color: white;
  object-fit: cover;
  z-index: 11;
  white-space: nowrap;
  font-size: 7.5vw;
}
#btn {
  position: relative;
  color: black;
  background-color: white;
  padding: 8px 60px;
  z-index: 13;
  text-decoration: none;
  top: 150px;
  border-radius: 30px;
}
</style>
