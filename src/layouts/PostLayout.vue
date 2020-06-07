<template>
  <div>
    <div class="overflow-x-hidden">
      <div class="lg:mx-32 md:mx-16 sm:mx-8 mx-4 pt-8">
        <section class="mb-4 border-b bg-chica-light p-6">
          <span class="post-tag">
            <g-link :to="$page.blog.category.path" class="hover:underline">{{
              $page.blog.category.title
            }}</g-link>
          </span>
          <h1 class="post-title">
            {{ $page.blog.title }}
          </h1>
          <!-- <div class="post-text show" v-html="$page.blog.excerpt"></div> -->
        </section>
        <section class="bg-chica-light p-3">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <ul class="list-none flex author-list">
                <li
                  v-for="author in $page.blog.author"
                  :key="author.id"
                  class="author-list-item"
                >
                  <g-link v-tooltip="author.name" :to="author.path">
                    <g-image
                      :src="author.image"
                      :alt="author.name"
                      class="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-white"
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
                  <g-link
                    v-tooltip="author.name"
                    :to="author.path"
                    class="hover:underline p-1"
                    >{{ author.name }}</g-link
                  >
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
        </section>
      </div>
      <!--
      <section class="post-image mx-auto w-full">
        <g-image :src="$page.blog.image"></g-image>
      </section>

      <div class="lg:mx-32 md:mx-16 px-4 sm:px-0">
        <section
          class="post-content container mx-auto relative font-serif text-gray-700"
        >
          <div
            class="post-content-text text-xl"
            v-html="$page.blog.content"
          ></div>
        </section>

        <section class="post-tags container mx-auto relative py-10">
          <g-link
            v-for="tag in $page.blog.tags"
            :key="tag.id"
            :to="tag.path"
            class="text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full"
            >{{ tag.title }}</g-link
          >
        </section>
      </div> -->
    </div>

    <!-- <section
      class="post-related bg-black text-gray-200 pt-10 border-b border-b-gray-900"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4">
          <Post
            v-if="$page.previous"
            :record="$page.previous"
            :border="false"
          ></Post>
          <Post v-if="$page.next" :record="$page.next" :border="false"></Post>
        </div>
      </div>
    </section>  -->
  </div>
</template>
