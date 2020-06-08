<template>
  <div class="flex flex-col items-center mx-64">
    <!-- image -->
    <div class="my-6">
      <g-image :src="$page.blog.image" class="h-104 object-cover"></g-image>
    </div>

    <!-- logo -->
    <div class="-my-16 z-10">
      <g-image
        src="@/assets/img/Volute_logo.png"
        alt="Federica Giustiziero photo"
        class="h-24 w-24 logo-round-orange"
      />
    </div>

    <!-- title -->
    <div class="border-b bg-chica-light p-6">
      <span class="post-tag">
        <g-link :to="$page.blog.category.path" class="hover:underline">{{
          $page.blog.category.title
        }}</g-link>
      </span>
      <h1 class="post-title">
        {{ $page.blog.title }}
      </h1>
      <div
        class="h-12 overflow-hidden text-chica-purple"
        v-html="$page.blog.excerpt"
      ></div>
    </div>

    <!-- body -->
    <div
      class="text-chica-dark bg-chica-yellowish p-10 text-xl"
      v-html="$page.blog.content"
    ></div>

    <!-- tags -->
    <div class="py-10">
      <g-link
        v-for="tag in $page.blog.tags"
        :key="tag.id"
        :to="tag.path"
        class="py-3 px-6 mr-2 text-sm font-semibold tracking-widest bg-chica-orange bg-opacity-85 hover:text-chica-purple hover:bg-opacity-50 border-chica-dark text-white rounded-full"
        >{{ tag.title }}</g-link
      >
    </div>

    <!-- autore -->
    <section class="bg-chica-light p-3 w-full">
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
            <span v-for="(author, index) in $page.blog.author" :key="author.id">
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
    </section>
  </div>
</template>
