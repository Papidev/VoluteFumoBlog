<template>
  <div>
    <MainPartial>
      <template v-slot:side>
        <AboutCard />
      </template>
      <template v-slot:mainPanel>
        <slot />
      </template>
    </MainPartial>
  </div>
</template>

<script>
import AboutCard from "~/components/AboutCard.vue";
import MainPartial from "~/layouts/partials/Main.vue";
import "typeface-dosis";

export default {
  components: {
    AboutCard,
    MainPartial,
  },
  props: {
    disableScroll: {
      type: Boolean,
      default: false,
    },
  },
  metaInfo: {
    bodyAttrs: {
      class: "m-0",
    },
  },
};
</script>
<style>
#app {
  font-family: "Titillium Web", sans-serif;
}
</style>
