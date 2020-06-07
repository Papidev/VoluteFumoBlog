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
        <p
          class="uppercase text-sm font-medium text-chica-orange py-2 tracking-wide"
        >
          {{ record.category.title }}
        </p>
        <h2 class="text-3xl font-bold py-2 text-chica-dark">
          {{ record.title }}
        </h2>
        <p
          class="text-lg text-justify h-48 pr-16 text-chica-dark overflow-hidden"
        >
          {{ record.excerpt.substring(0, 499) }}
        </p>
        <a
          class="text-chica-green hover:text-indigo-500 text-base font-bold tracking-widest italic"
          >Continua a leggere...</a
        >
      </g-link>

      <div
        class="text-xs font-normal uppercase py-2 tracking-widest text-chica-dark mt-1"
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
