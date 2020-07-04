<template>
  <ul class="flex items-center list-none justify-left text-chica-light-yellow">
    <li
      v-for="(element, index) in (filteredNavLinks)"
      :key="element.name"
      class="hover:text-chica-red"
      :class="{
        'mr-8': index != Object.keys(filteredNavLinks).length - 1,
      }"
    >
      <a
        v-if="element.external"
        :href="element.link"
        target="_blank"
        rel="noopener noreferrer"
        >{{ element.name }}</a
      >
      <g-link v-else :to="element.link">
        <span>{{ element.name }}</span>
      </g-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    navigationData: {
      type: Array,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      // nav: this.navigationData,
    };
  },
  computed: {
    extendedFilters() {
      return [...this.filters, "ALL"];
    },

    sortedNavigation() {
      return this.navigationData.sort((a, b) => (a.id < b.id ? 1 : -1));
    },
    filteredNavigation: function () {
      return this.sortedNavigation.filter((x) =>
        this.extendedFilters.includes(x.for)
      );
    },
    filteredNavLinks: function () {
      return this.filteredNavigation
        .map((a) => {
          return a.links;
        })
        .flat();
    },
  },
};
</script>
