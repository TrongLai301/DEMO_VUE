import "./assets/main.css";

// import Vue from 'vue';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "ja",
  fallbackLocale: "en",
  messages: {
    en: {
      message: {
        hello: "hello world",
      },
    },
    ja: {
      message: {
        hello: "こんにちは、世界",
      },
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");

// new Vue({
//     router,
//     i18n,
//     render: h => h(App),
// }).$mount('#app');
