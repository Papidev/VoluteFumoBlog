<template>
  <Layout :hide-header="true" :disable-scroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden pt-24">
      <div class="mx-4 sm:mx-0">
        <h1 class="pb-0 mb-0 text-5xl font-medium">
          {{ $page.category.title }}
        </h1>
        <p class="text-gray-700 text-xl">
          A collection of
          <span class="self-center"
            >{{ $page.category.belongsTo.totalCount }} {{ postLabel }}</span
          >
        </p>

        <div class="pt-8 border-b"></div>
      </div>

      <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
        <Post
          v-for="edge in $page.category.belongsTo.edges"
          :key="edge.node.id"
          :record="edge.node"
        />
      </div>

      <div class="pagination flex justify-center mb-8">
        <Pagination
          v-if="$page.category.belongsTo.pageInfo.totalPages > 1"
          :base-url="$page.category.path"
          :current-page="$page.category.belongsTo.pageInfo.currentPage"
          :total-pages="$page.category.belongsTo.pageInfo.totalPages"
          :max-visible-buttons="5"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!, $page: Int) {
    category(id: $id) {
      title
      path
      belongsTo(perPage: 2, page: $page) @paginate {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Blog {
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
    }
  }
</page-query>

<script>
import Post from "~/components/Post.vue";
import Pagination from "~/components/Pagination.vue";

export default {
  components: {
    Pagination,
    Post
  },
  computed: {
    postLabel: function() {
      var pluralize = require("pluralize");
      return pluralize("post", this.$page.category.belongsTo.totalCount);
    }
  },
  metaInfo() {
    return {
      title: this.$page.category.title
    };
  }
};
</script>
