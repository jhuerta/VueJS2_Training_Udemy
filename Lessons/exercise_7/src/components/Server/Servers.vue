<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                    <servername :server='server' ></servername>
            </li>
        </ul>
    </div>
</template>

<script>

import ServerInfo from './Server.vue';
import { eventBus } from './../../main';

export default {
	data: function()
	{
		return {
			servers:[
			{index:1,color: 'LIGHTCORAL', status: 'open'},
			{index:2,color: 'LIGHTSALMON', status: 'close'},
			{index:3,color: 'LIGHTCORAL', status: 'waiting'},
			{index:4,color: 'MOCCASIN', status: 'open'},
			{index:5,color: 'THISTLE', status: 'open'},
			{index:6,color: 'LIGHTCORAL', status: 'open'},
			{index:7,color: 'LIGHTCORAL', status: 'close'},
			{index:8,color: 'LIGHTCORAL', status: 'waiting'},
			{index:9,color: 'LIGHTCORAL', status: 'open'},
			{index:10,color: 'LIGHTSALMON', status: 'close'},
			]
		}
	},
	components: {
	    'servername': ServerInfo,
	  },

	  created: function(){
    var self = this;
    eventBus.$on('changeStatus', function(index, status) {
    	console.log(index,status);
      self.servers[index]=status;
      console.table(self.servers);
    } );
  }

}

</script>

<style>

</style>
