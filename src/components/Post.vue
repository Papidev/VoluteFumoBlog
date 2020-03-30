<template>
  <div class="flex p-4 mb-16" :class="{ 'no-border': !border }">
    <g-link :to="record.path" class="w-5/12">
      <g-image
        :src="record.image"
        :alt="record.title"
        class="rounded-lg object-cover"
      ></g-image>
    </g-link>
    <div class="ml-5 w-7/12">
      <g-link :to="record.path">
        <p class="uppercase font-medium text-xs text-blue-800 mt-3">
          {{ record.category.title }}
        </p>
        <h2 class="text-2xl mt-0">
          {{ record.title }}
        </h2>
        <p class="">{{ record.excerpt }}</p>
      </g-link>
      <div class="text-xs leading-none uppercase mt-4">
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
