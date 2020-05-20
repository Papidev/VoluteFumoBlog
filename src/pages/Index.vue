<template>
  <Layout :isHome="true" :img="img" class="h-full">
    <template v-slot:hero> </template>
    <template v-slot:main>
      <div class="grid grid-cols-3 gap-16 mx-10 h-84 -mt-32">
        <card-argument class="showme bg-chica-w"> </card-argument>
        <card-argument class="showme bg-chica-w">2</card-argument>
        <card-argument class="showme bg-chica-w">3</card-argument>
      </div>
    </template>
  </Layout>
</template>

<script>
import CardArgument from "../components/CardArgument";

export default {
  metaInfo: {
    title: "Volute di Fumo",
    meta: [{ name: "author", content: "Federica Giustiziero" }],
  },
  components: {
    "card-argument": CardArgument,
  },
  data() {
    return {
      img: {
        name: "incense.jpg",
        position: "right bottom",
      },
    };
  },
};
//Photo by Lenka Sluneckova on Unsplash
</script>
