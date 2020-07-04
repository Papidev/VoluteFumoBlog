<template>
  <header id="header" class="green-gradient tracking-widest">
    <nav class="h-full">
      <div class="flex items-center h-full">
        <div class="uppercase px-3">
          <slot></slot>
        </div>

        <div class="text-white px-2 p-1">
          <ul class="flex list-none justify-center">
            <!-- EMPTY -->
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  components: {},
};
</script>
