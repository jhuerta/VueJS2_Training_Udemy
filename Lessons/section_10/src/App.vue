<template>
    <div class="container">
    	<div class="row">
    		<quotes_counter> {{quotes.length}} </quotes_counter>
    		<header_progress :quote_perc='quotes.length' ></header_progress>
    	</div>
    	<div class="row">
    		<quotes :quotes='quotes'></quotes>
    	</div>

    </div>
</template>

<script>
	import Quote from './quote.vue';
	import Quotes from './quotes.vue';
	import Quotes_Counter from './quotes_counter.vue';
	import Header from './Header.vue';
    export default {
    	data: function(){
    		return {
    			quotes: ['1','2','3','4','5','6'],
    		}
    	},
  components: {
    'quote': Quote,
    'quotes': Quotes,
    'quotes_counter':  Quotes_Counter ,
    'header_progress':  Header ,
  },
    }
</script>

<style>
</style>
