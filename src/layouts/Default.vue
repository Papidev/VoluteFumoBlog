<template>
  <NewLayout>
    <template v-slot:default>
      <Main>
        <template v-slot:side>
          <AboutCard />
        </template>
        <template v-slot:mainPanel>
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
        </template>
      </Main>
    </template>
  </NewLayout>
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
import HeaderPartial from "~/layouts/partials/HeaderWithNavbar.vue";
import FooterPartial from "~/layouts/partials/Footer.vue";
import ContentArea from "~/layouts/partials/ContentArea.vue";
import Post from "~/components/Post.vue";
// import AboutCard from "~/components/AboutCard.vue";
// import MainPartial from "~/layouts/partials/Main.vue";
import "typeface-dosis";

export default {
  components: {
    HeaderPartial,
    FooterPartial,
    ContentArea,
    Post,
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
