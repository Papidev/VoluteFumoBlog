<template>
  <div
    class="flex flex-post px-0 sm:px-4 pb-8 mb-8"
    :class="{ 'no-border': !border }"
  >
    <g-link :to="record.path" class="post-card-image-link">
      <g-image
        :src="record.image"
        :alt="record.title"
        class="post-card-image"
      ></g-image>
    </g-link>

    <div class="post-card-content">
      <g-link :to="record.path">
        <p class="uppercase font-medium text-xs text-blue-700 mt-3">
          {{ record.category.title }}
        </p>
        <h2 class="post-card-title mt-0">
          {{ record.title }}
        </h2>
        <p class="post-card-excerpt">{{ record.excerpt }}</p>
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

<style></style>
