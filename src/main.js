import DefaultLayout from "~/layouts/Default.vue";
import NewLayout from "~/layouts/NewLayout.vue";
import "~/assets/scss/main.scss";

// require("typeface-caveat");

export default function (Vue) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("NewLayout", NewLayout);
}
