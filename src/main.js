import Layout from "~/layouts/Layout.vue";
import "~/assets/scss/main.scss";
require("typeface-aleo");

export default function (Vue) {
  //Vue.component("Layout", DefaultLayout);
  Vue.component("layout", Layout);
}
