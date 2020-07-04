<template>
  <layout :img="img">
    <template v-slot:header="{ navigation }">
      <slot name="header" :navigation="navigation"></slot>
    </template>

    <template #main>
      <hero :img="img" class="hero-argument">
        <!-- filling hero slot with content of layout slot "hero" -->
        <template v-slot:hero>
          <slot name="hero"></slot>
        </template>
      </hero>
      <slot name="main"></slot>
    </template>

    <template v-slot:footer>
      <footer-bar>
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
    </template>
  </layout>
</template>

<script>
import Hero from "@/layouts/Partials/Hero";
import Footer from "@/layouts/Partials/Footer";
import { SOCIALS } from "../utility/constants.js";
import Contact from "@/components/Contact";
export default {
  components: {
    Hero,
    "footer-bar": Footer,
    Contact,
  },
  data() {
    return {
      socials: SOCIALS,
    };
  },
  props: {
    img: {
      required: true,
      type: Object,
    },
  },
};
</script>
