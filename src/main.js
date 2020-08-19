import Vue from "vue";
import App from "./App.vue";
import VueCompositionAPI from "@vue/composition-api";
import VueMaterialAdapter from "vue-material-adapter";

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

Vue.use(VueMaterialAdapter);

new Vue({
  render: h => h(App)
}).$mount("#app");
