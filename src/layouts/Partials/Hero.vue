<template>
  <div :style="bgImgStyle" class="" :class="classes">
    <slot name="hero"></slot>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      required: false,
      type: String,
      default: "",
    },
    img: {
      required: true,
      type: Object,
    },
  },
  computed: {
    bgImgStyle() {
      return {
        "background-image": `url(${require(`@/assets/img/${this.img.name}`)})`,
        "background-repeat": "no-repeat",
        "background-position": this.img.position,
      };
    },
  },
};
</script>
