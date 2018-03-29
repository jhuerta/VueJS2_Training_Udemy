<template>
	<div>
		<slot name='title'>
			
			

		</slot>
		<slot name='subtitle'><i>Default Subtitle</i></slot>
		
		<hr>
		<slot name='content'></slot>
		<hr>
		<h3>Below here the default slot</h3>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props:['quoteText']
}
	
</script>

<style scoped>
	div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

</style>