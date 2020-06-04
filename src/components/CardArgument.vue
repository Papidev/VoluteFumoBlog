<template>
  <card class="w-104 p-4 border-chica-pink border-2">
    <g-link :to="`/${this.title}/`">
      <h1 class="text-lg text-chica-dark tracking-wide font-bold">
        {{ title }}
      </h1>
      <div class="h-20">
        <slot name="intro"></slot>
      </div>
      <g-image
        :src="`../assets/img/${this.title}.jpg`"
        class="object-cover rounded-lg"
      />
    </g-link>
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
};
</script>
