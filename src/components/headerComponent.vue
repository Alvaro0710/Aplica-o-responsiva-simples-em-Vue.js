<template>
  <div id="main">
    <header>
      <a href="/" id="logo">logo</a>

      <ul>
        <li>
          <router-link to="/">Sobre nós</router-link>
        </li>
        <li>
          <router-link to="/works" id="trabalhos">Trabalhos</router-link>
        </li>
        <li>
          <router-link to="/contato"> Contato </router-link>
        </li>
      </ul>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "popins", sans-serif;
}

header {
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}
header button {
  display: none;
}

header #logo {
  color: white;
  font-weight: 700;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
}

header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
header ul li {
  list-style: none;
  padding: 6px 15px;
  text-decoration: none;
  margin: 20px;
}

a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

header ul li a:hover {
  background: white;
  color: black;
  border-radius: 30;
  border-radius: 20px;
}

menu {
  position: absolute;
  background-color: white;
  height: 100vh;
  z-index: 1000;
}

@media (max-width: 562px) {
  header {
    display: none;
  }
  #main {
    display: flex;
    justify-content: flex-end;
  }

  button {
    display: none;
    background-color: white;
    width: 100%;
  }
}
</style>