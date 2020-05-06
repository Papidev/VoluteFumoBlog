<template>
  <Layout>
    <h1
      class="mx-3 mb-5 text-2xl font-semibold text-chica-dark dashed-b-border p-3"
    >
      I miei Post
    </h1>
    <div class="flex flex-col space-y-10 mx-3">
      <Post
        v-for="edge in $page.entries.edges"
        :key="edge.node.id"
        :record="edge.node"
      />
    </div>
  </Layout>
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
import Post from "~/components/Post.vue";

export default {
  metaInfo: {
    title: "Volute di Fumo",
    meta: [{ name: "author", content: "Federica Giustiziero" }],
  },
  components: {
    Post,
  },
};
</script>
