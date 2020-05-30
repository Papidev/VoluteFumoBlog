<template>
  <div class="flex flex-col">
    <header-bar />
    <hero :img="img" classes="h-104 bg-cover">
      <template v-slot:hero>
        <div class="flex mt-20">
          <div class="ml-28 p-2">
            <h1
              class="font-handwritten text-6xl text-chica-white tracking-tight"
            >
              {{ $page.metadata.siteName }}
            </h1>
            <h2
              class="font-handwritten text-2xl text-chica-orange tracking-widest"
            >
              {{ $page.metadata.siteDescription }}
            </h2>
          </div>
          <g-image
            src="@/assets/img/Volute_logo.png"
            alt="Federica Giustiziero photo"
            class="h-24 w-24 rounded-full ml-10 border-chica-orange border-2"
          />
        </div>
      </template>
    </hero>

    <div class="flex">
      <card-argument class="bg-chica-white flex-1"> </card-argument>
      <card-argument class="bg-chica-white flex-1">2</card-argument>
      <card-argument class="bg-chica-white flex-1">3</card-argument>
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
import CardArgument from "@/components/CardArgument";
import Header from "@/layouts/Partials/Header";
import Footer from "@/layouts/Partials/Footer";
import Hero from "@/layouts/Partials/Hero";

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
