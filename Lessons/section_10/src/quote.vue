<template>
  <div>
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
  margin: 2px;
  background-color: cyan;
  border: blue 2px solid;
}

</style>
