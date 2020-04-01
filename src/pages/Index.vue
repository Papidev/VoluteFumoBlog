<template>
  <Layout>
    <div class="flex flex-col overflow-x-hidden mx-5 mt-5 md:mx-8">
      <Post
        v-for="edge in $page.entries.edges"
        :key="edge.node.id"
        :record="edge.node"
        class="mb-32"
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
    meta: [{ name: "author", content: "Federica Giustiziero" }]
  },
  components: {
    Post
  }
};
</script>
