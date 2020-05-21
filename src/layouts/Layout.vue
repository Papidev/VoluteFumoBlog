<template>
  <div class="flex flex-col relative">
    <header-bar />
    <hero :isHome="false" :img="img">
      <slot name="hero"></slot>
    </hero>
    <slot name="main"></slot>
    <footer-bar />
  </div>
</template>

<script>
import Header from "~/layouts/Partials/Header";
import Footer from "~/layouts/Partials/Footer";
import Hero from "~/layouts/Partials/Hero";

export default {
  components: {
    "header-bar": Header,
    "footer-bar": Footer,
    hero: Hero,
  },
  props: {
    isHome: {
      required: true,
      type: Boolean,
      default: false,
    },
    img: {
      required: true,
      type: Object,
    },
  },
};
</script>
