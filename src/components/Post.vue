<template>
  <div class="flex flex-col lg:flex-row mb-24 bg-orange-500 px-10 py-4">
    <div class="lg:w-5/12 py-4 shadow-2xl bg-red-600">
      <g-link :to="record.path">
        <g-image
          :src="record.image"
          :alt="record.title"
          class="rounded-lg object-cover"
        />
      </g-link>
    </div>

    <div class="lg:w-7/12 lg:ml-6 bg-red-600 flew flex-col">
      <g-link :to="record.path">
        <p
          class="uppercase text-xs font-normal text-orange-700 py-2 bg-gray-800"
        >
          {{ record.category.title }}
        </p>
        <h2 class="text-2xl font-bold py-2 bg-gray-700">
          {{ record.title }}
        </h2>
        <p class="text-base text-justify bg-gray-600 h-64">
          {{ record.excerpt.substring(0, 699) }}
        </p>
      </g-link>
      <p class="py-2 bg-gray-500">
        <g-link :to="record.path" class="w-5/12">
          <a
            href="https://css-tricks.com"
            class="text-indigo-700 hover:text-indigo-500 text-sm font-bold"
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
