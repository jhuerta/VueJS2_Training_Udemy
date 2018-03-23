<template>
  <div class="user-address">
    <h2> User Adress </h2>

      <div>
    <div>
    <b>Address: {{address}}</b>
</div>
<div>
  	<b>Reversed Addresse: 
    {{reversed_address}}</b>
  </div>

  <div>
    <b>Prop Addresse: 
    {{param_address}}</b>
  </div>

  <div>
    <b>Age: 
    {{age_param}}</b>
  </div>

<div>
    <b>Global Age: 
    {{global_age}}</b>
  </div>



  </div>

  <button @click='resetAddress'>Reset Address</button>
  </div>
</template>

<script>
 
import Vue from 'vue';
import { eventBus } from './main';

export default {
  // Using prop as array or object with validation
	//props: ['address'],
  props: {
    //address: [ String/*Number, Array*/]
    param_address: {
      type: String,
      //required: true, 
      default: 'Eschenweg'},
      age_param: Number
  },
  data: function() {return {
    //address: this.param_address
    default_address : this.param_address,
    global_age: 0,
    }
  },
  computed:
  {
    reversed_address: function(){
      return this.address.split('').reverse().join('');
    },
    address: function(){
      return this.default_address;      
    }
  },
  methods:{
    resetAddress(){
      this.newaddress = 'reseted address';
      this.$emit('addressWasResetEvent', this.newaddress);
    },
    newGlobalAge(number)
    {
      this.global_age = number;
    }
  },
  created: function(){

    // Listening to global events
    // Watch out using on and this!!!!

    var self = this;

    eventBus.$on('globalCommunication', function(data) {
      self.newGlobalAge(data);
    } );

    // eventBus.$on('globalCommunication', (data) =>{
    //   this.newGlobalAge(data);
    // } );
  }
}
</script>

<style scoped>
.user-address {
  background-color: lightgreen;
  height: 150px;
  border: green 3px solid;
  width: 45%;
  float: right;

}

</style>
