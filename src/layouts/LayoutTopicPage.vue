<template>
  <layout :img="img">
    <template v-slot:header="{ nav }">
      <slot name="header" :navigation="nav"></slot>
    </template>

    <template #main>
      <hero :img="img" class="hero-argument">
        <!-- filling hero slot with content of layout slot "hero" -->
        <template v-slot:hero>
          <slot name="hero"></slot>
        </template>
      </hero>
      <slot name="main"></slot>
    </template>
  </layout>
</template>

<script>
import Hero from "@/layouts/Partials/Hero";

export default {
  components: {
    Hero,
  },
  data() {
    return {};
  },
  props: {
    img: {
      required: true,
      type: Object,
    },
  },
};
</script>
