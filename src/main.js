import Vue from "vue"
import Meta from "vue-meta"

import App from "./App.vue"
import router from "./router"

import "@/style/index.scss"
import "@/utils/rem"
import "@/utils/axios"
import store from "./store/index"
import global from "./utils/global"

Vue.config.productionTip = false
Vue.use(Meta)
Vue.use(global)

navigator.serviceWorker
  .register("/sw.js")
  .then(function(reg) {
    console.log("success", reg)
  })
  .catch(function(err) {
    console.log("fail", err)
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
