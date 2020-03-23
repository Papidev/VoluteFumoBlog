<template>
  <div id="app">
    <NavbarPartial :disableScroll="disableScroll"></NavbarPartial>
    <HeaderPartial></HeaderPartial>
    <MainPartial>
      <template v-slot:side>
        <AboutCard></AboutCard>
      </template>
      <template v-slot:mainPanel>
        <slot />
      </template>
    </MainPartial>

    <FooterPartial></FooterPartial>
  </div>
</template>



<script>
import HeaderPartial from "~/layouts/partials/HeaderWithNavbar.vue";
import NavbarPartial from "~/layouts/partials/Navbar.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import AboutCard from "~/components/AboutCard.vue";
import MainPartial from "~/layouts/partials/Main.vue";

export default {
  props: {
    disableScroll: {
      type: Boolean,
      default: false
    }
  },
  components: {
    HeaderPartial,
    NavbarPartial,
    FooterPartial,
    AboutCard,
    MainPartial
  },

  metaInfo: {
    bodyAttrs: {
      class: "m-0"
    }
  }
};
</script>

