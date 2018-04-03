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
		color: DARKBLUE;
		border: 1px solid DARKBLUE;
		background-color: white;
		padding: 3px;
	}
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>