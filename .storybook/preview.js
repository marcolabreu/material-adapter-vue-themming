import "../src/styles"
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import VueMaterialAdapter from "vue-material-adapter";

Vue.use(VueCompositionAPI);
Vue.use(VueMaterialAdapter);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
