import "normalize.css";
import Vue from "vue";
import App from "./App.vue";
import VueCompositionAPI from "@vue/composition-api";
import { button, textfield } from "vue-material-adapter";

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

Vue.use(button);
Vue.use(textfield);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
