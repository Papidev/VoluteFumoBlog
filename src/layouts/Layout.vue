<template>
  <div class="flex flex-col">
    <Header />
    <Hero :isHome="isHome" :img="img">
      <slot name="hero"></slot>
    </Hero>
    <slot name="main"></slot>
    <Footer />
  </div>
</template>

<script>
import Header from "~/layouts/Partials/Header";
import Footer from "~/layouts/Partials/Footer";
import Hero from "~/layouts/Partials/Hero";

export default {
  components: {
    Header,
    Footer,
    Hero,
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
