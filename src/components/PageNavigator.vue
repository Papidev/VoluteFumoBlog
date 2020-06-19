<template>
  <div class="text-chica-dark w-112">
    <g-link :to="destination.path">
      <component :is="arrow" class="h-10 w-10 ml-3 mt-14 fill-current">
      </component>
      <!-- <arrowNav ></arrowNav> -->
    </g-link>
    <h1 class="p-2 mt-2">
      {{ destination.label }}
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    destination: {
      type: Object,
      required: true,
    },
  },
  computed: {
    arrow() {
      return () =>
        import(`../assets/svgs/${this.destination.direction}Arrow.svg`);
    },
  },
};
</script>
