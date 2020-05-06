<template>
  <div id="app">
    <HeaderPartial />
    <MainPartial>
      <template v-slot:side>
        <AboutCard />
      </template>
      <template v-slot:mainPanel>
        <slot />
      </template>
    </MainPartial>

    <FooterPartial />
  </div>
</template>

<script>
import HeaderPartial from "~/layouts/partials/HeaderWithNavbar.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import AboutCard from "~/components/AboutCard.vue";
import MainPartial from "~/layouts/partials/Main.vue";
import "typeface-dosis";

export default {
  components: {
    HeaderPartial,
    FooterPartial,
    AboutCard,
    MainPartial,
  },
  props: {
    disableScroll: {
      type: Boolean,
      default: false,
    },
  },
  metaInfo: {
    bodyAttrs: {
      class: "m-0",
    },
  },
};
</script>
<style>
#app {
  font-family: "Titillium Web", sans-serif;
}
</style>
