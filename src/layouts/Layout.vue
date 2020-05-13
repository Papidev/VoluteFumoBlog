<template>
  <div>
    <HeaderPartial />
    <Hero>
      <slot name="hero"></slot>
    </Hero>
    <slot name="main"></slot>
    <FooterPartial />
  </div>
</template>

<script>
import HeaderPartial from "~/layouts/partials/Header";
import FooterPartial from "~/layouts/partials/Footer";
import Hero from "~/layouts/partials/Hero";

export default {
  components: {
    HeaderPartial,
    FooterPartial,
    Hero,
  },
};
</script>
