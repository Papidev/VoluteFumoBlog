<template>
  <div>
    <HeaderPartial />
    <slot />
    <FooterPartial />
  </div>
</template>

<script>
import HeaderPartial from "~/layouts/partials/HeaderWithNavbar.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";

export default {
  components: {
    HeaderPartial,
    FooterPartial,
  },
};
</script>
