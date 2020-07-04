<template>
  <div class="flex flex-col">
    <!-- HEADER -->
    <header-bar class="header-bar">
      <slot name="header" :navigation="$static.metadata.navigation"></slot>
    </header-bar>

    <!-- CONTENT -->
    <slot name="main"></slot>

    <!-- FOOTER -->
    <slot name="footer"></slot>
  </div>
</template>
<static-query>
  query {
    metadata {
      siteName
      siteDescription
      navigation: headerNavigation {
        id
        for
        links{
          name
          link
          external
        }
      }
      social {
        icon
        link
      }
    }
  }
</static-query>
<script>
import Header from "@/layouts/Partials/Header";
import Footer from "@/layouts/Partials/Footer";
import Hero from "@/layouts/Partials/Hero";

export default {
  components: {
    "header-bar": Header,
    "footer-bar": Footer,
    Hero,
  },
  props: {
    // img: {
    //   required: true,
    //   type: Object,
    // },
  },
};
</script>
