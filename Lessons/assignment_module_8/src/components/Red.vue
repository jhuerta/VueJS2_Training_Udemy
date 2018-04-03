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
		color: DARKRED;
		border: 1px solid DARKRED;
		background-color: white;
		padding: 3px;
	}
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>