<template>
  <g-link :to="`/${this.title}/`">
    <div class="flex items-start" :class="reverse">
      <div class="flex flex-col p-3">
        <h1
          class="text-2xl font-bold tracking-wide text-chica-orange text-opacity-85"
        >
          {{ title }}
        </h1>
        <div class="mt-1 overflow-hidden">
          <slot name="intro"></slot>
        </div>
      </div>
      <div class="ml-6 py-3 pr-3 w-256">
        <g-image
          :src="`../assets/img/${this.title}.jpg`"
          class="object-cover rounded-lg"
        />
      </div>
    </div>
  </g-link>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    imgleft: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    reverse() {
      return this.imgleft ? "flex-row-reverse" : "";
    },
  },
};
</script>
