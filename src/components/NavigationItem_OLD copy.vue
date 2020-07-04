<template>
  <ul class="flex items-center list-none justify-left text-chica-light-yellow">
    <li>PORCU</li>
    <li
      v-for="(element, index) in (filteredNavigationDataLinks)"
      :key="element.name"
      class="hover:text-chica-red"
      :class="{
        'mr-8': index != Object.keys(filteredNavigationDataLinks).length - 1,
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
      default: [],
    },
    filters: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      navigationArray: this.navigationData,
      filteredNavigationDataLinks: [],
      filteredNavigationData: [],
    };
  },
  watch: {
    navigationArray: function (newQuestion, oldQuestion) {
      console.log("watcher navigationArray CAZZO");
      this.filteredNavigationData = this.navigationArray.filter((x) =>
        this.filters.includes(x.for)
      );
    },
    filteredNavigationData: function () {
      console.log("watcher filteredNavigationData CAZZO");
      this.filteredNavigationDataLinks = this.filteredNavigationData.map(
        (a) => a.links
      );
    },
  },
  computed: {
    // filteredNavigationData: function () {
    //   return this.navigationArray
    //     ? this.navigationArray.filter((x) => this.filters.includes(x.for))
    //     : [];
    // },
    // filteredNavigationDataLinks: function () {
    //   return this.filteredNavigationData
    //     ? this.filteredNavigationData.map((a) => a.links)
    //     : [];
    // },
  },
};
</script>
