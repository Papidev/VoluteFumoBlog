<template>
  <div class="h-auto flex overflow-hidden bg-orange-100">
    <!-- Off-canvas menu for mobile -->
    <div v-show="sidebarOpen" class="md:hidden">
      <div
        v-show="sidebarOpen"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-0 z-30 transition-opacity ease-linear duration-300"
        @click="sidebarOpen = false"
      >
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
      <div class="fixed inset-0 flex z-40">
        <div
          v-show="sidebarOpen"
          x-transition:enter-start="-translate-x-full"
          x-transition:enter-end="translate-x-0"
          x-transition:leave-start="translate-x-0"
          x-transition:leave-end="-translate-x-full"
          class="flex-1 flex flex-col max-w-xs w-full bg-indigo-800 transform ease-in-out duration-300 "
        >
          <!-- Popup close button -->
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <button
              v-show="sidebarOpen"
              class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
              @click="sidebarOpen = false"
            >
              <svg
                class="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <!-- <div class="flex-shrink-0 flex items-center px-4">
              <img
                class="h-8 w-auto"
                src="/img/logos/workflow-logo-on-brand.svg"
                alt="Workflow"
              />
            </div> -->
            <nav class="mt-5 px-2">
              <slot name="side"></slot>
            </nav>
          </div>
        </div>
        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64 border-r border-gray-200 bg-indigo-800">
        <div class="h-0 flex-1 flex flex-col  overflow-y-auto">
          <!-- <div class="flex items-center flex-shrink-0 px-4">
            <img
              class="h-8 w-auto"
              src="/img/logos/workflow-logo-on-brand.svg"
              alt="Workflow"
            />
          </div> -->
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <nav class="flex-1 p-2 bg-indigo-800">
            <slot name="side"></slot>
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

  methods: {}
};
</script>
