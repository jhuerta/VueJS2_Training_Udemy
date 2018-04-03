<template>
    <div>
    	<slot></slot>
    </div>
</template>

<script>

</script>

<style scoped>
	.slot{
		font-weight: bold;
		color: DARKGREEN;
		border: 1px solid DARKGREEN;
		background-color: white;
		padding: 3px;
	}
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>