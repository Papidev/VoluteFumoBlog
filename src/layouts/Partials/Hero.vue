<template>
  <div
    :style="cssProps"
    class="w-screen border-chica-dark border-t-2 border-b-2 text-chica-dark"
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
        "h-96 lg:h-104": this.isHome,
        "h-48 lg:h-64": !this.isHome,
      };
    },
    cssProps() {
      return {
        background: `url(${require(`@/assets/${this.img.name}`)}) no-repeat ${
          this.img.position
        }`,
      };
    },
  },
};
</script>
