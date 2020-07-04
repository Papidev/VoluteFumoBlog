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
      <footer-bar> </footer-bar>
    </template>
  </layout>
</template>

<script>
import Hero from "@/layouts/Partials/Hero";
import Footer from "@/layouts/Partials/Footer";

export default {
  components: {
    Hero,
    "footer-bar": Footer,
  },
  data() {
    return {};
  },
  props: {
    img: {
      required: true,
      type: Object,
    },
  },
};
</script>
