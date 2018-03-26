<template>
	<div class="col-xs-12 col-sm-6">
	<h1>Server Details</h1>
    <div v-show="server != ''">
        <p>Server #{{server.index}} is {{server.status}}</p>
    </div>
    <hr>
    <button @click='changeStatus()'>Set to Normal</button>
    </div>

</template>

<script>


import Vue from 'vue';
import { eventBus } from './../../main';

export default {
	data: function()
	{
		return {
			server:'',
		}
	},
	methods: {
		changeStatus: function()
		{
			this.server.status = 'New Status'
		}
	},
  created: function(){
    var self = this;
    eventBus.$on('displayStatus', function(server) {
      self.server = server;
      
    } );
  }
}

</script>

<style>

</style>
