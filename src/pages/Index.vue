<template>
  <div class="flex flex-col relative">
    <header-bar />
    <hero :img="img" classes="h-120 bg-contain showme">
      <template v-slot:hero>
        <div
          class="flex items-center mt-16 pl-6 pr-3 w-104 rounded-r-lg bg-chica-w italic border-chica-dark border-opacity-95 border-r-8 border-t-3 border-b-3 bg-opacity-80"
        >
          <div class="text-3xl md:text-5xl mr-5">
            <h2 class="">
              COGLIONE
            </h2>
          </div>
        </div>
      </template>
    </hero>

    <div class="grid grid-cols-3 gap-16 mx-10 h-84">
      <card-argument class="showme bg-chica-w"> </card-argument>
      <card-argument class="showme bg-chica-w">2</card-argument>
      <card-argument class="showme bg-chica-w">3</card-argument>
    </div>

    <footer-bar class="" />
  </div>
</template>

<script>
import CardArgument from "../components/CardArgument";
import Header from "~/layouts/Partials/Header";
import Footer from "~/layouts/Partials/Footer";
import Hero from "~/layouts/Partials/Hero";

export default {
  metaInfo: {
    title: "Volute di Fumo",
    meta: [{ name: "author", content: "Federica Giustiziero" }],
  },
  components: {
    "card-argument": CardArgument,
    "header-bar": Header,
    "footer-bar": Footer,
    hero: Hero,
  },
  data() {
    return {
      img: {
        name: "incense2_tiny.png",
        position: "left top",
      },
    };
  },
};
</script>
