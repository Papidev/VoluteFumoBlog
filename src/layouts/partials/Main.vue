<template>
  <div class="h-auto flex overflow-hidden bg-gray-100">
    <!-- Off-canvas menu for mobile -->
    <div v-show="sidebarOpen" class="md:hidden">
      <div
        @click="sidebarOpen = false"
        v-show="sidebarOpen"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-0 z-30 transition-opacity ease-linear duration-300"
      >
        <!-- <div class="absolute inset-0 bg-red-600 opacity-75"></div> -->
      </div>
      <div class="flex fixed inset-0 bg-indigo-600 z-40">
        <div
          v-show="sidebarOpen"
          x-transition:enter-start="-translate-x-full"
          x-transition:enter-end="translate-x-0"
          x-transition:leave-start="translate-x-0"
          x-transition:leave-end="-translate-x-full"
          class="flex-1 flex flex-col max-w-xs w-full bg-indigo-400 transform ease-in-out duration-300"
        >
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <nav class="mt-5 px-2">
              <slot name="side"></slot>
              <!-- <img
                class="inline-block h-32 w-32 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt
              />-->
            </nav>
          </div>
        </div>

        <div class="absolute top-0 right-0 p-2">
          <button
            v-show="sidebarOpen"
            v-on:click="toggleSidebar"
            class="flex bg-blue-600 items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
          >
            <!-- icona X -->
            <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64 border-r border-gray-200 bg-indigo-800">
        <div class="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <!-- <div class="flex items-center flex-shrink-0 px-4">
              <img
                class="h-8 w-auto"
                src="/img/logos/workflow-logo-on-brand.svg"
                alt="Workflow"
              />
          </div>-->
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <nav class="mt-5 flex-1 px-2 bg-indigo-800">
            <div class="flex-shrink-0 flex border-t border-indigo-700 p-4">
              <a href="#" class="flex-shrink-0 group block focus:outline-none">
                <div class="flex items-center">
                  <div>
                    <slot name="side"></slot>
                  </div>
                  <!-- <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-white">Tom Cook</p>
                    <p
                      class="text-xs leading-4 font-medium text-indigo-300 group-hover:text-indigo-100 group-focus:underline transition ease-in-out duration-150"
                    >View profile</p>
                  </div>-->
                </div>
              </a>
            </div>

            <!-- <a
                href="#"
                class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-indigo-900 focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150"
              >
                <svg
                  class="mr-3 h-6 w-6 text-indigo-400 group-focus:text-indigo-300 transition ease-in-out duration-150"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                  />
                </svg>
                Dashboard
            </a>-->
          </nav>
        </div>
        <!-- <div class="flex-shrink-0 flex border-t border-indigo-700 p-4">
            <a href="#" class="flex-shrink-0 group block focus:outline-none">
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block h-32 w-32 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm leading-5 font-medium text-white">
                    Tom Cook
                  </p>
                  <p
                    class="text-xs leading-4 font-medium text-indigo-300 group-hover:text-indigo-100 group-focus:underline transition ease-in-out duration-150"
                  >
                    View profile
                  </p>
                </div>
              </div>
            </a>
        </div>-->
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          @click.stop="sidebarOpen = true"
          class="bg-red-200 -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
        >
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
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
        class="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6 border-4"
        tabindex="0"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <slot name="mainPanel"></slot>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sidebarOpen: false
    };
  },

  methods: {
    toggleSidebar: function() {
      console.log("PIPPONE");
      this.sidebarOpen = !this.sidebarOpen;
    }
  },

  mounted() {
    // $el.focus();
  }
};
</script>
