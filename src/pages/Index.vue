<template>
  <div class="flex flex-col relative">
    <header-bar />
    <hero :img="img" classes="h-120 bg-contain">
      <template v-slot:hero>
        <div
          class="flex items-center mt-32 pl-6 pr-3 w-120 border-opacity-95 bg-opacity-80"
        >
          <g-image
            src="~/assets/img/Volute_logo.png"
            alt="Federica Giustiziero photo"
            class="h-28 w-28 rounded-full m-3 ml-8 border-chica-azure border-2"
          />
          <div class="text-6xl m-3 ml-16 text-chica-white tracking-tight">
            <h1 class="font-handwritten">
              {{ $page.metadata.siteName }}
            </h1>
            <h2
              class="font-handwritten text-2xl text-chica-orange tracking-widest"
            >
              {{ $page.metadata.siteDescription }}
            </h2>
          </div>
        </div>
      </template>
    </hero>

    <div class="grid grid-cols-3 gap-16 mx-10 h-84">
      <card-argument class="bg-chica-white"> </card-argument>
      <card-argument class="bg-chica-white">2</card-argument>
      <card-argument class="bg-chica-white">3</card-argument>
    </div>

    <footer-bar class="" />
  </div>
</template>
<page-query>
  query {
    metadata {
      siteName
      siteDescription
    }
    
      }
    
  
</page-query>
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
