<template>
  <div>
    <h1>Onde nos encontrar</h1>
    <div id="main">
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31042.875125019895!2d-42.26423120978112!3d-13.451929756221299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7435d63dd9a10ab%3A0xc8258cd6292f93ce!2sParamirim%2C%20BA%2C%2046190-000!5e0!3m2!1spt-BR!2sbr!4v1639160048623!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div id="form">
        <h2>Fale conosco</h2>
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="telefone" />
        <input type="email" placeholder="email" />
        <input type="text" placeholder="mensagem" />
        <button type="submit">enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contato",
};
</script>

<style>
#main {
  display: flex;
}
#form {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 50%;
  height: 50vh;
  margin: 30px 30px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
}
#form input,
button {
  margin: 10px;
  width: 40%;
  height: 10%;
  border-radius: 10px;
  border: none;
  color: blue;
}

#map {
  width: 60%;
  align-items: center;
  margin: 5px 30px;
  margin-bottom: 30px;
}

h1 {
  color: white;
  margin: 40px;
}

@media (max-width: 562px) {
  #main {
    display: flex;
    flex-direction: column;
    margin: 0px;
    align-items: center;
  }
  #form {
    width: 90%;
  }
  #map {
    width: 90%;
  }
}
</style>