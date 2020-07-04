<template>
  <layout :style="bgImg" isHome>
    <template v-slot:header="{ navigation }">
      <navigation-list
        :navigationData="navigation"
        :filters="['HOME']"
      ></navigation-list>
    </template>

    <template v-slot:main>
      <div class="flex">
        <div class="flex flex-col ml-8 my-5 text-chica-dark h-screen">
          <card-argument class="card-argument m-6" title="Giappone">
            <template #intro>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </template>
          </card-argument>
          <card-argument class="card-argument m-6" title="Letteratura" imgleft>
            <template #intro>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </template>
          </card-argument>
          <card-argument class="card-argument m-6" title="Astrologia">
            <template #intro>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
            </template>
          </card-argument>
        </div>

        <div class="flex flex-col items-center mt-40 ml-72">
          <div class="">
            <g-image
              src="@/assets/img/Volute_logo.png"
              alt="Federica Giustiziero photo"
              class="w-32 h-32 rounded-full border-2 border-chica-red"
            />
          </div>

          <div class="flex flex-col p-6 w-144 -mt-2">
            <h1
              class="text-center font-handwritten text-6xl text-chica-light-yellow tracking-tight"
            >
              {{ $page.metadata.siteName }}
            </h1>
            <h2
              class="text-center font-handwritten text-3xl text-chica-red tracking-widest mt-1"
            >
              {{ $page.metadata.siteDescription }}
            </h2>
          </div>
        </div>
      </div>
    </template>

    <!-- <footer-bar class="mt-48">
        </footer-bar> -->
  </layout>
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

import Hero from "@/layouts/Partials/Hero";

import NavigationItemList from "@/components/NavigationItemList";
// import HollowDotsSpinner from "epic-spinners/src/components/lib/HollowDotsSpinner";

export default {
  // metaInfo: {
  //   title: "Volute di Fumo",
  //   meta: [{ name: "author", content: "Federica Giustiziero" }],
  // },
  components: {
    "card-argument": CardArgument,
    "header-bar": Header,

    hero: Hero,

    "navigation-list": NavigationItemList,
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
