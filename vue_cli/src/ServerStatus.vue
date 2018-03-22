<template>
	<span>
<h1>My Home Component</h1>
<div>My Status: {{status}}</div>
<button @click='change_status'>Change Status</button>
</span>
</template>

<script >
  export default{
    data: function(){
    	return {
    		status: 'critical',
    		count: 0
    	}
    },
    methods: {
    	change_status: function()
    	{
    		this.count++;
    		this.status = 'Normal ' + this.count;

    	},
    	other_method(){

    	}
    }
  }
</script>

<style>

</style>
