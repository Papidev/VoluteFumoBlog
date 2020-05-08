<template>
  <div class="flex flex-col lg:flex-row px-4 py-4">
    <div class="lg:w-5/12">
      <g-link :to="record.path">
        <g-image
          :src="record.image"
          :alt="record.title"
          class="h-full w-full rounded-lg"
        />
      </g-link>
    </div>

    <div class="lg:w-7/12 lg:ml-6 flew flex-col">
      <g-link :to="record.path">
        <p
          class="uppercase text-xs font-normal text-chica-orange py-2 tracking-tight"
        >
          {{ record.category.title }}
        </p>
        <h2 class="text-2xl font-bold py-2">
          {{ record.title }}
        </h2>
        <p class="text-base text-justify h-48">
          {{ record.excerpt.substring(0, 499) }}
        </p>
      </g-link>
      <p class="py-2">
        <g-link :to="record.path" class="w-5/12">
          <a
            href="https://css-tricks.com"
            class="text-chica-green hover:text-indigo-500 text-sm font-bold"
            >Continua a leggere...</a
          >
        </g-link>
      </p>
      <div class="text-xs font-light italic uppercase py-3">
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
