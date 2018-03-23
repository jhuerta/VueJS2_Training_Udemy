import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue(
{
	data:  {
		date: Date.now()
			// Here you can add global variables
	},
	methods: 
	{
		changeAgeGlobalMethod(age){
			this.$emit('globalCommunication',age);
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})