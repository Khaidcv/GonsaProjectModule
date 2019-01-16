import Vue from 'vue'
import axios from 'axios'
import router from './router/index'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'components/app-root'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

//router.beforeEach((to, from, next) => {
//  store.state.show_loading = true;
//  next();
//});


Vue.prototype.$http = axios

axios.get("/api/apiaccount/getCurrentuser").then(function (res) {
  store.state.user_info = res.data;
});

sync(store, router)

const app = new Vue({
  store,
  router,
  ...App
})

export {
  app,
  router,
  store
}
