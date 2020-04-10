<template>
  <div
    class="flex flex-col items-center bg-yellow-100 overflow-hidden shadow rounded-lg flex-shrink-0 p-1"
  >
    <g-image
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt="Federica Giustiziero photo"
      class="h-40 w-40 rounded-full m-3"
    />

    <div class="block p-4 w-full h-72">
      contentino
      <social-link
        v-for="social in socials"
        :key="social.id"
        :svg="social.svg"
        :link="social.link"
      />
    </div>
  </div>
</template>
<script>
import Social from "./Social";
export default {
  components: {
    "social-link": Social,
  },
  data() {
    return {
      socials: [
        {
          id: "1",
          svg: {
            title: "facebook icon link",
            viewbox: "0 0 408.79 408.79",
            fillColor: "#475993",
            d:
              "M353.7 0H55.1A55.09 55.09 0 000 55.09V353.7A55.08 55.08 0 0055.1 408.8h147.27l.25-146.08h-37.95a8.95 8.95 0 01-8.95-8.92l-.18-47.09a8.95 8.95 0 018.95-8.99h37.88v-45.5c0-52.8 32.25-81.55 79.35-81.55h38.65c4.95 0 8.96 4.01 8.96 8.96v39.7c0 4.95-4.01 8.95-8.95 8.96h-23.72c-25.62 0-30.58 12.18-30.58 30.04v39.4h56.29a8.95 8.95 0 018.89 10l-5.58 47.09a8.96 8.96 0 01-8.9 7.9h-50.45l-.25 146.08h87.63a55.08 55.08 0 0055.09-55.09V55.08A55.09 55.09 0 00353.7 0z",
          },
          link: "https://it-it.facebook.com/fgiustiziero",
        },
      ],
    };
  },
};
</script>
