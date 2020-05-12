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
import HeaderPartial from "~/layouts/partials/HeaderWithNavbar.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import Hero from "~/components/Hero";

export default {
  components: {
    HeaderPartial,
    FooterPartial,
    Hero,
  },
};
</script>
