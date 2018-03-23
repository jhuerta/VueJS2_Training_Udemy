<template>

  <div class='user-details'>
    <h2> User Details </h2>
  
  <div>
  	<b>Name: {{name}}</b>
  </div>

  <div>
    
  </div>

  <div>
    <b>Global Data: {{global_data}}</b>
  </div>

    <div>
    <b>Age: {{age}}</b>
  </div>

  <button @click='resetName'>Reset Name</button>
  <button @click='changeAge'>Increase Age</button>

  </div>
</template>

<script>

import { eventBus } from './main';

export default {
	props: {
    'name': String,
    'change_name_method' : Function,
    'age_param': {
      type: Number}},
  computed: 
  {
    reversed_name()
    {
      return this.name.split('').reverse().join('');
    }
  },
	data: function(){
		return {
      age: this.age_param,
		}
	},
  computed: {
    global_data: function(){
      return eventBus.$data.date;
    }
  },
  methods: {
    resetName(){
      this.change_name_method('','Name Has Been Reseted');
    },
    changeAge()
    {
      eventBus.$data.date = Date.now();
      this.age++;
      this.$emit('newAge',this.age);
      //eventBus.$emit('globalCommunication',this.age);
      eventBus.changeAgeGlobalMethod(this.age);
    }
  }
}
</script>

<style scoped>
.user-details {
  background-color: moccasin;
  height: 150px;
  border: red 3px solid;
  width: 45%;
  float: left;
}

</style>
