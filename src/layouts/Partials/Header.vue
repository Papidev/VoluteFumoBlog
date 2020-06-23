<template>
  <header id="header" class="bg-chica-green tracking-widest">
    <nav class="h-full">
      <div class="flex items-center h-full">
        <div class="uppercase px-3">
          <ul
            class="flex items-center list-none justify-left text-chica-light-yellowish"
          >
            <li
              v-for="(element, index) in $static.metadata.navigation"
              :key="element.name"
              class="hover:text-chica-orange"
              :class="{
                'mr-8':
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
            <!-- <li class="mr-3">
              <ThemeSwitcher />
            </li> -->
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
  </header>
</template>

<script>
//import ThemeSwitcher from "@/components/ThemeSwitcher";

export default {
  components: {},
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
