<template>
  <div class="flex items-start" :class="reverse">
    <div class="flex flex-col p-3 w-1/2">
      <g-link :to="`/${this.title}/`">
        <h1
          class="text-2xl font-bold tracking-wide text-chica-orange text-opacity-85"
        >
          {{ title }}
        </h1>
        <div class="mt-1 overflow-hidden">
          <slot name="intro" class="text-justify text-base break-words"></slot>
        </div>
      </g-link>
    </div>
    <div class="self-center ml-6 py-2 pr-3 w-1/2">
      <g-image
        :src="`../assets/img/${this.title}.jpg`"
        class="object-cover h-48 rounded-lg"
      />
    </div>
  </div>
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
