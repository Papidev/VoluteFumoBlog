<template>
  <div
    :style="cssProps"
    class="border-chica-dark border-t-2 border-b-2 text-chica-dark bg-cover"
    :class="height"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    isHome: {
      required: true,
      type: Boolean,
      default: false,
    },
    img: {
      required: true,
      type: Object,
    },
  },
  computed: {
    height() {
      return {
        "h-full": this.isHome,
        "h-48 lg:h-64": !this.isHome,
      };
    },
    cssProps() {
      return {
        "background-image": `url(${require(`@/assets/img/${this.img.name}`)})`,
        "background-repeat": "no-repeat",
        "background-position": this.img.position,
      };
    },
  },
};
</script>
