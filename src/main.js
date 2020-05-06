import DefaultLayout from "~/layouts/Default.vue";
// import VTooltip from "v-tooltip";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "~/assets/scss/main.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(fas);
library.add(fab);

export default function (Vue) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);

  // Vue.use(VTooltip, {
  //   defaultPlacement: "top-end",
  //   defaultClass:
  //     "bg-black text-xs px-2 leading-normal py-1 rounded absolute text-gray-400 max-w-xs mb-1",
  // });
  // head.link.push({
  //   rel: "stylesheet",
  //   href: "https://rsms.me/inter/inter.css",
  // });
}
