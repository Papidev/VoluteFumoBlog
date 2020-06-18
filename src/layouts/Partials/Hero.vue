<template>
  <div :style="bgImgStyle">
    <slot name="hero"></slot>
  </div>
</template>

<script>
export default {
  props: {
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
