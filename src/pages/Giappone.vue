<template>
  <layout :img="img">
    <template v-slot:hero>
      <div
        class="border-t-4 border-chica-dark-green flex items-center justify-around pl-8 pr-8 w-116 mt-16 rounded-r-lg bg-chica-light-yellowish italic border-chica-dark border-opacity-95 border-r-8 border-t-3 border-b-3 bg-opacity-95"
      >
        <div class="p-2">
          <h1
            class="font-handwritten text-4xl font-bold tracking-wider text-chica-dark"
          >
            {{ $page.metadata.siteName }}
          </h1>
          <h2 class="text-base text-chica-orange italic -mt-2 tracking-wider">
            Japan Edition
          </h2>
        </div>

        <div>
          <Jappy class="h-12 w-12 fill-current text-chica-dark mb-1"></Jappy>
          <Pager
            :info="$page.entries.pageInfo"
            linkClass="pager__link"
            class="pager"
          />
        </div>
      </div>
    </template>

    <template v-slot:main>
      <sidebar-main>
        <template v-slot:side>
          <CardAbout class="border-t-6 border-chica-dark" />
        </template>
        <template v-slot:mainPanel>
          <div
            class="w-full bg-chica-light-yellowish border-t-6 border-chica-green"
          >
            <!-- <h1
              class="py-6 mx-8 mb-5 text-2xl font-semibold text-chica-dark border-b-2 border-chica-purp"
            ></h1> -->
            <div class="flex justify-center">
              <div
                class="w-72 bg-chica-green rounded-b-lg border-chica-dark-green border-2 flex justify-center"
              >
                <h1
                  class="text-xl text-chica-light-yellowish font-semibold p-1"
                >
                  Giappone
                </h1>
              </div>
            </div>
            <div class="flex flex-col space-y-10 mx-3 my-6">
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
    entries: allBlog(perPage: 9, page: $page, sort:{by:"created", order: DESC} ) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
         isFirst 
      isLast 
      }
      edges {
        node {
          title
          excerpt
          image(width: 800)
          path
          timeToRead
          humanTime: created(format: "DD MMM YYYY")
          created
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

import { Pager } from "gridsome";

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
    Pager,
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
<style lang="scss">
.pager {
  display: inline-block;
  width: 100%;
  text-align: center;

  &__link {
    color: var(--link-color);
    text-align: center;
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover:not(.active) {
      background-color: var(--bg-content-color);
      border-radius: 5px;
      color: var(--link-color);
    }
  }
}

.active {
  background-color: var(--bg-content-color);
  border-radius: 5px;
}
</style>
