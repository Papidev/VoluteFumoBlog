<template>
  <div class="flex flex-col">
    <!-- HEADER -->
    <header-bar class="header-bar">
      <slot name="header" :nav="$static.metadata.navigation"></slot>
      <!-- <ul
        class="flex items-center list-none justify-left text-chica-light-yellow"
      >
        <li
          v-for="(element, index) in $static.metadata.navigation"
          :key="element.name"
          class="hover:text-chica-red"
          :class="{
            'mr-8':
              index != Object.keys($static.metadata.navigation).length - 1,
          }"
        >
          <a
            v-if="element.external"
            :href="element.link"
            target="_blank"
            rel="noopener noreferrer"
            >{{ element.name }}</a
          >
          <g-link v-else :to="element.link">
            <span>{{ element.name }}</span>
          </g-link>
        </li>
      </ul> -->
    </header-bar>

    <!-- CONTENT -->
    <slot name="main"></slot>

    <!-- FOOTER -->
    <footer-bar />
  </div>
</template>
<static-query>
  query {
    metadata {
      siteName
      siteDescription
      navigation: headerNavigation {
        
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
    img: {
      required: true,
      type: Object,
    },
  },
};
</script>
