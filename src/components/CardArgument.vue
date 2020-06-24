<template>
  <card class="w-130 border-chica-dark border-3 rounded-lg">
    <g-link :to="`/${this.title}/`">
      <div class="flex items-start">
        <div class="flex flex-col ml-3 mr-6 my-3 p-1">
          <h1 class="text-xl text-chica-dark tracking-wide font-bold">
            {{ title }}
          </h1>
          <div class="h-20 mt-1 p-2 overflow-hidden">
            <slot name="intro"></slot>
          </div>
        </div>
        <div class="flex items-center my-3 mr-3 w-256">
          <g-image
            :src="`../assets/img/${this.title}.jpg`"
            class="object-cover rounded-lg"
          />
        </div>
      </div>
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
