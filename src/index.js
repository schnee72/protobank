import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// TODO - subcribe to store - persist in localstorage..
// TODO - use throttle so it only saves the state 1/sec at most
// TODO - consider splitting it so auth state is stored in sessionstorage

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
