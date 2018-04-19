<template>
	<div class="form-group">

    <label for="name">Name</label>
    <input type="name" class="form-control" id="fn_name" aria-describedby="nameHelp" placeholder="Name" :value='firstname' @input="updateInfo(true,$event)">
    <label for="lastname">Lastname</label>
    <input type="lastname" class="form-control" id="fn_lastname" aria-describedby="lastnameHelp" placeholder="Lastname" :value='surname' @input="updateInfo(false,$event)">
  </div>
</template>

<script>
export default {
	props: ['value'],
	data: function()
	{
		return {
			name: this.value.split(" ")[0],
			lastname: this.value.split(" ")[1]
		}
	},
	methods: {
		updateInfo(isFirstName,event){
			if(isFirstName)
			{
				this.name = event.target.value;
			}
			else
			{
				this.lastname = event.target.value;
			}

			
			this.$emit('input',this.fullname);
		}
	},
	computed: {
		fullname() {
			var fullname = this.name + ' ' + this.lastname;
			return fullname;
		},
		firstname(){
			return this.value.split(" ")[0];
		},
		surname(){
			return this.value.split(" ")[1];
		},
	}

}
	
</script>

<style>
	
</style>