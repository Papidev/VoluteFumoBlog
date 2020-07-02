<template>
  <div class="flex flex-col items-center mx-20 w-full">
    <!-- image -->
    <div
      class="flex flex-col items-center border-chica-dark border-l-2 border-r-2 border-b-2 rounded-b-lg"
    >
      <g-image :src="$page.blog.image" class="h-104 object-cover"></g-image>

      <!-- logo -->
      <div class="-my-16 z-10">
        <g-image
          src="@/assets/img/Volute_logo.png"
          alt="Federica Giustiziero photo"
          class="h-24 w-24 logo-round-orange"
        />
      </div>

      <!-- header -->
      <div class="bg-chica-light-violet p-6">
        <span
          class="text-sm text-chica-light-orange uppercase py-2 tracking-wider"
        >
          <g-link :to="$page.blog.category.path" class="hover:underline">{{
            $page.blog.category.title
          }}</g-link>
        </span>
        <h1 class="text-chica-pinkish text-5xl font-bold py-2">
          {{ $page.blog.title }}
        </h1>
        <div
          class="text-chica-pinkish h-12 overflow-hidden"
          v-html="$page.blog.excerpt"
        ></div>
      </div>

      <!-- body -->
      <div
        class="text-chica-dark bg-chica-light-yellow p-10 text-xl"
        v-html="$page.blog.content"
      ></div>

      <div class="bg-chica-light-violet text-chica-pinkish w-full">
        <!-- authors -->
        <div class="flex mt-2">
          <ul class="list-none flex author-list p-2 pl-3">
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

          <div class="flex flex-col text-sm uppercase p-2">
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
            <p class="p-1">
              <time :datetime="$page.blog.datetime">{{
                $page.blog.humanTime
              }}</time>
            </p>
          </div>
        </div>
        <!-- tags -->
        <div class="p-4 flex justify-center">
          <g-link
            v-for="tag in $page.blog.tags"
            :key="tag.id"
            :to="tag.path"
            class="py-3 px-6 mr-2 text-sm font-semibold tracking-widest bg-chica-light-orange hover:text-chica-green hover:bg-opacity-50 border-chica-dark text-white rounded-full"
            >{{ tag.title }}</g-link
          >
        </div>
      </div>
    </div>

    <!-- Post Thumb list -->
    <div
      class="overflow-hidden bg-chica-pink mt-24 mb-16 border-3 border-chica-dark rounded-lg"
    >
      <div class="w-64 bg-chica-dark rounded-br-lg border-chica-dark border-2">
        <h1 class="text-2xl text-chica-pinkish font-semibold p-2">
          Potrebbe interessarti
        </h1>
      </div>

      <div class="flex flex-wrap p-3 mb-8">
        <post-thumb
          v-if="$page.previous"
          :record="$page.previous"
          :border="false"
          class="p-3 mt-2"
        ></post-thumb>
        <post-thumb
          v-if="$page.next"
          :record="$page.next"
          :border="false"
          class="p-3 mt-2"
        ></post-thumb>
      </div>
    </div>
  </div>
</template>
<script>
import PostThumb from "@/components/PostThumb";

export default {
  components: {
    PostThumb,
  },
};
</script>
