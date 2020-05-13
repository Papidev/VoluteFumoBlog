<template>
  <div>
    <div
      class="bgimage w-screen h-48 lg:h-64 border-chica-dark border-b-2 text-chica-dark"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script></script>

<style lang="scss" scoped>
.bgimage {
  background: url("../../assets/people-walking-on-the-street-2506923.jpg")
    //Photo by Aleksandar Pasaric from Pexels
    no-repeat left center;
}
</style>
