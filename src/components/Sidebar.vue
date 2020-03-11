<template>
  <div class="h-screen flex overflow-hidden bg-red-100">
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex-1 flex flex-col pt-5 pb-4 pr-4 pl-4  bg-red-200">
        <div class="items-center flex-shrink-0 px-4">
          <slot name="sidebarslot"></slot>
        </div>
      </div>
    </div>
    <slot name="mainpanelslot"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sidebarOpen: false
    };
  }
};
</script>
