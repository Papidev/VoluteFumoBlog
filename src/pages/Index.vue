<template>
  <div class="flex flex-col">
    <header-bar />
    <hero :img="img" classes="h-104 bg-cover border-t-2 border-chica-light">
      <template v-slot:hero>
        <div class="flex mt-20 items-start">
          <div class="ml-16 p-3">
            <g-image
              src="@/assets/img/Volute_logo.png"
              alt="Federica Giustiziero photo"
              class="h-24 w-24 rounded-full border-2 border-chica-orange"
            />
          </div>
          <div class="ml-6 p-2">
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
        </div>
      </template>
    </hero>

    <div class="bg-chica-light border-t-5 border-chica-purple">
      <div class="flex mt-2">
        <card-argument class="bg-chica-white flex-1 m-4" title="Giappone">
          <template #intro>
            <p class="text-justify text-sm break-words">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
          </template>
        </card-argument>
        <card-argument class="bg-chica-white flex-1 m-4" title="Letteratura">
          <template #intro>
            <p class="text-justify text-sm break-words">
              bbbb
            </p>
          </template>
        </card-argument>
        <card-argument class="bg-chica-white flex-1 m-4" title="Astrologia">
          <template #intro>
            <p class="text-justify text-sm break-words">
              ccccc
            </p>
          </template>
        </card-argument>
      </div>
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
  // metaInfo: {
  //   title: "Volute di Fumo",
  //   meta: [{ name: "author", content: "Federica Giustiziero" }],
  // },
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
        position: "left bottom",
      },
    };
  },
};
</script>
