<template>
  <div class='col-sm-6 col-md-4 col-lg-3'>
        <slot></slot>
    <a @click='deleteQuote(quote_id)'>X</a>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
    
    }
  },
  props:
  {
      quote_id:0,
          delete_fnc: '',
    },
  methods : {
    deleteQuote(ind)
    {
      this.delete_fnc(ind);
    }
  }
}
</script>

<style scoped>
div {
  margin: 3px;
  padding: 2px;
  background-color: lightblue;
  border: darkblue 2px solid;
  font-family: 'Arizonia', cursive;
  font-size: 30px;
}
div:hover
{
  background-color: white;

}
a{
  cursor: pointer;
  float: right;
  margin-right: 10px;
}
a:hover{
  color: darkred;
  text-decoration: none;
  font-weight: bolder;

}

</style>
