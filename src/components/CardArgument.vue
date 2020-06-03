<template>
  <card class="w-104 m-4 p-4 border-chica-pink border-2">
    <g-link :to="`/${this.title}/`">
      <h1 class="tracking-wide font-bold text-lg text-chica-dark">
        {{ title }}
      </h1>
      <div class="h-20"><slot name="intro"></slot></div>

      <g-image src="../assets/japan.jpg" class="object-cover m-2 rounded-lg"
    /></g-link>
  </card>
</template>
<script>
import Card from "./Card";

export default {
  components: {
    Card,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  //   data() {
  //     return {

  //   },
  // };
};
</script>
