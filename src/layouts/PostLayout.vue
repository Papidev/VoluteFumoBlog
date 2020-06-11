<template>
  <div>
    <header-bar />
    <div class="bg-chica-greenish">
      <div class="flex flex-col items-center mx-48">
        <!-- image -->
        <div
          class="flex flex-col items-center border-chica-green border-l-2 border-r-2 border-b-2 rounded-b-lg"
        >
          <g-image
            :src="$page.blog.image"
            class="h-104 object-cover w-full"
          ></g-image>

          <!-- logo -->
          <div class="-my-16 z-10">
            <g-image
              src="@/assets/img/Volute_logo.png"
              alt="Federica Giustiziero photo"
              class="h-24 w-24 logo-round-orange"
            />
          </div>

          <!-- header -->
          <div class="bg-chica-dark p-6 mt-6">
            <span
              class="uppercase text-sm font-semibold text-chica-pinkish py-2 tracking-wide"
            >
              <g-link :to="$page.blog.category.path" class="hover:underline">{{
                $page.blog.category.title
              }}</g-link>
            </span>
            <h1 class="text-5xl font-bold py-2 text-chica-light-yellowish">
              {{ $page.blog.title }}
            </h1>
            <div
              class="h-12 overflow-hidden text-chica-light-yellowish"
              v-html="$page.blog.excerpt"
            ></div>
          </div>

          <!-- body -->
          <div
            class="text-chica-dark bg-chica-light-yellowish p-10 text-xl"
            v-html="$page.blog.content"
          ></div>
        </div>

        <!-- autore -->
        <div class="bg-chica-greenish p-3 w-full div mt-2">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <ul class="list-none flex author-list">
                <li
                  v-for="author in $page.blog.author"
                  :key="author.id"
                  class="author-list-item"
                >
                  <g-link :to="author.path">
                    <g-image
                      :src="author.image"
                      :alt="author.name"
                      class="h-10 w-10 sm:h-10 sm:w-10 rounded-full border-2 border-chica-orange"
                    />
                  </g-link>
                </li>
              </ul>
            </div>
            <div class="pl-3 flex flex-col text-xs leading-none uppercase">
              <p>
                <span
                  v-for="(author, index) in $page.blog.author"
                  :key="author.id"
                >
                  <g-link :to="author.path" class="hover:underline p-1">{{
                    author.name
                  }}</g-link>
                  <span v-if="index < $page.blog.author.length - 1">,</span>
                </span>
              </p>
              <p class="text-gray-700 p-1">
                <time :datetime="$page.blog.datetime">{{
                  $page.blog.humanTime
                }}</time>
              </p>
            </div>
          </div>
        </div>

        <!-- tags -->
        <div class="mt-5">
          <g-link
            v-for="tag in $page.blog.tags"
            :key="tag.id"
            :to="tag.path"
            class="py-3 px-6 mr-2 text-sm font-semibold tracking-widest bg-chica-orange bg-opacity-85 hover:text-chica-green hover:bg-opacity-50 border-chica-dark text-white rounded-full"
            >{{ tag.title }}</g-link
          >
        </div>

        <!-- Post Thumb list -->
        <div
          class="w-full overflow-hidden bg-chica-pinkish mt-12 border-3 border-chica-dark rounded-lg"
        >
          <div
            class="w-48 bg-chica-dark rounded-br-lg border-chica-dark border-2"
          >
            <h1 class="text-2xl text-chica-pinkish font-semibold p-2">
              Potrebbe intessarti
            </h1>
          </div>

          <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:mx-4 my-3">
            <div>
              <post-thumb
                v-if="$page.previous"
                :record="$page.previous"
                :border="false"
              ></post-thumb>
              <post-thumb
                v-if="$page.next"
                :record="$page.next"
                :border="false"
              ></post-thumb>
            </div>
          </div>
        </div>
      </div>
      <footer-bar class="mt-8" />
    </div>
  </div>
</template>
<script>
import PostThumb from "~/components/PostThumb";
import Header from "@/layouts/Partials/Header";
import Footer from "@/layouts/Partials/Footer";
export default {
  components: {
    PostThumb,
    "header-bar": Header,
    "footer-bar": Footer,
  },
};
</script>
