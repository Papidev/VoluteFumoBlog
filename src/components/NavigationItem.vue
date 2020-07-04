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
    },
    filters: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // navigationDat: this.navigationData,
      // filteredNavigationDataLinks: [],
      // filteredNavigationData: [],
    };
  },
  // watch: {
  //   filteredNavigationData: function () {
  //     console.log("watcher filteredNavigationData CAZZO");
  //     this.filteredNavigationDataLinks = this.filteredNavigationData.map(
  //       (a) => a.links
  //     );
  //   },
  //   navigationDat: function () {
  //     console.log("watcher navigationData CAZZO");
  //     this.filteredNavigationData = this.navigationData.filter((x) =>
  //       this.filters.includes(x.for)
  //     );
  //   },
  // },
  computed: {
    // filteredNavigationData: function () {
    //   if (this.navigationData) console.dir(this.navigationData);
    //   return this.navigationData
    //     ? this.navigationData.filter((x) => this.filters.includes(x.for))
    //     : [];
    // },
    filteredNavigationDataLinks: function () {
      return [
        {
          name: "About",
          link: "/about",
          external: false,
        },
      ];
      // return this.filteredNavigationData
      //   ? this.filteredNavigationData.map((a) => a.links)
      //   : [];
    },
  },
};
</script>
