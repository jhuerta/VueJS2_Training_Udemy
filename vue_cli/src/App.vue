<template>
	<span>
<h1>Hello World!</h1>
<div>My data: {{the_data}}</div>
<hr>
<h2>The component below is registered globally</h2>
<app-home-controller></app-home-controller>
<hr>
<h2>The component below is registered locally</h2>
<hcomponent></hcomponent>
<hr>
<h1>Below a list of Components generated inside other component</h1>
<servers></servers>
</span>
</template>

<script >
	
import hcmp from './Home.vue';
import servers from './Servers.vue';

  export default{
    data: function(){
    	return {
    		the_data: 'this is the data'
    	}
    },
	components: {
      hcomponent: hcmp,
      servers: servers
    }
  }
</script>

<style>

</style>
