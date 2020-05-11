<template>
  <div>
    <MainPartial>
      <template v-slot:side>
        <AboutCard />
      </template>
      <template v-slot:mainPanel>
        <slot />
      </template>
    </MainPartial>
  </div>
</template>
<page-query>
  query($page: Int) {
    entries: allBlog(perPage: 9, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          title
          excerpt
          image(width: 800)
          path
          timeToRead
          humanTime: created(format: "DD MMM YYYY")
          datetime: created
          category {
            id
            title
          }
          author {
            id
            name
            image(width: 64, height: 64, fit: inside)
            path
          }
        }
      }
    }
  }
</page-query>

<script>
import AboutCard from "~/components/AboutCard.vue";
import MainPartial from "~/layouts/partials/Main.vue";
import "typeface-dosis";

export default {
  components: {
    AboutCard,
    MainPartial,
  },
  props: {
    disableScroll: {
      type: Boolean,
      default: false,
    },
  },
  metaInfo: {
    bodyAttrs: {
      class: "m-0",
    },
  },
};
</script>
<style>
#app {
  font-family: "Titillium Web", sans-serif;
}
</style>
