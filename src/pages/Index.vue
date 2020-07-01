<template>
  <div :style="bgImg">
    <header-bar class="header-bar"></header-bar>
    <div class="flex">
      <div class="flex flex-col ml-8 my-5 text-chica-dark h-screen">
        <card-argument class="card-argument m-6" title="Giappone">
          <template #intro>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
          </template>
        </card-argument>
        <card-argument class="card-argument m-6" title="Letteratura" imgleft>
          <template #intro>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
          </template>
        </card-argument>
        <card-argument class="card-argument m-6" title="Astrologia">
          <template #intro>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
          </template>
        </card-argument>
      </div>

      <div class="flex flex-col items-center mt-40 ml-72">
        <div class="">
          <g-image
            src="@/assets/img/Volute_logo.png"
            alt="Federica Giustiziero photo"
            class="w-32 h-32 rounded-full border-2 border-chica-orange"
          />
        </div>

        <div class="flex flex-col p-6 w-144 -mt-2">
          <h1
            class="text-center font-handwritten text-6xl text-chica-light-yellow tracking-tight"
          >
            {{ $page.metadata.siteName }}
          </h1>
          <h2
            class="text-center font-handwritten text-3xl text-chica-orange tracking-widest mt-1"
          >
            {{ $page.metadata.siteDescription }}
          </h2>
        </div>
      </div>
    </div>
    <footer-bar class="mt-48">
      <div
        class="flex w-96 px-3 py-3 bg-chica-light-yellow items-center rounded"
      >
        <h1 class="text-chica-dark px-3">Volute di Fumo é anche su</h1>
        <contact
          v-for="social in socials"
          :key="`-${social.id}`"
          :name="social.name"
          :link="social.link"
          class="m-1 rounded-lg w-8 h-8"
        /></div
    ></footer-bar>
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
import { SOCIALS } from "../utility/constants.js";
import Contact from "@/components/Contact";
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
    Contact,
    // HollowDotsSpinner,
  },
  data() {
    return {
      img: {
        name: "incense2_tiny.png",
        position: "left bottom",
      },
      socials: SOCIALS,
    };
  },
  computed: {
    bgImg() {
      return {
        "background-image": `url("../assets/img/smoke-resized.jpg")`,
        "background-repeat": "no-repeat",
        "background-position": "center center",
        "background-attachment": "scroll",
        "background-size": "cover",
        "background-color": "#999",
      };
    },
  },
};
</script>
