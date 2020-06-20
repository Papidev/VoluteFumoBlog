<template>
  <div class="font-semibold tracking-widest">
    <g-link :to="destination.path">
      <component :is="arrow" class="w-10 h-10 ml-3 mt-14 fill-current">
      </component>
      <h1 class="p-2 mt-2">
        {{ destination.label }}
      </h1>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    destination: {
      type: Object,
      required: true,
      validator: function (obj) {
        return (
          obj.hasOwnProperty("direction") &&
          obj.hasOwnProperty("label") &&
          obj.hasOwnProperty("path")
        );
      },
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
