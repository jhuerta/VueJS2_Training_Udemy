<template>
	<div>
		<h1>The Author</h1>
		<h2>{{counter}}</h2>
		<button @click='counter++'>Increase Counter</button>
	</div>
</template>

<script>
export default {
	data: function(){
		return {
			counter: 0
		}
	},
	activated(e){
		console.log('------------------------');
		console.log(e);
		console.log('------------------------');
		console.log('**************** Author activated ***********');
	},
	deactivated(e){
		console.log('------------------------');
		console.log(e);
		console.log('------------------------');
		console.log('------------ Author DEactivated -------------');
	},

}

</script>

<style>

</style>