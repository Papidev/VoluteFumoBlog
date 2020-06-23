<template>
  <div class="flex flex-col">
    <!-- <hollow-dots-spinner
      :animation-duration="2500"
      :rhombus-size="15"
      :color="'#ff1d5e'"
      class="m-6"
    /> -->
    <header-bar class="header-bar" />
    <hero :img="img" class="hero-home">
      <template v-slot:hero>
        <div class="flex mt-24 items-center">
          <div class="ml-32 p-3">
            <g-image
              src="@/assets/img/Volute_logo.png"
              alt="Federica Giustiziero photo"
              class="h-28 w-28 rounded-full border-2 border-chica-orange"
            />
          </div>
          <div class="ml-12 p-2">
            <h1
              class="font-handwritten text-6xl text-chica-light-yellowish tracking-tight"
            >
              {{ $page.metadata.siteName }}
            </h1>
            <h2
              class="font-handwritten text-2xl text-chica-orange tracking-widest w-96"
            >
              {{ $page.metadata.siteDescription }}
            </h2>
          </div>
        </div>
      </template>
    </hero>

    <div class="bg-chica-light-pinkish">
      <div class="flex mt-2 text-chica-dark">
        <card-argument
          class="bg-chica-light-yellowish flex-1 m-4 -mt-40"
          title="Giappone"
        >
          <template #intro>
            <p class="text-justify text-base break-words">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
          </template>
        </card-argument>
        <card-argument
          class="bg-chica-light-yellowish flex-1 m-4 -mt-40"
          title="Letteratura"
        >
          <template #intro>
            <p class="text-justify text-sm break-words">
              bbbb
            </p>
          </template>
        </card-argument>
        <card-argument
          class="bg-chica-light-yellowish flex-1 m-4 -mt-40"
          title="Astrologia"
        >
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
// import HollowDotsSpinner from "epic-spinners/src/components/lib/HollowDotsSpinner";

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
    // HollowDotsSpinner,
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
