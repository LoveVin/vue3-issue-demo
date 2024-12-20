import Vue from "vue";
import App from "./App.vue";

Vue.config.ignoredElements = [
  'aa-bb',
]

new Vue({
  el: "#app",
  render(h) {
    return h(App)
  }
})