<template>
  <nav class="h-28 green-gradient text-lg text-chica-pink">
    <div class="flex">
      <!-- left side -->
      <div class="pl-4 pb-1 pt-4 w-120">
        <div>
          Copyright {{ currentYear }} by {{ $static.metadata.siteName }}
        </div>

        <div class="mt-3 font-medium">
          Developed by
          <a
            :href="$static.metadata.developerUrl"
            target="_blank"
            class="hover:text-white"
          >
            {{ $static.metadata.siteDeveloper }}</a
          >
        </div>
        <div class="font-light text-base">
          Powered by
          <a href="https://ghost.org" target="_blank" class="hover:text-white"
            >Ghost Template</a
          >
          by William
        </div>
      </div>

      <!-- right side -->
      <div class="w-384 pr-8 pt-5">
        <div class="flex items-center justify-end">
          <slot></slot>

          <!-- <div class="ml-48">
            <ul class="list-none flex justify-center md:justify-end">
              <li
                :key="element.name"
                v-for="(element, index) in $static.metadata.navigation"
                class="hover:text-white"
                v-bind:class="{
                  'mr-6':
                    index !=
                    Object.keys($static.metadata.navigation).length - 1,
                }"
              >
                <a
                  :href="element.link"
                  v-if="element.external"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ element.name }}</a
                >
                <g-link v-else :to="element.link">{{ element.name }}</g-link>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDeveloper
    developerUrl
    # navigation : footerNavigation {
    #   name
    #   link
    #   external
    # }
  }
}
</static-query>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
