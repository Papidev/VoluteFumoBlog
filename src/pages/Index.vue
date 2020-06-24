<template>
  <div :style="bgImg" class="flex items-start h-512">
    <div class="flex flex-col justify-center mt-10 text-chica-dark">
      <card-argument class="bg-chica-light-yellowish m-10" title="Giappone">
        <template #intro>
          <p class="text-justify text-base break-words">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </template>
      </card-argument>
      <card-argument
        class="bg-chica-light-yellowish m-10"
        title="Letteratura"
        imgleft
      >
        <template #intro>
          <p class="text-justify text-sm break-words">
            bbbb
          </p>
        </template>
      </card-argument>
      <card-argument class="bg-chica-light-yellowish m-10" title="Astrologia">
        <template #intro>
          <p class="text-justify text-sm break-words">
            ccccc
          </p>
        </template>
      </card-argument>
    </div>
    <div class="flex items-center mt-56 ml-40">
      <div class="ml-4 p-3">
        <g-image
          src="@/assets/img/Volute_logo.png"
          alt="Federica Giustiziero photo"
          class="w-32 h-32 rounded-full border-2 border-chica-orange"
        />
      </div>
      <div class="ml-14 p-6 w-144">
        <h1
          class="font-handwritten text-6xl text-chica-light-yellowish tracking-tight"
        >
          {{ $page.metadata.siteName }}
        </h1>
        <h2 class="font-handwritten text-2xl text-chica-orange tracking-widest">
          {{ $page.metadata.siteDescription }}
        </h2>
      </div>
    </div>
    <!-- <footer-bar class="" />  -->
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
  computed: {
    bgImg() {
      return {
        background: `url("../assets/img/smoke-resized.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "contain",
      };
    },
  },
};
</script>
