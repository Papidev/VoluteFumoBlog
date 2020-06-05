<template>
  <!-- <a target="_blank" :href="link"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="svg.viewbox"
        class="m-2 h-8 w-8"
      >
        <title>${{ svg.title }}</title>
        <path :d="svg.d" :fill="svg.fillColor" />
      </svg>
    </a> -->
  <!-- <instagram class="w-20 h-20"></instagram>
    <facebook class="bg-gray-800 w-20 h-20"></facebook> -->
  <component :is="dynamicComponent"></component>
</template>
<script>
//import instagram from "../assets/svgs/instagram.svg";
// import Instagram from "../assets/svgs/Instagram.svg";
// import Facebook from "../assets/svgs/Facebook.svg";
export default {
  components: {
    // instagram: Instagram,
    // facebook: Facebook,
  },
  props: {
    name: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicComponent() {
      return () => import(`../assets/svgs/${this.name}.svg`);
    },
  },
};
</script>
