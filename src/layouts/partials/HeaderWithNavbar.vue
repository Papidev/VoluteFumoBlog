<template>
  <header id="header" class="bg-chica-pink">
    <nav class="z-50 h-auto border-chica-dark border-b-2">
      <div class="flex items-center">
        <div class="flex-grow text-xs uppercase px-3">
          <ul class="flex list-none justify-left text-gray-800">
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

        <div class="text-white px-2 p-1">
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
      class="bgimage w-screen pt-12 text-chica-dark h-48 lg:h-64 border-chica-dark border-b-2"
    >
      <div
        class="flex items-center mt-6 pl-6 pr-3 w-104 inline-block rounded-r-lg bg-chica-w italic border-chica-pink border-b-0 border-r-8 border-t-0"
      >
        <div>
          <Jappy class="h-12 w-12 fill-current text-chica-dark"></Jappy>
          <!-- <font-awesome
              :icon="['fas', 'ghost']"
              class="mb-1 mr-4"
            ></font-awesome> 
              -->
        </div>

        <div class="text-3xl md:text-5xl ml-3">
          <h2 class="pt-2 font-handwritten">{{ $static.metadata.siteName }}</h2>
        </div>

        <!-- <div class="text-white-600 text-xl">
          {{ $static.metadata.siteDescription }}
        </div> -->
      </div>
    </div>
  </header>
</template>

<script>
import ThemeSwitcher from "~/components/ThemeSwitcher";
import Jappy from "../../assets/svgs/jappy.svg";

export default {
  components: {
    ThemeSwitcher,
    Jappy,
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
  background: url("../../assets/people-walking-on-the-street-2506923.jpg")
    //Photo by Aleksandar Pasaric from Pexels
    no-repeat left center;
}

.headertitle {
  background: rgba(248, 237, 217, 0.9); /* Green background with 30% opacity */
}
</style>
