<template>
  <div class="bg-chica-light-orange">
    <header-bar class="header-bar" />

    <div class="flex justify-around">
      <page-navigator
        :destination="this.prevPage"
        class="text-chica-light-violet mt-16 mx-4"
      ></page-navigator>
      <post-content></post-content>
      <page-navigator
        :destination="this.nextPage"
        class="text-chica-light-violet mt-16 mx-4"
      ></page-navigator>
    </div>
    <footer-bar class="mt-8" />
  </div>
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
