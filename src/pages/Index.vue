<template>
  <Layout :isHome="true" :img="img">
    <template v-slot:hero> </template>
    <template v-slot:main>
      <div class="grid grid-cols-3 gap-16 mx-10 h-84 -mt-32">
        <Card class="showme bg-chica-w">1</Card>
        <Card class="showme bg-chica-w">2</Card>
        <Card class="showme bg-chica-w">3</Card>
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
