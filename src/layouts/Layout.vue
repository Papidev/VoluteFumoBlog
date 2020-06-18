<template>
  <div class="flex flex-col relative">
    <!-- HEADER -->
    <header-bar />

    <!-- HERO -->
    <hero :img="img" class="hero-argument">
      <!-- filling hero slot with content of layout slot "hero" -->
      <template v-slot:hero>
        <slot name="hero"></slot>
      </template>
    </hero>

    <!-- CONTENT -->
    <slot name="main"></slot>

    <!-- FOOTER -->
    <footer-bar />
  </div>
</template>

<script>
import Header from "@/layouts/Partials/Header";
import Footer from "@/layouts/Partials/Footer";
import Hero from "@/layouts/Partials/Hero";

export default {
  components: {
    "header-bar": Header,
    "footer-bar": Footer,
    hero: Hero,
  },
  props: {
    img: {
      required: true,
      type: Object,
    },
  },
};
</script>
