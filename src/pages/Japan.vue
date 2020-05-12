<template>
  <NewLayout>
    <template v-slot:hero>
      <div
        class="bgimage w-screen pt-12 text-chica-dark h-48 lg:h-64 border-chica-dark border-b-2"
      >
        <div
          class="flex items-center mt-6 pl-6 pr-3 w-104 inline-block rounded-r-lg bg-chica-w italic border-chica-pink border-b-0 border-r-8 border-t-0"
        >
          <div>
            <Jappy class="h-12 w-12 fill-current text-chica-dark"></Jappy>
            <!-- <font-awesome
              :icon="['fas', 'ghost']"
              class="mb-1 mr-4"
            ></font-awesome> 
              -->
          </div>

          <div class="text-3xl md:text-5xl ml-3">
            <h2 class="pt-2 font-handwritten">
              <!--  {{ $static.metadata.siteName }} -->
            </h2>
          </div>

          <!-- <div class="text-white-600 text-xl">
          {{ $static.metadata.siteDescription }}
        </div> -->
        </div>
      </div>
    </template>
    <template v-slot:main>
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
import Jappy from "../assets/svgs/jappy.svg";
import Main from "~/layouts/partials/Main.vue";
import AboutCard from "~/components/AboutCard.vue";
import Post from "~/components/Post.vue";
export default {
  metaInfo: {
    title: "Volute di Fumo Giappone",
    meta: [{ name: "author", content: "Federica Giustiziero" }],
  },
  components: {
    Main,
    AboutCard,
    Post,
    Jappy,
  },
};
</script>
