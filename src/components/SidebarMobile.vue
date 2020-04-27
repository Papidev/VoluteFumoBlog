<!-- Off-canvas menu for mobile -->
<template>
  <div v-show="sidebarIsOpen" class="md:hidden">
    <div
      v-show="sidebarIsOpen"
      x-transition:enter-start="opacity-0"
      x-transition:enter-end="opacity-100"
      x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0"
      class="fixed inset-0 z-30 transition-opacity ease-linear duration-300"
      @click="closeSidebar"
    >
      <div class="absolute inset-0 bg-gray-600 opacity-75" />
    </div>
    <div class="fixed inset-0 flex z-40">
      <div
        v-show="sidebarIsOpen"
        x-transition:enter-start="-translate-x-full"
        x-transition:enter-end="translate-x-0"
        x-transition:leave-start="translate-x-0"
        x-transition:leave-end="-translate-x-full"
        class="flex-1 flex flex-col max-w-xs w-full bg-chica-bg transform ease-in-out duration-300"
      >
        <!-- Popup close button -->
        <div class="absolute top-0 right-0 -mr-14 p-1">
          <button
            v-show="sidebarIsOpen"
            class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
            @click="closeSidebar"
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
            <slot />
          </nav>
        </div>
      </div>
      <div class="flex-shrink-0 w-14">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { sidebarIsOpen: "" };
  },
  watch: {
    isOpen: function (newVal) {
      this.sidebarIsOpen = newVal;
    },
  },

  methods: {
    closeSidebar() {
      this.sidebarIsOpen = false;
      this.$emit("sidebarclosed");
    },
  },
};
</script>
