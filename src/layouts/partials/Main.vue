<template>
  <div class="h-auto flex overflow-hidden bg-orange-800">
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

    <!-- Sidebar  desktop -->

    <div
      class="hidden md:flex flex-col flex-shrink-0 bg-red-400 text-gray-800 text-center px-4 py-2 m-2 w-1/6"
    >
      <nav>
        <slot name="side"></slot>
      </nav>
    </div>
    <main class="flex-1 overflow-hidden pt-2 pb-6 focus:outline-none md:py-6 border-4" tabindex="0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <slot name="mainPanel"></slot>
      </div>
    </main>

    <!-- <div class="flex flex-col w-0 overflow-hidden">
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

    
      
    </div>-->
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
