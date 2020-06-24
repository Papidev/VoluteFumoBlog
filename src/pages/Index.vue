<template>
  <div :style="bgImg" class="flex flex-col h-512">
    <div class="flex justify-center mt-104 text-chica-dark">
      <card-argument class="bg-chica-light-yellowish m-10" title="Giappone">
        <template #intro>
          <p class="text-justify text-base break-words">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </template>
      </card-argument>
      <card-argument class="bg-chica-light-yellowish m-10" title="Letteratura">
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
