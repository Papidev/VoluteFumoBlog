<template>
  <layout class="bg-chica-light-orange">
    <template v-slot:header="{ navigation }">
      <slot name="header" :navigation="navigation"></slot>
    </template>

    <template #main>
      <div class="flex justify-around mb-8">
        <page-navigator
          :destination="prevPage"
          class="text-chica-light-violet mt-16 mx-4"
        ></page-navigator>
        <post-content></post-content>
        <page-navigator
          :destination="nextPage"
          class="text-chica-light-violet mt-16 mx-4"
        ></page-navigator>
      </div>
    </template>
  </layout>
</template>
<script>
import PostContent from "@/layouts/Partials/PostContent";
import Header from "@/layouts/Partials/Header";
import Footer from "@/layouts/Partials/Footer";
import PageNavigator from "@/components/PageNavigator";
export default {
  components: {
    PostContent,
    "header-bar": Header,
    "footer-bar": Footer,

    PageNavigator,
  },

  computed: {
    prevPage() {
      return {
        direction: "back",
        ...(this.$page.previous
          ? { path: this.$page.previous.path, label: "Post Precedente" }
          : { path: this.$router.go(-1), label: "Indietro" }),
      };
    },

    nextPage() {
      return {
        direction: "forward",
        ...(this.$page.next
          ? { path: this.$page.next.path, label: "Post Successivo" }
          : { path: "/", label: "HomePage" }),
      };
    },
  },
};
</script>
