<template>
  <div id="main">
    <img src="../assets/estrela.jpg" id="star" alt="" />
    <img src="../assets/lua.png" id="lua" alt="" />
    <img src="../assets/montanha.png" id="montanha" alt="" />

    <h2 id="text">Montanha</h2>
    <a href="#loren">Explore</a>
  </div>
</template>

<script>
export default {
  name: "welcome",
};
</script>

<style scoped>
#main {
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
}

#star {
  position: absolute;
}
#star {
  bottom: 40px;
  width: 100%;

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
#main a {
  position: relative;
  background-color: white;
  padding: 15px;
  border-radius: 20px;
  text-decoration: none;
  top: 100px;
  color: #002b33;
  z-index: 1000;
}

@media (max-width: 562px) {
  #main {
    position: relative;
    z-index: 12;
    height: 100vw;
    padding: 20px;
    bottom: 20px;
  }
  #main #montanha {
    width: 100%;
    height: 500px;
    z-index: 10;

    top: 10px;
  }
  #main #star {
    height: 100vh;
  }
  #lua {
    position: absolute;
    width: 90%;
    height: 90vw;
    z-index: 10;
    right: 100%;
    left: 30px;

    top: 10px;
  }
  #text {
    top: 90px;
    left: 0px;
  }
  #btn {
    top: 200px;
  }
}
</style>
