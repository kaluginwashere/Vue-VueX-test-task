import './plugins/bootstrap';
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  VueCarousel,
  render: (h) => h(App),
}).$mount('#app');
