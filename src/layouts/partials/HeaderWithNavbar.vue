<template>
  <header id="header" class="relative">
    <nav
      class="flex items-center justify-between flex-wrap container mx-auto px-4 sm:px-0 py-4 Z-50"
    >
      <div class="block flex-grow flex items-center w-auto height-30px">
        <div class="text-sm flex-grow uppercase">
          <ul class="list-none flex justify-left text-gray-300 uppercase">
            <li
              v-for="(element, index) in $static.metadata.navigation"
              :key="element.name"
              class="hover:text-white"
              :class="{
                'mr-4':
                  index != Object.keys($static.metadata.navigation).length - 1,
              }"
            >
              <a
                v-if="element.external"
                :href="element.link"
                target="_blank"
                rel="noopener noreferrer"
                class="animated-link"
                >{{ element.name }}</a
              >
              <g-link v-else :to="element.link" class="animated-link">{{
                element.name
              }}</g-link>
            </li>
          </ul>
        </div>

        <div class="inline-block text-gray-400">
          <ul class="list-none flex justify-center md:justify-end">
            <li class="mr-0 sm:mr-6">
              <ThemeSwitcher />
            </li>
            <li
              v-for="(element, index) in $static.metadata.social"
              :key="element.name"
              class="hover:text-white hidden sm:block"
              :class="{
                'mr-6':
                  index != Object.keys($static.metadata.social).length - 1,
              }"
            >
              <span class="text-sm">
                <a
                  :href="element.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome :icon="['fab', element.icon]" />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      class="bgimage w-screen pt-8 md:pt-16 text-center items-center text-chica-violet h-48 lg:h-72"
    >
      <h2 class="text-indigo-700">
        <span class="text-4xl">
          <font-awesome
            :icon="['fas', 'ghost']"
            class="mb-1 mr-4"
          ></font-awesome>
        </span>
        <span class="text-5xl">{{ $static.metadata.siteName }}</span>
      </h2>
      <div class="text-indigo-600 text-xl">
        {{ $static.metadata.siteDescription }}
      </div>
    </div>
  </header>
</template>

<script>
import ThemeSwitcher from "~/components/ThemeSwitcher";

export default {
  components: {
    ThemeSwitcher,
  },
};
</script>

<static-query>
  query {
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
  }
</static-query>
<style lang="scss" scoped>
.bgimage {
  background: url("../../assets/fuji_sunset.jpg") no-repeat center top;
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: auto;
}
</style>
