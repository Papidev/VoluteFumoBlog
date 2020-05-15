<template>
  <div>
    <div
      :style="cssProps"
      class="w-screen border-chica-dark border-b-2 text-chica-dark"
      :class="height"
    >
      <slot></slot>
    </div>
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
    imgName: {
      required: true,
      type: String,
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
        background: `url(${require(`@/assets/${this.imgName}`)}) no-repeat left center`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.bgimage {
  // background: url("../../assets/people-walking-on-the-street-2506923.jpg");
  //Photo by Aleksandar Pasaric from Pexels
  // no-repeat left center;
}
</style>
