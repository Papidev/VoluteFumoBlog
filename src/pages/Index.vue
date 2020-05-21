<template>
  <home-layout :img="img">
    <template v-slot:hero> </template>
    <template v-slot:main>
      <div class="grid grid-cols-3 gap-16 mx-10 h-84">
        <card-argument class="showme bg-chica-w"> </card-argument>
        <card-argument class="showme bg-chica-w">2</card-argument>
        <card-argument class="showme bg-chica-w">3</card-argument>
      </div>
    </template>
  </home-layout>
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
        name: "incense2.png",
        position: "left top",
      },
    };
  },
};
//Photo by Lenka Sluneckova on Unsplash
</script>
