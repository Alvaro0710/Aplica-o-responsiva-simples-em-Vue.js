<!-- Esta página é responsavel por renderizar a pagina principal
do site e o component de boas vindas -->

<template>
  <div class="about">
    <welcome-component />

    <div id="loren">
      <h2>Bem vindo</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        soluta. Mollitia nisi recusandae quo aspernatur tempora quae illum nulla
        minima rerum sit neque voluptates, perspiciatis, repudiandae dignissimos
        labore, est dolor! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cupiditate aspernatur, exercitationem ipsam impedit similique sit,
        tempora iste nihil fugiat odit inventore ducimus, officiis veniam earum
        eaque? Ducimus eum facilis asperiores <br /><br />

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit
        earum rem dicta delectus dolorum nisi deserunt fuga, beatae ipsa
        eligendi reiciendis cum laboriosam pariatur voluptates fugiat voluptatem
        quam illum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Enim sit, voluptatum harum expedita veritatis temporibus maxime neque ad
        molestias eligendi! Beatae, quia dolores. Natus mollitia ratione optio
        delectus cumque illo. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rem non nisi ipsam aut. Id provident ea veniam, iusto dignissimos
        quasi, rem cupiditate facere sequi quam fugiat voluptatem! Quam, optio
        amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        soluta. Mollitia nisi recusandae quo aspernatur tempora quae illum nulla
        minima rerum sit neque voluptates, perspiciatis, repudiandae dignissimos
        labore, est dolor! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cupiditate aspernatur, exercitationem ipsam impedit similique sit,
        tempora iste nihil fugiat odit inventore ducimus, officiis veniam earum
        eaque? Ducimus eum facilis asperiores <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        soluta. Mollitia nisi recusandae quo aspernatur tempora quae illum nulla
        minima rerum sit neque voluptates, perspiciatis, repudiandae dignissimos
        labore, est dolor! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cupiditate aspernatur, exercitationem ipsam impedit similique sit,
        tempora iste nihil fugiat odit inventore ducimus, officiis veniam earum
        eaque? Ducimus eum facilis asperiores <br /><br />
      </p>
    </div>
    <div id="somos">
      <h2>Quem somos</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dolore
        perspiciatis quis porro praesentium laboriosam nam! Odit, repellendus!
        Odit ex quo accusantium expedita fugit impedit in libero aliquid aperiam
        rem?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
        eveniet laudantium id necessitatibus distinctio. Ipsa, dolore illum
        nostrum est unde aliquam magnam sapiente? Corporis reprehenderit
        mollitia nobis officia maiores reiciendis. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Sunt veritatis hic, quia ab dolorem
        voluptate sequi dolores iusto. Doloribus ipsam, dolore recusandae
        tempora voluptatibus hic numquam accusamus at exercitationem facere.
        Lorem ipsum dolor sit, amet consectetur<br /><br />
        adipisicing elit. Amet dolore hic deserunt laborum cumque doloribus
        earum minima vero? Doloremque, velit rerum ratione perspiciatis odio
        ullam error in dignissimos consequatur culpa! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Facilis nisi cum, eaque velit nulla
        obcaecati atque animi recusandae, commodi consectetur voluptates, quo
        distinctio suscipit ex soluta sunt tempore saepe optio!<br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
        corrupti molestiae non ratione aspernatur aut fuga quis vitae! Rerum
        fugiat deserunt, dolor nam sit magni corporis autem odit laborum facere.
        adipisicing elit. Amet dolore hic deserunt laborum cumque doloribus
        earum minima vero? Doloremque, velit rerum ratione perspiciatis odio
        ullam error in dignissimos consequatur culpa! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Facilis nisi cum, eaque velit nulla
        obcaecati atque animi recusandae, commodi consectetur voluptates, quo
        distinctio suscipit ex soluta sunt tempore saepe optio!<br />
        adipisicing elit. Amet dolore hic deserunt laborum cumque doloribus
        earum minima vero? Doloremque, velit rerum ratione perspiciatis odio
        ullam error in dignissimos consequatur culpa! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Facilis nisi cum, eaque velit nulla
        obcaecati atque animi recusandae, commodi consectetur voluptates, quo
        distinctio suscipit ex soluta sunt tempore saepe optio!<br />
      </p>
    </div>
  </div>
</template>

<script>
import welcomeComponent from "../components/welcomeComponent.vue";

export default {
  components: { welcomeComponent },
};
</script>

<style scoped>
#loren {
  padding: 100px 20px;
}

#loren p,
h2 {
  padding: 10px;
  color: white;
  margin-top: 20px;
}

#somos p {
  display: flexbox;
  columns: 2;
  color: white;
  padding: 30px;
}

@media (max-width: 562px) {
  #somos p {
    columns: 1;
  }
}
</style>
