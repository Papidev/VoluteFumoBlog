<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Jappy from "../assets/svgs/jappy.svg";
export default {
  components: {
    Jappy,
  },
};
</script>
<static-query>
  query {
    metadata {
      siteName
      siteDescription
     
    }
  }
</static-query>
<style lang="scss" scoped>
.bgimage {
  background: url("../assets/people-walking-on-the-street-2506923.jpg")
    //Photo by Aleksandar Pasaric from Pexels
    no-repeat left center;
}
</style>
