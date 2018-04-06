<template>
    <div class="container">
    	<input type="text" v-model='new_quote' >
    	<button @click="addNewQuote(new_quote)">Add Quote</button>
    	<div v-for='(quote_text,ind) in quotes'>
    		<quote :delete_fnc='removeQuote' :quote_id='ind'>{{quote_text}}</quote>
    	</div>
    </div>
</template>

<script>
	import Quote from './quote.vue';
    export default {
    	data: function(){
    		return {
    			quotes: ['one','two','three','four','five','six'],
    			new_quote: '',
    		}
    	},
  components: {
    'quote': Quote,
  },
  methods:{
  	addNewQuote(quote){
  		console.log(quote);
  		this.quotes.push(quote);
  		this.new_quote = '';
  	},
  	removeQuote(ind)
  	{
  		console.log(ind);
  		console.log(this.quotes);
  		 this.quotes.splice(ind, 1);
  	}
  }
    }
</script>

<style>
</style>
