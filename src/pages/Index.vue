<template>
  <Layout :isHome="true" :img="img">
    <template v-slot:hero> </template>
    <template v-slot:main>
      <div class="grid grid-cols-3 gap-16 mx-10 h-84 -mt-32">
        <card class="showme bg-chica-w">
          <g-link to="/Japan/">
            <g-image src="../assets/japan.jpg" class="object-cover"
          /></g-link>
        </card>
        <card class="showme bg-chica-w">2</card>
        <card class="showme bg-chica-w">3</card>
      </div>
    </template>
  </Layout>
</template>

<script>
import Card from "../components/Card";

export default {
  metaInfo: {
    title: "Volute di Fumo",
    meta: [{ name: "author", content: "Federica Giustiziero" }],
  },
  components: {
    Card,
  },
  data() {
    return {
      img: {
        name: "miranda.jpg",
        position: "right top",
      },
    };
  },
};
</script>
