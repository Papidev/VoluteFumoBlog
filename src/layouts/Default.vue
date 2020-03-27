<template>
  <div id="app">
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
// import NavbarPartial from "~/layouts/partials/Navbar.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import AboutCard from "~/components/AboutCard.vue";
import MainPartial from "~/layouts/partials/Main.vue";

export default {
  components: {
    HeaderPartial,
    // NavbarPartial,
    FooterPartial,
    AboutCard,
    MainPartial
  },
  props: {
    disableScroll: {
      type: Boolean,
      default: false
    }
  },
  metaInfo: {
    bodyAttrs: {
      class: "m-0"
    }
  }
};
</script>
