<template>
  <div class="flex flex-col lg:flex-row p-12 mb-24">
    <div class="lg:w-5/12 h-84 shadow-2xl">
      <g-link :to="record.path">
        <g-image
          :src="record.image"
          :alt="record.title"
          class="rounded-lg object-cover w-full h-full"
        />
      </g-link>
    </div>
    <div class="lg:ml-12 lg:w-7/12">
      <g-link :to="record.path">
        <p class="uppercase font-medium text-orange-700 mt-3 py-2">
          {{ record.category.title }}
        </p>
        <h2 class="text-3xl font-bold py-2">
          {{ record.title }}
        </h2>
        <p class="p-3 text-xl text-justify">
          {{ record.excerpt.substring(0, 699) }}
        </p>
      </g-link>
      <p class="py-2">
        <g-link :to="record.path" class="w-5/12">
          <a
            href="https://css-tricks.com"
            class="text-indigo-700 hover:text-indigo-500 text-lg font-bold"
            >Continua a leggere...</a
          >
        </g-link>
      </p>
      <div class="text-base font-light italic uppercase py-3">
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
