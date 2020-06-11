<template>
  <div class="flex flex-col relative">
    <!-- HEADEr -->
    <header-bar />

    <!-- HERO -->

    <hero
      :img="img"
      classes="h-48 lg:h-64 bg-cover border-t-4 border-b-5 border-chica-dark"
    >
      <template v-slot:hero>
        <slot name="hero"></slot>
      </template>
    </hero>

    <slot name="main"></slot>
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
