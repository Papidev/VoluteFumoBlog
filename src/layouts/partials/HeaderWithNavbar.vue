<template>
  <header id="header">
    <nav class="z-50 h-auto">
      <div class="flex items-center">
        <div class="flex-grow text-sm uppercase bg-blue-700 p-3">
          <ul class="flex list-none justify-left text-gray-400">
            <li
              v-for="(element, index) in $static.metadata.navigation"
              :key="element.name"
              class="hover:text-red-600"
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
                >{{ element.name }}</a
              >
              <g-link v-else :to="element.link">
                <span>{{ element.name }}</span>
              </g-link>
            </li>
          </ul>
        </div>

        <div class="text-white p-2">
          <ul class="flex list-none justify-center">
            <li class="mr-3">
              <ThemeSwitcher />
            </li>
            <!-- <li
              v-for="(element, index) in $static.metadata.social"
              :key="element.name"
              class="hover:text-green hidden sm:block"
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
            </li> -->
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
