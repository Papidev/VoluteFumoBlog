<template>
  <div class="flex p-6 " :class="{ 'no-border': !border }">
    <g-link :to="record.path" class="w-5/12  ">
      <g-image
        :src="record.image"
        :alt="record.title"
        class="rounded-lg object-cover w-full h-full"
      ></g-image>
    </g-link>
    <div class="ml-10 w-7/12  p-8 mr-10">
      <g-link :to="record.path">
        <p class="uppercase font-semibold text-blue-800 mt-3  py-2">
          {{ record.category.title }}
        </p>
        <h2 class="text-3xl font-bold py-2 ">
          {{ record.title }}
        </h2>
        <p class=" pt-3 w-5/6">{{ record.excerpt.substring(0, 699) }}</p>
      </g-link>
      <p class=" py-2 text-l font-bold">
        <g-link :to="record.path" class="w-5/12">
          <a href="https://css-tricks.com" class="text-blue-800"
            >Continua a leggere...</a
          >
        </g-link>
      </p>
      <div class="text-xs leading-none uppercase py-3 ">
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
      required: true
    },
    border: {
      type: Boolean,
      default: true
    }
  }
};
</script>
