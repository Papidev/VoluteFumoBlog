<template>
  <layout :img="img">
    <template v-slot:header="{ navigation }">
      <!-- <ul
        class="flex items-center list-none justify-left text-chica-light-yellow"
      >
        <li
          v-for="element in navigation"
          :key="element.for"
          class="hover:text-chica-red"
        >
          {{ element.for }}
        </li>
      </ul> -->

      <ul
        class="flex items-center list-none justify-left text-chica-light-yellow"
      >
        <li
          v-for="(element, index) in navigation"
          :key="element.for"
          class="hover:text-chica-red"
          :class="{
            'mr-8': index != Object.keys(navigation).length - 1,
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
    <!-- first slot -->
    <template v-slot:hero>
      <div
        class="w-116 flex items-center justify-around pl-8 pr-8 mt-20 rounded-r-lg border-chica-dark border-opacity-95 border-r-8 border-t-3 border-b-3 bg-chica-light-yellow bg-opacity-95"
      >
        <div class="p-2">
          <h1
            class="italic font-handwritten text-4xl font-bold tracking-wider text-chica-dark"
          >
            {{ $page.metadata.siteName }}
          </h1>
          <h2 class="text-base text-chica-red italic -mt-2 tracking-wider">
            Japan Edition
          </h2>
        </div>

        <div>
          <Jappy class="h-12 w-12 fill-current text-chica-dark mb-1"></Jappy>
        </div>
      </div>
    </template>

    <!-- second slot -->
    <template v-slot:main>
      <sidebar-main>
        <template v-slot:side>
          <CardAbout class="border-t-4 border-chica-dark-green" />
        </template>
        <template v-slot:mainPanel>
          <div
            class="w-full bg-chica-light-yellow border-t-4 border-chica-dark-green"
          >
            <div class="flex justify-center">
              <div
                class="w-72 green-gradient rounded-b-lg border-chica-dark-green border-2 flex justify-center"
              >
                <h1 class="text-xl text-chica-light-yellow font-semibold p-1">
                  Giappone
                </h1>
              </div>
            </div>
            <div class="flex flex-col space-y-10 ml-12 my-6">
              <Post
                v-for="edge in $page.entries.edges"
                :key="edge.node.id"
                :record="edge.node"
              />
            </div>
          </div>
          <div class="flex justify-center text-center mt-14 mb-8">
            <Pager
              :info="$page.entries.pageInfo"
              linkClass="text-chica-dark p-2 text-2xl font-bold rounded-lg hover:text-chica-pink hover:bg-chica-red"
              class="w-auto px-20 py-2 border-2 border-chica-dark rounded-lg"
            />
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
      # navigation: headerNavigation {
      #   name
      #   link
      #   external
      # }
      # social {
      #   icon
      #   link
      # }
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
import SidebarMain from "@/layouts/Partials/SidebarMain";
import CardAbout from "@/components/CardAbout";
import Post from "@/components/Post";

import { Pager } from "gridsome";
import LayoutTopicPage from "@/layouts/LayoutTopicPage";

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
    layout: LayoutTopicPage,
  },
  data() {
    return {
      img: {
        name: "people-walking-street.jpg",
        position: "center center",
      },
    };
  },
  computed: {
    navi() {
      return navigation;
    },
  },
};
</script>
