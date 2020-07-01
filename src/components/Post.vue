<template>
  <div class="flex flex-col lg:flex-row pl-8 pr-20 py-6 h-104">
    <!-- IMMAGINE -->
    <div class="lg:w-5/12">
      <g-link :to="record.path">
        <g-image
          :src="record.image"
          :alt="record.title"
          class="h-full w-full rounded-lg"
        />
      </g-link>
    </div>

    <!-- TESTO -->
    <div class="lg:w-7/12 lg:ml-14 flew flex-col">
      <g-link :to="record.path">
        <p class="post-tag">
          {{ record.category.title }}
        </p>
        <h2 class="post-title">
          {{ record.title }}
        </h2>
        <p class="post-thumb-excerpt">
          {{ record.excerpt.substring(0, 499) }}
        </p>
        <div class="pt-3">
          <a
            class="text-chica-dark-green text-base font-bold tracking-widest italic"
            >Continua ...</a
          >
        </div>
      </g-link>

      <div
        class="text-xs font-normal uppercase py-2 tracking-widest text-chica-dark mt-5"
      >
        <time :datetime="record.datetime">{{ record.humanTime }}</time>
      </div>
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
