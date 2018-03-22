import Vue from 'vue'
import App from './App.vue'

/* --- Importing a component globally --- */
import Home from './Home.vue'
Vue.component('app-home-controller', Home);
/* ------ */

new Vue({
  el: '#app',
  render: h => h(App)
})
