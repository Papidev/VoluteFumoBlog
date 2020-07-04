<template>
  <div class="flex flex-col">
    <!-- HEADER -->
    <header-bar class="header-bar">
      <slot name="header" :navigation="$static.metadata.navigation"></slot>
    </header-bar>

    <!-- CONTENT -->
    <slot name="main"></slot>

    <!-- FOOTER -->
    <footer-bar :class="classFooter">
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
        />
      </div>
    </footer-bar>
  </div>
</template>
<static-query>
  query {
    metadata {
      siteName
      siteDescription
      navigation: headerNavigation {
        id
        for
        links{
          name
          link
          external
        }
      }
      social {
        icon
        link
      }
    }
  }
</static-query>
<script>
import Header from "@/layouts/Partials/Header";
import Footer from "@/layouts/Partials/Footer";
import Hero from "@/layouts/Partials/Hero";
import { SOCIALS } from "../utility/constants.js";
import Contact from "@/components/Contact";

export default {
  components: {
    "header-bar": Header,
    "footer-bar": Footer,
    Hero,
    Contact,
  },
  props: {
    isHome: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      socials: SOCIALS,
    };
  },
  computed: {
    classFooter: function () {
      return {
        "mt-48": this.isHome,
      };
    },
  },
};
</script>
