<template>
  <div class="h-auto flex overflow-hidden bg-yellow-100">
    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-84 border-r border-gray-200 bg-chica-violet">
        <div class="h-0 flex-1 flex flex-col overflow-y-auto">
          <!-- <div class="flex items-center flex-shrink-0 px-4">
            <img
              class="h-8 w-auto"
              src="/img/logos/workflow-logo-on-brand.svg"
              alt="Workflow"
            />
          </div> -->
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <nav class="flex-1 p-2">
            <slot name="side" />
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          @click.stop="sidebarOpen = true"
        >
          <svg
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main
        class="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6"
        tabindex="0"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <slot name="mainPanel" />
        </div>
      </main>
    </div>
    <sidebar-mobile :sidebarOpen="sidebarOpen"> <about-card /></sidebar-mobile>
  </div>
</template>
<script>
import SidebarMobile from "../../components/SidebarMobile";
import AboutCard from "~/components/AboutCard.vue";

export default {
  components: {
    "sidebar-mobile": SidebarMobile,
    "about-card": AboutCard,
  },
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {},
};
</script>
