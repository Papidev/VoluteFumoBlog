<template>
  <div class="flex items-start">
    <!-- IMMAGINE -->

    <div class="ml-10">
      <g-link :to="record.path">
        <g-image
          :src="record.image"
          :alt="record.title"
          class="rounded-lg w-56 h-56"
        />
      </g-link>
    </div>

    <!-- TESTO -->

    <div class="flew flex-col w-192 ml-14">
      <g-link :to="record.path">
        <h2 class="postprev-title">
          {{ record.title }}
        </h2>
        <p class="postprev-excerpt">
          {{ record.excerpt.substring(0, 150) }}
        </p>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {
      type: Object,
      required: true,
    },
    // border: {
    //   type: Boolean,
    //   default: true,
    // },
  },
};
</script>
