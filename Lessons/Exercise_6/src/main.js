import Vue from 'vue'
import App from './App.vue'
import JHeader from './JHeader.vue'
import JFooter from './JFooter.vue'
import JBody from './JBody.vue'

Vue.component('j-header', JHeader);
Vue.component('j-footer', JFooter);
Vue.component('j-body', JBody);

new Vue({
  el: '#app',
  render: h => h(App)
})
