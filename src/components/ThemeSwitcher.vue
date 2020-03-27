<template>
  <a
    role="button"
    :aria-label="'Toggle ' + nextTheme"
    :title="'Toggle ' + nextTheme"
    class="toggle-theme"
    @click.prevent="toggleTheme()"
  >
    <font-awesome
      v-if="theme === 'dark'"
      :icon="['fas', 'sun']"
      class="mr-3"
    ></font-awesome>
    <font-awesome
      v-if="theme === 'light'"
      :icon="['fas', 'moon']"
      class="mr-3"
    ></font-awesome>
  </a>
</template>

<script>
let themes = ["light", "dark"];

export default {
  data() {
    return {
      theme: "light"
    };
  },
  computed: {
    nextTheme() {
      const currentIndex = themes.indexOf(this.theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    }
  },
  async mounted() {
    // set default
    if (typeof window.__theme !== "undefined") this.theme = window.__theme;
  },
  methods: {
    toggleTheme() {
      const currentIndex = themes.indexOf(this.theme);
      const nextIndex = (currentIndex + 1) % themes.length;
      window.__setPreferredTheme(themes[nextIndex]);
      this.theme = themes[nextIndex];
    }
  }
};
</script>
