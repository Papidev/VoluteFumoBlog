<template>
  <div :style="bgImg" class="flex items-start h-512">
    <div class="flex flex-col mt-4 text-chica-dark">
      <card-argument class="card-argument m-4" title="Giappone">
        <template #intro>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </template>
      </card-argument>
      <card-argument class="card-argument m-4" title="Letteratura" imgleft>
        <template #intro>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </template>
      </card-argument>
      <card-argument class="card-argument m-4" title="Astrologia">
        <template #intro>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </template>
      </card-argument>
    </div>
    <div class="flex flex-col items-center ml-4">
      <div class="flex items-center mt-56 ml-40 show">
        <div class="p-3">
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
          <h2
            class="font-handwritten text-2xl text-chica-orange tracking-widest"
          >
            {{ $page.metadata.siteDescription }}
          </h2>
        </div>
      </div>
      <div class="flex mt-1 w-40 p-2 bg-chica-light-yellowish show">
        <contact
          v-for="social in socials"
          :key="`-${social.id}`"
          :name="social.name"
          :link="social.link"
          class="m-1 rounded-lg w-10 h-10"
        />
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
        background: `url("../assets/img/smoke-resized.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "contain",
      };
    },
  },
};
</script>
