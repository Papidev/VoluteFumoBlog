import Layout from "~/layouts/Layout.vue";
import "~/assets/scss/main.scss";

// require("typeface-caveat");

export default function (Vue) {
  //Vue.component("Layout", DefaultLayout);
  Vue.component("Layout", Layout);
}
