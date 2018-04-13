<template>
<div class="container">
  <div class='row'>
    <form>
      <div class="form-group">
        <label>Quote</label>
        <textarea class="form-control" type="text" v-model='new_quote' rows="5"></textarea>
        <button @click.prevent="addNewQuote(new_quote)" class="btn btn-primary">Add Quote</button>
      </div>
    </form>
  </div>
  <div class="row">
    <quote v-for='(quote_text,ind) in quotes' :delete_fnc='removeQuote' :quote_id='ind'>{{quote_text}}</quote>
  </div>
</div>
</template>
<script>
import Quote from './quote.vue';
export default {
props:{
quotes:Array
},
data: function(){
return {
new_quote: '',
}
},
components: {
'quote': Quote,
},
methods:{
addNewQuote(quote){
if(this.quotes.length  == 10)
{
alert('cant adde any more');
return;
}
this.quotes.push(quote);
this.new_quote = '';
},
removeQuote(ind)
{
this.quotes.splice(ind, 1);
}
}
}
</script>
<style>
</style>