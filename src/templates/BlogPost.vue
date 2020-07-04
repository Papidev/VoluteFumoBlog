<template>
  <post-layout>
    <template v-slot:header="{ navigation }">
      <navigation-list
        :navigationData="navigation"
        :filters="['POST']"
      ></navigation-list>
    </template>
  </post-layout>
</template>

<page-query>
  query($id: ID!, $previousElement: ID!, $nextElement: ID!) {
    blog(id: $id) {
      title
      path
      topic
      image(width: 1600, height: 800)
      image_caption
      excerpt
      content
      humanTime: created(format: "DD MMMM YYYY")
      datetime: created(format: "ddd MMM DD YYYY hh:mm:ss zZ")
      timeToRead
      tags {
        id
        title
        path
      }
      category {
        id
        title
        path
        belongsTo(limit: 4) {
          totalCount
          edges {
            node {
              ... on Blog {
                title
                path
              }
            }
          }
        }
      }
      author {
        id
        name
        image
        path
      }
      tags {
        id
        title
        path
      }
    }

    previous: blog(id: $previousElement) {
      title
      excerpt
      image(width: 800)
      path
      timeToRead
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

    next: blog(id: $nextElement) {
      title
      excerpt
      image(width: 800)
      path
      timeToRead
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
</page-query>

<script>
import Post from "~/components/Post";
import PostLayout from "~/layouts/PostLayout";
import NavigationItemList from "@/components/NavigationItemList";

export default {
  components: {
    Post,
    PostLayout,
    "navigation-list": NavigationItemList,
  },
  metaInfo() {
    return {
      title: this.$page.blog.title,
    };
  },
};
</script>
