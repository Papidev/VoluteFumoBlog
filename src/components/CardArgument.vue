<template>
  <card class="w-104 m-4 border-chica-pink border-2 p-4">
    <g-link to="/Japan/">
      <h1 class="tracking-wide font-bold text-lg text-chica-dark">
        {{ title }}
      </h1>
      <slot name="intro"></slot>

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
