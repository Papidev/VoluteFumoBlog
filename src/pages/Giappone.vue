<template>
  <layout :img="img">
    <template v-slot:hero>
      <!-- <div class="border-t-2 border-chica-light">
        <div class="border-b-8 border-chica-purple"> -->
      <!-- <div
        class="bgimage w-screen pt-12 text-chica-dark h-48 lg:h-64 border-chica-dark border-b-2"
      > -->
      <div
        class="flex items-center justify-around pl-8 pr-8 w-116 mt-12 rounded-r-lg bg-chica-yellowish italic border-chica-dark border-opacity-95 border-r-8 border-t-3 border-b-3 bg-opacity-80"
      >
        <div class="p-2">
          <h1
            class="font-handwritten text-4xl font-bold tracking-wider text-chica-dark"
          >
            {{ $page.metadata.siteName }}
          </h1>
          <h2 class="text-base text-chica-purple italic -mt-2">
            Japan Edition
          </h2>
        </div>

        <div>
          <Jappy class="h-12 w-12 fill-current text-chica-dark mb-1"></Jappy>
        </div>
      </div>
      <!-- </div> -->
      <!-- </div>
      </div> -->
    </template>

    <template v-slot:main>
      <sidebar-main>
        <template v-slot:side>
          <CardAbout />
        </template>
        <template v-slot:mainPanel>
          <div
            class="p-5 w-full bg-chica-yellowish border-l-5 border-chica-purple"
          >
            <h1
              class="pt-4 mx-8 mb-5 text-2xl font-semibold text-chica-dark border-b-2 border-chica-orange"
            >
              Giappone
            </h1>
            <div class="flex flex-col space-y-10 mx-3">
              <Post
                v-for="edge in $page.entries.edges"
                :key="edge.node.id"
                :record="edge.node"
              />
            </div>
          </div>
        </template>
      </sidebar-main>
    </template>
  </layout>
</template>
<page-query>
  query($page: Int) {
    metadata {
      siteName
      siteDescription
      navigation: headerNavigation {
        name
        link
        external
      }
      social {
        icon
        link
      }
    }
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
import SidebarMain from "@/layouts/Partials/SidebarMain.vue";
import CardAbout from "@/components/CardAbout.vue";
import Post from "@/components/Post.vue";
export default {
  metaInfo: {
    title: "Volute di Fumo Giappone",
    meta: [{ name: "author", content: "Federica Giustiziero" }],
  },
  components: {
    SidebarMain,
    CardAbout,
    Post,
    Jappy,
  },
  data() {
    return {
      img: {
        name: "people-walking-street.jpg",
        position: "center center",
      },
    };
  },
};
</script>
