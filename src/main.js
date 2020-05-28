import Layout from "~/layouts/Layout.vue";
import "~/assets/scss/main.scss";
require("typeface-aleo");
require("typeface-nothing-you-could-do");

export default function (Vue) {
  //Vue.component("Layout", DefaultLayout);
  Vue.component("layout", Layout);
}
