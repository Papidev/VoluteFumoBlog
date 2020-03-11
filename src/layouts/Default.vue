<template>
  <div id="app" dark>
    <NavbarPartial :disableScroll="disableScroll"></NavbarPartial>
    <HeaderPartial v-if="hideHeader != true"></HeaderPartial>
    <Sidebar>
      <template v-slot:sidebarslot>
        <AboutCard></AboutCard>
      </template>
      <template v-slot:mainpanelslot>
        <slot/>   
      </template>
    </Sidebar>
    <FooterPartial></FooterPartial>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderPartial from "~/layouts/partials/HeaderWithNavbar.vue";
import NavbarPartial from "~/layouts/partials/Navbar.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import AboutCard from "~/components/AboutCard.vue";
import Sidebar from "~/components/Sidebar.vue";

export default {
  props: {
    hideHeader: {
      type: Boolean,
      default: false
    },
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
    Sidebar
  },

  metaInfo: {
    bodyAttrs: {
      class: "m-0"
    }
  }
};
</script>
